
https://github.com/user-attachments/assets/199113f8-6387-4073-a3a6-742d5b316bf2
MindWatch – Mood & Health Tracker

A smart application to track your mood and well-being based on health data inputs

About the Project
MindWatch is a mobile app built to help users monitor their emotional and physical health through manually entered health metrics. Users can log their heart rate, blood pressure, and blood oxygen levels and track how these metrics correlate with their mood over time. This app aims to promote self-awareness and mental well-being through data-driven insights.

Tech Stack
Frontend: React Native

Mobile Testing: Expo

Backend: Node.js with Express

Database: MongoDB

Features
Track health metrics (heart rate, blood pressure, oxygen levels)

Log moods and emotions manually

View personalized trends and historical data

Simple and clean interface for smooth user interaction

Real-time sync with backend via API

How to Run Locally
1. Clone the repository

git clone https://github.com/YourUsername/mindwatch.git
cd mindwatch

2. Install frontend dependencies

cd frontend
npm install

3. Start the app with Expo

npx expo start
Scan the QR code with Expo Go on your phone to run the app.

4. Set up the backend

cd ../backend
npm install
node server.js

Ensure you have MongoDB running locally or provide your MongoDB URI in a .env file like:


MONGO_URI=mongodb://localhost:27017/mindwatch
