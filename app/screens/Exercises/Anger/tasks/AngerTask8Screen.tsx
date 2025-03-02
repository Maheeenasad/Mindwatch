import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask8">;

export default function AngerTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Auditory Relaxation Therapy</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Auditory Relaxation Therapy utilizes sound to help alleviate feelings of anger and stress. By engaging with calming auditory stimuli, you can promote relaxation and emotional balance.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 1: Select a Calming Audio Track</Text>
            <Text style={styles.stepText}>
              Choose an audio track specifically designed to reduce anger and promote calmness. This could be soothing music, nature sounds, or guided meditations. For instance, you might find tracks that incorporate binaural beats or specific frequencies known to aid in relaxation.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 2: Create a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet space where you can sit or lie down comfortably without interruptions. Use headphones to enhance the auditory experience and minimize external distractions.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Engage in Mindful Listening</Text>
            <Text style={styles.stepText}>
              Play the selected audio track and focus entirely on the sounds. Close your eyes and take deep, slow breaths. Allow the sounds to wash over you, observing any sensations or emotions that arise without judgment.
            </Text>

            <Text style={styles.stepTitle}>⌛ Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After the audio session, take a few moments to reflect on how you feel. Notice any changes in your emotional state or physical tension. Consider journaling your observations to track your progress over time.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating Auditory Relaxation Therapy into your routine can be a valuable tool for managing anger. Regular practice can enhance its effectiveness, leading to improved emotional regulation and overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/eI6ISUNjnt4" }} // Release Anger and Toxic Energy: 396 Hz Release Anger Frequency
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>

          <TouchableOpacity style={styles.completeButton} onPress={() => navigation.goBack()}>
            <Text style={styles.completeButtonText}>Complete Task</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    textAlign: "center",
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "#003366",
    borderWidth: 2,
    alignSelf: "center",
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: "#003366",
    fontWeight: "600",
  },
  stepsContainer: {
    backgroundColor: "#E3F2FD",
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    lineHeight: 22,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#003366",
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    lineHeight: 22,
  },
  videoContainer: {
    marginTop: 20,
    width: "100%",
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: "#003366",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  completeButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
