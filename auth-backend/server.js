require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const corsOptions = {
  origin: '*', // Allow requests from any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

// Define JournalEntry Schema
const journalEntrySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, default: Date.now },
  content: { type: String, required: true }, // Store the content as a JSON string
});

const JournalEntry = mongoose.model("JournalEntry", journalEntrySchema);


// Registration Route
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Received data:", { name, email, password }); // Check data received

  // Check if the email already exists in the database
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  // Hash the password and save the new user
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();

  // Generate a JWT token for the new user
  const token = jwt.sign(
    { userId: newUser._id.toString() },
    process.env.JWT_SECRET
  );

  res.status(201).json({ message: "User registered successfully", token });
});

// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { userId: user._id.toString() },
      process.env.JWT_SECRET
    );
    res.json({ token, name: user.name });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Fetch User Details
app.get("/profile", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  console.log("Token received:", token);

  if (!token) {
    console.error("No token provided");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded);

    const user = await User.findById(
      new mongoose.Types.ObjectId(decoded.userId)
    ).select("-password");
    console.log("Fetched user:", user);

    if (!user) {
      console.error("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Update User Details
app.put("/profile", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { name, email } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      decoded.userId,
      { name, email },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Change Password Route
app.put("/profile/change-password", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(
      new mongoose.Types.ObjectId(decoded.userId)
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the current password is correct
    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    // Hash the new password and update
    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedNewPassword;
    await user.save();

    res.json({ message: "Password updated successfully" });
  } catch (error) {
    console.error("Error changing password:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete User Account
app.delete("/profile/delete", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findByIdAndDelete(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User account deleted successfully" });
  } catch (error) {
    console.error("Error deleting account:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

// Save Journal Entry Route
app.post("/journal", async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const {
      mood,
      bodyFeeling,
      reflectionText,
      therapeuticAnswers,
      day,
      month,
      year,
    } = req.body;

    console.log(`Received Date: Year: ${year}, Month: ${month}, Day: ${day}`);

    const journalDate = new Date(year, month - 1, day); // Adjust month because it's 0-based
if (isNaN(journalDate.getTime())) {
  return res.status(400).json({ message: "Invalid Date" });
}


    const newJournalEntry = new JournalEntry({
      userId: decoded.userId,
      date: journalDate,
      content: JSON.stringify({
        mood,
        bodyFeeling,
        reflectionText,
        therapeuticAnswers,
      }),
    });

    await newJournalEntry.save();
    res.status(201).json({ message: "Journal entry saved successfully" });
  } catch (error) {
    console.error("Error saving journal entry:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/journal/:year/:month/:day", async (req, res) => {
  const { year, month, day } = req.params;

  console.log(`Received Date: Year: ${year}, Month: ${month}, Day: ${day}`);

  try {
    // Local time start and end
    const startDate = new Date(year, month - 1, day, 0, 0, 0); // Start of the day
    const endDate = new Date(year, month - 1, day, 23, 59, 59); // End of the day

    // Convert both start and end dates to UTC
    const startDateUTC = new Date(startDate).toISOString();
    const endDateUTC = new Date(endDate).toISOString();

    console.log(`Start date: ${startDateUTC}, End date: ${endDateUTC}`);

    // Fetch the journal entry for the specific day using UTC dates
    const journalEntry = await JournalEntry.findOne({
      date: { $gte: startDateUTC, $lte: endDateUTC },
    });

    if (journalEntry) {
      res.json({ entry: journalEntry.content });
    } else {
      res.status(404).send("Journal entry not found");
    }
  } catch (error) {
    console.error("Error fetching journal entry:", error.message);
    res.status(500).json({ message: "Server error" });
  }
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

