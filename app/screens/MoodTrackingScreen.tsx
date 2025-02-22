import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const moods = [
  { label: "😊 Happy", value: "happy" },
  { label: "😐 Neutral", value: "neutral" },
  { label: "😢 Sad", value: "sad" },
  { label: "😠 Angry", value: "angry" },
  { label: "😴 Tired", value: "tired" },
];

export default function MoodTrackingScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>How are you feeling today?</Text>
      <View style={styles.moodContainer}>
        {moods.map((mood) => (
          <TouchableOpacity
            key={mood.value}
            style={[styles.moodButton, selectedMood === mood.value && styles.selectedMood]}
            onPress={() => setSelectedMood(mood.value)}
          >
            <Text style={styles.moodText}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Save Mood</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 20,
  },
  moodContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  moodButton: {
    backgroundColor: "#A5D8FF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  selectedMood: {
    backgroundColor: "#003366",
  },
  moodText: {
    fontSize: 16,
    color: "#003366",
    fontWeight: "600",
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#003366",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  submitText: {
    color: "#F0F8FF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
