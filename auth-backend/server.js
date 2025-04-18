require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const { spawn } = require('child_process');

const app = express();
app.use(express.json({ limit: '10mb' }));

const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  familyName: { type: String, default: '' },
  familyContact: { type: String, default: '' }
});

const User = mongoose.model('User', userSchema);

// Mood Analysis Endpoint
app.post('/analyze-mood', async (req, res) => {
  try {
    const { image } = req.body;
    if (!image) return res.status(400).json({ message: 'No image provided' });

    const imagePath = 'temp_image.jpeg';
    fs.writeFileSync(imagePath, Buffer.from(image, 'base64'));

    // Run analysis in a separate process to avoid blocking the main thread
    const pythonProcess = spawn('python', ['analyze_mood.py', imagePath]);

    let mood = '';
    let errorMessage = '';

    pythonProcess.stdout.on('data', data => {
      mood += data.toString();
    });

    pythonProcess.stderr.on('data', data => {
      errorMessage += data.toString();
    });

    pythonProcess.on('close', code => {
      if (code === 0) {
        res.json({ mood: mood.trim() });
      } else {
        console.error(`Error: ${errorMessage}`);
        res.status(500).json({ message: 'DeepFace analysis failed' });
      }
    });
  } catch (error) {
    console.error('Error:', error);
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

// Login Route
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

app.put('/profile/family', async (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { familyName, familyContact } = req.body;

    const user = await User.findByIdAndUpdate(decoded.userId, { familyName, familyContact }, { new: true, runValidators: true }).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'Family details updated successfully' });
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
const journalEntrySchema = new mongoose.Schema({
  date: { type: Date, required: true, unique: true }, // ensure only one entry per day
  content: { type: String, required: true }
});

const JournalEntry = mongoose.model('JournalEntry', journalEntrySchema);
const moment = require('moment-timezone');

// Save Journal Entry Route
app.post('/journal', async (req, res) => {
  try {
    const { mood, bodyFeeling, reflectionText, therapeuticAnswers, day, month, year } = req.body;

    // Ensure the date is in Asia/Karachi timezone
    const journalDate = moment
      .tz({ year, month: month - 1, day }, 'Asia/Karachi')
      .startOf('day')
      .utc()
      .toDate();

    if (isNaN(journalDate.getTime())) {
      return res.status(400).json({ message: 'Invalid Date' });
    }

    const content = JSON.stringify({ mood, bodyFeeling, reflectionText, therapeuticAnswers });

    await JournalEntry.findOneAndUpdate({ date: journalDate }, { content }, { upsert: true, new: true });

    res.status(201).json({ message: 'Journal entry saved successfully' });
  } catch (error) {
    console.error('Error saving journal entry:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Fetch Journal Entry Route
app.get('/journal/:date', async (req, res) => {
  const { date } = req.params; // Date passed in format: 'YYYY-MM-DD'

  try {
    // Parse the date passed by the frontend, ensuring it's in the correct timezone
    const startDate = moment.tz(date, 'Asia/Karachi').startOf('day').utc().toDate();
    const endDate = moment.tz(date, 'Asia/Karachi').endOf('day').utc().toDate();

    const journalEntry = await JournalEntry.findOne({
      date: { $gte: startDate, $lte: endDate }
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

const axios = require('axios');

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
