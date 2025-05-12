require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { spawn } = require('child_process');
const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const axios = require('axios');

const app = express();
app.use(express.json({ limit: '10mb' }));

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

const analysisRecordSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  mood: String,
  stressLevel: String,
  stressPercentage: Number,
  facialStressLevel: String,
  facialStressPercentage: Number,
  biometricStressLevel: String,
  biometricStressPercentage: Number,
  emotionData: Object,
  biometricData: Object
});

const AnalysisRecord = mongoose.model('AnalysisRecord', analysisRecordSchema);
// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  familyMembers: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true }
    }
  ],
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

const User = mongoose.model('User', userSchema);

// Mood Analysis Endpoint
app.post('/analyze-mood', async (req, res) => {
  try {
    const { image, biometrics } = req.body;

    if (!image && !biometrics) {
      return res.status(400).json({
        error: 'No data provided',
        message: 'Please provide either an image or biometric data for analysis'
      });
    }

    let mood = null; // Changed from 'Neutral' to null
    let facialStressLevel = null;
    let biometricStressScore = null;
    let finalStressScore = null;
    let emotionData = {};

    // Analyze facial expression only if image is provided
    if (image) {
      const imagePath = 'temp_image.jpeg';
      fs.writeFileSync(imagePath, Buffer.from(image, 'base64'));

      const pythonProcess = spawn('python', ['analyze_mood.py', imagePath]);

      let pythonOutput = '';
      let errorMessage = '';

      pythonProcess.stdout.on('data', data => {
        pythonOutput += data.toString();
      });

      pythonProcess.stderr.on('data', data => {
        errorMessage += data.toString();
      });

      await new Promise((resolve, reject) => {
        pythonProcess.on('close', code => {
          if (code === 0) {
            try {
              const result = JSON.parse(pythonOutput);
              if (result.error) {
                if (result.error === 'No face detected') {
                  mood = 'No face detected';
                  resolve(true);
                } else {
                  reject(new Error(result.message || 'Face analysis failed'));
                }
              } else {
                mood = result.mood || null;
                facialStressLevel = result.stressLevel || null;
                emotionData = result.emotionData || {};
                resolve(true);
              }
            } catch (parseError) {
              console.error('Error parsing Python output:', parseError);
              reject(new Error('Failed to parse analysis results'));
            }
          } else {
            console.error(`Python script error: ${errorMessage}`);
            reject(new Error('DeepFace analysis failed'));
          }
        });
      });
    }

    // Analyze biometric data if provided
    if (biometrics) {
      const { bloodPressure, heartRate, spo2 } = biometrics;
      biometricStressScore = calculateBiometricStressLevel(bloodPressure, heartRate, spo2);
    }

    // Only calculate facial stress score if we have facial data
    const facialStressScore =
      facialStressLevel !== null
        ? typeof facialStressLevel === 'string'
          ? {
              Low: 25,
              Moderate: 50,
              High: 85,
              Angry: 95,
              Fearful: 90
            }[facialStressLevel] || null
          : facialStressLevel
        : null;

    // Only calculate final score if we have at least one valid input
    if (facialStressScore !== null || biometricStressScore !== null) {
      finalStressScore = combineStressLevels(facialStressScore !== null ? facialStressScore : 0, biometricStressScore !== null ? biometricStressScore : 0);
    }

    // Determine stress level categories only if we have a score
    const stressLevel = finalStressScore !== null ? (finalStressScore >= 85 ? 'High' : finalStressScore >= 60 ? 'Moderate-High' : finalStressScore >= 30 ? 'Moderate' : 'Low') : 'N/A';

    const facialLevel = facialStressScore !== null ? (facialStressScore >= 85 ? 'High' : facialStressScore >= 60 ? 'Moderate-High' : facialStressScore >= 30 ? 'Moderate' : 'Low') : 'N/A';

    const biometricLevel =
      biometricStressScore !== null ? (biometricStressScore >= 85 ? 'High' : biometricStressScore >= 60 ? 'Moderate-High' : biometricStressScore >= 30 ? 'Moderate' : 'Low') : 'N/A';

    res.json({
      mood: mood !== null ? mood : 'N/A',
      stressLevel,
      stressPercentage: finalStressScore,
      facialStressLevel: facialLevel,
      facialStressPercentage: facialStressScore,
      biometricStressLevel: biometricLevel,
      biometricStressPercentage: biometricStressScore,
      emotionData
    });
  } catch (error) {
    console.error('Error analyzing mood:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Helper function to calculate stress from biometrics
function calculateBiometricStressLevel(bloodPressure, heartRate, spo2) {
  // Convert inputs to numbers
  const bp = bloodPressure ? bloodPressure.split('/').map(Number) : [0, 0];
  const systolic = bp[0] || 120;
  const diastolic = bp[1] || 80;
  const hr = Number(heartRate) || 72;
  const oxygen = Number(spo2) || 98;

  // Calculate individual metrics with more sensitivity to critical values
  let bpScore = 0;
  if (systolic >= 140 || diastolic >= 90) {
    // Stage 1 hypertension or higher
    bpScore = 70 + Math.min(30, ((systolic - 140) / 20) * 30 + ((diastolic - 90) / 10) * 30);
  } else if (systolic >= 130 || diastolic >= 80) {
    // Elevated
    bpScore = 40 + ((systolic - 130) / 10) * 30 + ((diastolic - 80) / 10) * 30;
  } else {
    // Normal
    bpScore = ((systolic - 90) / 40) * 40;
  }
  bpScore = Math.min(100, Math.max(0, bpScore));

  let hrScore = 0;
  if (hr >= 100) {
    // Tachycardia
    hrScore = 70 + Math.min(30, ((hr - 100) / 40) * 30);
  } else if (hr >= 80) {
    // Elevated
    hrScore = 40 + ((hr - 80) / 20) * 30;
  } else {
    // Normal
    hrScore = ((hr - 60) / 20) * 40;
  }
  hrScore = Math.min(100, Math.max(0, hrScore));

  let spo2Score = 0;
  if (oxygen <= 90) {
    // Hypoxemia
    spo2Score = 70 + (90 - oxygen) * 3;
  } else if (oxygen <= 94) {
    // Borderline
    spo2Score = 40 + (94 - oxygen) * 7.5;
  } else {
    // Normal
    spo2Score = (100 - oxygen) * 2;
  }
  spo2Score = Math.min(100, Math.max(0, spo2Score));

  // Weighted average (40% BP, 40% HR, 20% SpO2)
  const totalScore = bpScore * 0.4 + hrScore * 0.4 + spo2Score * 0.2;

  return Math.round(totalScore);
}

// Helper function to combine facial and biometric stress levels
function combineStressLevels(facialScore, biometricScore) {
  // If both are null, return null
  if (facialScore === null && biometricScore === null) {
    return null;
  }

  // Convert facial level to percentage if it's still a string
  let facialPercentage;
  if (typeof facialScore === 'string') {
    facialPercentage =
      {
        Low: 25,
        Moderate: 50,
        High: 85,
        Angry: 95,
        Fearful: 90
      }[facialScore] || 50;
  } else {
    facialPercentage = facialScore || 0; // Default to 0 if null
  }

  const biometricPercentage = biometricScore || 0; // Default to 0 if null

  // If either score is very high, prioritize that
  if (facialPercentage >= 85 || biometricPercentage >= 85) {
    return Math.max(facialPercentage, biometricPercentage);
  }

  // Weighted average (60% facial, 40% biometric)
  const combinedPercentage = facialPercentage * 0.6 + biometricPercentage * 0.4;

  return Math.round(combinedPercentage);
}

app.post('/save-analysis', async (req, res) => {
  try {
    const { token, analysisData } = req.body;

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    // Create a new record with all fields
    const newRecord = new AnalysisRecord({
      userId,
      mood: analysisData.mood || null,
      stressLevel: analysisData.stressLevel || null,
      stressPercentage: analysisData.stressPercentage !== undefined ? analysisData.stressPercentage : null,
      facialStressLevel: analysisData.facialStressLevel || null,
      facialStressPercentage: analysisData.facialStressPercentage !== undefined ? analysisData.facialStressPercentage : null,
      biometricStressLevel: analysisData.biometricStressLevel || null,
      biometricStressPercentage: analysisData.biometricStressPercentage !== undefined ? analysisData.biometricStressPercentage : null,
      emotionData: analysisData.emotionData || null,
      biometricData: analysisData.biometricData || null
    });

    await newRecord.save();

    res.status(201).json({ message: 'Analysis saved successfully', record: newRecord });
  } catch (error) {
    console.error('Error saving analysis:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add this endpoint to fetch analysis history
app.get('/analysis-history', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const records = await AnalysisRecord.find({ userId }).sort({ timestamp: -1 }).limit(50);

    res.json(records);
  } catch (error) {
    console.error('Error fetching analysis history:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Registration Route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const nameRegex = /^[A-Za-z\s]+$/;
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

  if (!nameRegex.test(name)) {
    return res.status(400).json({ message: 'Name must contain only letters and spaces' });
  }

  if (!strongPasswordRegex.test(password)) {
    return res.status(400).json({ message: 'Password is not strong enough' });
  }

  console.log('Received data:', { name, email, password }); // Check data received

  // Check if the email already exists in the database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // Hash the password and save the new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  // Generate a JWT token for the new user
  const token = jwt.sign({ userId: newUser._id.toString() }, process.env.JWT_SECRET);

  res.status(201).json({ message: 'User registered successfully', token });
});

// Login Route (unchanged)
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign({ userId: user._id.toString() }, process.env.JWT_SECRET);
    res.json({ token, name: user.name });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});

// Forgot Password Route (updated)
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  console.log('Forgot password request for:', email);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('No user found with email:', email);
      if (process.env.NODE_ENV !== 'production') {
        return res.json({
          message: 'No user found with this email (dev mode)',
          code: null
        });
      }
      return res.json({ message: 'If an account exists, a reset code has been sent.' });
    }

    const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    const resetCodeExpires = Date.now() + 3600000; // 1 hour

    // Use { new: true } to get the updated document
    const updatedUser = await User.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          resetPasswordToken: resetCode,
          resetPasswordExpires: new Date(resetCodeExpires)
        }
      },
      { new: true }
    );

    console.log('Updated user with reset code:', {
      email: updatedUser.email,
      resetCode: updatedUser.resetPasswordToken,
      expires: updatedUser.resetPasswordExpires
    });

    if (process.env.NODE_ENV !== 'production') {
      return res.json({
        message: 'Reset code generated (dev mode)',
        code: resetCode,
        email: updatedUser.email
      });
    }

    // In production, send email with code
    await transporter.sendMail({
      from: '"MindWatch Support" <mindwatch3@gmail.com>',
      to: user.email,
      subject: 'Your MindWatch Password Reset Code',
      text: `Your password reset code is: ${resetCode}\nThis code expires in 1 hour.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #003366; padding: 20px; text-align: center; color: white;">
            <h2>MindWatch Password Reset</h2>
          </div>
          <div style="padding: 20px; border: 1px solid #ddd;">
            <p>Hello ${user.name || 'User'},</p>
            <p>Your password reset code is:</p>
            <div style="font-size: 24px; font-weight: bold; text-align: center; margin: 20px 0;">
              ${resetCode}
            </div>
            <p>Enter this code in the app to reset your password.</p>
            <p>This code expires in 1 hour.</p>
          </div>
          <div style="padding: 10px; text-align: center; font-size: 12px; color: #666;">
            <p>© ${new Date().getFullYear()} MindWatch</p>
          </div>
        </div>
      `
    });

    res.json({ message: 'Password reset code sent to your email.' });
  } catch (error) {
    console.error('Error in forgot-password:', error);
    res.status(500).json({ message: 'Error sending reset code' });
  }
});

// Reset Password Route - Updated for code verification
app.post('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

  if (!strongPasswordRegex.test(newPassword)) {
    return res.status(400).json({
      message: 'Password must be 8+ characters with uppercase, lowercase, number, and special character'
    });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Update password and clear reset fields
    user.password = await bcrypt.hash(newPassword, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.json({ message: 'Password has been reset successfully' });
  } catch (error) {
    console.error('Reset error:', error);
    res.status(500).json({ message: 'Error resetting password' });
  }
});

app.post('/verify-reset-code', async (req, res) => {
  const { email, code } = req.body;
  console.log('Verification attempt:', { email, code });

  try {
    const user = await User.findOne({
      email,
      resetPasswordToken: code,
      resetPasswordExpires: { $gt: Date.now() }
    });

    if (!user) {
      console.log('Verification failed - no matching user or expired');
      // For better debugging, let's check why it failed
      const potentialUser = await User.findOne({ email });
      if (!potentialUser) {
        console.log('No user exists with this email');
      } else {
        console.log('User exists but:', {
          codeMatches: potentialUser.resetPasswordToken === code,
          notExpired: potentialUser.resetPasswordExpires > Date.now()
        });
      }
      return res.status(400).json({ message: 'Invalid or expired reset code' });
    }

    console.log('Verification successful for user:', user.email);
    res.json({ message: 'Code verified successfully' });
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ message: 'Error verifying code' });
  }
});

// Fetch User Details
app.get('/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  console.log('Token received:', token);

  if (!token) {
    console.error('No token provided');
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    const user = await User.findById(new mongoose.Types.ObjectId(decoded.userId)).select('-password');
    console.log('Fetched user:', user);

    if (!user) {
      console.error('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error('Error fetching profile:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update User Details
app.put('/profile', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(decoded.userId, { name, email }, { new: true, runValidators: true }).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Change Password Route
app.put('/profile/change-password', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(new mongoose.Types.ObjectId(decoded.userId));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Hash the new password and update
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error changing password:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update the family endpoint to:
app.put('/profile/family', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { familyMembers } = req.body;

    // Validate input
    if (!Array.isArray(familyMembers)) {
      return res.status(400).json({ message: 'Invalid family members data' });
    }

    // Validate each family member has name and email
    for (const member of familyMembers) {
      if (!member.name || !member.email) {
        return res.status(400).json({ message: 'Each family member must have both name and email' });
      }

      // Simple email validation
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(member.email)) {
        return res.status(400).json({ message: 'Invalid email format for family member' });
      }
    }

    // Update the user
    const user = await User.findByIdAndUpdate(decoded.userId, { $set: { familyMembers } }, { new: true, runValidators: true }).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      message: 'Family details updated successfully',
      familyMembers: user.familyMembers
    });
  } catch (error) {
    console.error('Error updating family details:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete User Account
app.delete('/profile/delete', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByIdAndDelete(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error('Error deleting account:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Define JournalEntry Schema
const journalEntrySchema = new mongoose.Schema(
  {
    date: { type: Date, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true }
  },
  {
    // Add compound index to ensure one entry per user per day
    indexes: [{ unique: true, fields: ['date', 'user'] }]
  }
);

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
const moment = require('moment-timezone');

// Save Journal Entry Route
app.post('/journal', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { mood, bodyFeeling, reflectionText, therapeuticAnswers, day, month, year } = req.body;

    // Analyze sentiment
    const sentimentResult = sentiment.analyze(reflectionText);

    // Create date in Asia/Karachi timezone
    const journalDate = moment
      .tz({ year, month: month - 1, day }, 'Asia/Karachi')
      .startOf('day')
      .utc()
      .toDate();

    const content = JSON.stringify({
      mood,
      bodyFeeling,
      reflectionText,
      therapeuticAnswers,
      sentiment: {
        score: sentimentResult.score,
        comparative: sentimentResult.comparative,
        analysis: getSentimentLabel(sentimentResult.score)
      }
    });

    await JournalEntry.findOneAndUpdate(
      {
        date: journalDate,
        user: new mongoose.Types.ObjectId(decoded.userId)
      },
      { content },
      { upsert: true, new: true }
    );

    res.status(201).json({ message: 'Journal entry saved successfully' });
  } catch (error) {
    console.error('Error saving journal entry:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Helper function to convert score to label
function getSentimentLabel(score) {
  if (score > 0.5) return 'Very Positive';
  if (score > 0.1) return 'Positive';
  if (score < -0.5) return 'Very Negative';
  if (score < -0.1) return 'Negative';
  return 'Neutral';
}

// Enhanced sentiment analysis function
function analyzeJournalSentiment(entry) {
  // Negative indicators that should carry strong weight
  const STRONG_NEGATIVE_WORDS = [
    // Emotional states
    'overwhelmed',
    'failing',
    'disappointing',
    'disconnected',
    'hopeless',
    'helpless',
    'worthless',
    'miserable',
    'depressed',
    'anxious',
    'stressed',
    'frustrated',
    'angry',
    'irritable',
    'agitated',
    'lonely',
    'isolated',
    'abandoned',
    'rejected',
    'ashamed',
    'humiliated',
    'embarrassed',
    'guilty',
    'regretful',
    'remorseful',
    'sad',
    'unhappy',
    'gloomy',
    'heartbroken',
    'devastated',
    'desperate',
    'dread',
    'fearful',
    'terrified',
    'panicked',
    'nervous',
    'worried',
    'concerned',
    'apprehensive',
    'tense',
    'stressed',
    'burned out',
    'exhausted',
    'fatigued',
    'drained',
    'weary',
    'spent',

    // Physical sensations
    'heavy',
    'sore',
    'achy',
    'painful',
    'tired',
    'weak',
    'numb',
    'tense',
    'jittery',
    'shaky',
    'sick',
    'ill',
    'nauseous',
    'dizzy',
    'faint',

    // Cognitive states
    'scattered',
    'confused',
    'foggy',
    'forgetful',
    'distracted',
    'spacey',
    'indecisive',
    'uncertain',
    'doubtful',
    'pessimistic',
    'cynical',
    'skeptical',
    'suspicious',
    'paranoid',
    'delusional',

    // Behavioral indicators
    'withdrawn',
    'avoidant',
    'isolating',
    'hiding',
    'escaping',
    'procrastinating',
    'self-harming',
    'suicidal',
    'hurting',
    'abusing',
    'neglecting',

    // Life circumstances
    'failure',
    'loss',
    'grief',
    'trauma',
    'abuse',
    'neglect',
    'poverty',
    'homeless',
    'jobless',
    'broken',
    'damaged',
    'ruined',
    'destroyed',
    'hopeless',
    'pointless',
    'meaningless',
    'empty',
    'void',
    'alone'
  ];

  // Positive indicators (though none in this entry)
  const STRONG_POSITIVE_WORDS = [
    // Emotional states
    'happy',
    'joyful',
    'connected',
    'peaceful',
    'energized',
    'excited',
    'thrilled',
    'elated',
    'ecstatic',
    'blissful',
    'content',
    'satisfied',
    'fulfilled',
    'grateful',
    'thankful',
    'appreciative',
    'hopeful',
    'optimistic',
    'confident',
    'secure',
    'safe',
    'loved',
    'cherished',
    'valued',
    'respected',
    'admired',
    'supported',
    'understood',
    'accepted',
    'calm',
    'relaxed',
    'serene',
    'tranquil',
    'balanced',
    'centered',
    'mindful',
    'present',
    'aware',
    'awake',
    'alive',
    'vibrant',

    // Physical sensations
    'light',
    'energetic',
    'strong',
    'healthy',
    'fit',
    'flexible',
    'agile',
    'rested',
    'refreshed',
    'rejuvenated',
    'healed',
    'recovered',
    'well',
    'comfortable',
    'cozy',
    'warm',
    'tingly',
    'buzzy',
    'floaty',

    // Cognitive states
    'focused',
    'clear',
    'sharp',
    'brilliant',
    'smart',
    'creative',
    'inspired',
    'innovative',
    'productive',
    'efficient',
    'organized',
    'decisive',
    'certain',
    'determined',
    'resolute',
    'committed',
    'motivated',
    'driven',
    'ambitious',
    'purposeful',
    'meaningful',

    // Behavioral indicators
    'social',
    'outgoing',
    'friendly',
    'kind',
    'generous',
    'helpful',
    'compassionate',
    'empathetic',
    'loving',
    'caring',
    'nurturing',
    'supportive',
    'encouraging',
    'inclusive',
    'accepting',
    'forgiving',
    'patient',
    'tolerant',
    'understanding',
    'wise',

    // Life circumstances
    'success',
    'achievement',
    'accomplishment',
    'progress',
    'growth',
    'development',
    'improvement',
    'breakthrough',
    'opportunity',
    'blessing',
    'miracle',
    'fortune',
    'luck',
    'wealth',
    'abundance',
    'plenty',
    'enough',
    'stable',
    'secure',
    'comfortable',
    'harmonious',
    'balanced',
    'whole'
  ];
  const NEGATIVE_PHRASES = ["can't cope", 'falling apart', 'at my limit', 'hit rock bottom', 'losing control', 'nothing works', 'no way out', 'end of my rope'];

  const POSITIVE_PHRASES = ['on top of', 'in the zone', 'flow state', 'best day ever', "everything's working", 'full of energy', "can't wait to"];
  const INTENSIFIERS = ['extremely', 'incredibly', 'absolutely', 'completely', 'totally', 'utterly', 'exceptionally', 'remarkably', 'particularly'];

  // Convert text to lowercase for case-insensitive matching
  const textLower = text.toLowerCase();

  // Check for both individual words and phrases
  const negativeScore = STRONG_NEGATIVE_WORDS.filter(word => textLower.includes(word.toLowerCase())).length;

  const positiveScore = STRONG_POSITIVE_WORDS.filter(word => textLower.includes(word.toLowerCase())).length;
  // Base sentiment analysis
  const reflectionAnalysis = sentiment.analyze(entry.reflectionText);

  // Analyze each therapeutic answer
  const answersAnalysis = entry.therapeuticAnswers.filter(answer => answer && answer.trim() !== '').map(answer => sentiment.analyze(answer));

  // Check for strong negative phrases in reflection
  const strongNegativeCount = STRONG_NEGATIVE_WORDS.filter(word => entry.reflectionText.toLowerCase().includes(word)).length;

  // Check therapeutic answers for strong negatives
  const answerNegativeCount = entry.therapeuticAnswers
    .join(' ')
    .toLowerCase()
    .split(/\s+/)
    .filter(word => STRONG_NEGATIVE_WORDS.includes(word)).length;

  // Calculate base weighted score (60% reflection, 40% answers)
  const answersScore = answersAnalysis.length > 0 ? answersAnalysis.reduce((sum, curr) => sum + curr.score, 0) / answersAnalysis.length : 0;

  let weightedScore = reflectionAnalysis.score * 0.6 + answersScore * 0.4;

  // Apply strong negative adjustments
  if (strongNegativeCount > 0 || answerNegativeCount > 0) {
    const negativeImpact = 0.1 * (strongNegativeCount + answerNegativeCount);
    weightedScore = Math.max(-1, weightedScore - negativeImpact);
  }

  // Calculate comparative score with stronger emphasis on negative indicators
  const comparative = reflectionAnalysis.comparative * 0.6 + answersAnalysis.reduce((sum, curr) => sum + curr.comparative, 0) * 0.4;

  return {
    score: weightedScore,
    comparative: comparative,
    analysis: getEnhancedSentimentLabel(weightedScore, comparative)
  };
}

// More nuanced sentiment labeling
function getEnhancedSentimentLabel(score, comparative) {
  const absComparative = Math.abs(comparative);

  if (score > 0.7) {
    return absComparative > 0.5 ? 'Ecstatic' : 'Very Positive';
  }
  if (score > 0.4) {
    return absComparative > 0.4 ? 'Very Positive' : 'Positive';
  }
  if (score > 0.1) {
    return 'Positive';
  }
  if (score < -0.7) {
    return absComparative > 0.6 ? 'Distressed' : 'Very Negative';
  }
  if (score < -0.4) {
    return absComparative > 0.5 ? 'Very Negative' : 'Negative';
  }
  if (score < -0.15) {
    return 'Negative';
  }
  if (score < -0.05) {
    return 'Slightly Negative';
  }
  return 'Neutral';
}

// Fetch Journal Entry Route
app.get('/journal/:date', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { date } = req.params;

    // Parse the date with timezone
    const startDate = moment.tz(date, 'Asia/Karachi').startOf('day').utc().toDate();
    const endDate = moment.tz(date, 'Asia/Karachi').endOf('day').utc().toDate();

    const journalEntry = await JournalEntry.findOne({
      date: { $gte: startDate, $lte: endDate },
      user: new mongoose.Types.ObjectId(decoded.userId)
    });

    if (journalEntry) {
      res.json({ entry: JSON.parse(journalEntry.content) });
    } else {
      res.status(404).send('Journal entry not found');
    }
  } catch (error) {
    console.error('Error fetching journal entry:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

const predefinedResponses = {
  'situational depression':
    "It looks like you're dealing with a tough life change. Acknowledge your emotions and try talking to someone you trust. Engaging in physical activity and self-care can also help.",
  'persistent depressive disorder':
    "You're not alone. Managing long-term depression can be difficult, but small daily habits like gratitude journaling, mindfulness, and therapy can make a difference.",
  'major depressive disorder':
    "I'm sorry you're feeling this way. Seeking professional help can be very beneficial. In the meantime, deep breathing, meditation, and structured daily activities can help.",
  'atypical depression': 'Atypical depression can be confusing because moods fluctuate. Try maintaining a routine and engaging in activities that bring joy, even when it feels hard.',
  'postpartum depression': 'You are not alone in this journey. Connecting with a support group or therapist can help. Self-care and asking for help from loved ones are important.',
  'seasonal affective disorder': 'Changes in light exposure can impact mood. Try light therapy, spending more time outdoors, and maintaining social connections during darker months.',
  'study pressure': 'Feeling overwhelmed by studies? Try breaking tasks into smaller steps, using the Pomodoro technique (25 minutes of study, 5-minute break), and staying organized with a planner.',
  burnout: 'Burnout can be tough. Make sure to schedule breaks, prioritize self-care, and engage in activities that help you relax and recharge.',
  'social anxiety': 'Social situations can be stressful, but deep breathing exercises and small exposure steps can help. Remember, progress takes time.',
  'self-esteem': 'Building self-esteem starts with positive self-talk. Try writing down things you like about yourself and setting small, achievable goals.',
  loneliness: 'Feeling lonely? Try reaching out to a friend, joining a community group, or engaging in hobbies that connect you with others.',
  insomnia: 'Struggling with sleep? Try a bedtime routine, reducing screen time before bed, and practicing relaxation techniques like deep breathing.',
  'work stress': 'Work stress is common. Set boundaries, prioritize tasks, and take short breaks to reset your mind throughout the day.'
};

app.post('/chat', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });

  const lowerMessage = message.toLowerCase();
  const detectedKey = Object.keys(predefinedResponses).find(key => lowerMessage.includes(key));

  if (detectedKey) {
    return res.json({ reply: predefinedResponses[detectedKey] });
  }

  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-8b:generateContent',
      {
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: `You are a mental health chatbot for the Mindwatch app. Categorize the user's depression type and provide a personalized response with a coping strategy.\nNow, here is the user's message: "${message}"`
              }
            ]
          }
        ],
        safetySettings: [{ category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
          topP: 0.9,
          topK: 40
        }
      },
      {
        headers: { 'Content-Type': 'application/json' },
        params: { key: process.env.GOOGLE_AI_KEY }
      }
    );

    const botReply = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'I am here to support you with mental health and Mindwatch-related queries.';

    res.json({ reply: botReply });
  } catch (error) {
    console.error('Chatbot error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch response from AI' });
  }
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
