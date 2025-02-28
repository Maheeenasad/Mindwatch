import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask4">;

export default function AngerTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Comfort & Self-Soothing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Comfort and self-soothing techniques are essential tools for managing anger and emotional distress. By engaging in activities that promote relaxation and inner peace, you can effectively reduce feelings of anger and enhance your emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Create a Calming Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet and comfortable space where you feel safe and relaxed. This could be a cozy corner in your home with soft lighting, calming scents, and minimal distractions.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Practice Deep Breathing</Text>
            <Text style={styles.stepText}>
              Sit comfortably and close your eyes. Inhale deeply through your nose, allowing your abdomen to expand, and then exhale slowly through your mouth. Repeat this process several times, focusing solely on your breath to help calm your nervous system.
            </Text>

            <Text style={styles.stepTitle}>👐 Step 3: Engage in Self-Soothing Touch</Text>
            <Text style={styles.stepText}>
              Gently place your hand over your heart or on your abdomen. Feel the warmth and gentle pressure of your hand, which can provide a sense of comfort and security. This simple gesture can help reduce stress and anxiety.
            </Text>

            <Text style={styles.stepTitle}>🎶 Step 4: Listen to Soothing Music</Text>
            <Text style={styles.stepText}>
              Play music that you find calming and uplifting. Music has the power to influence our emotions and can be a powerful tool in reducing anger and promoting relaxation.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 5: Practice Mindfulness Meditation</Text>
            <Text style={styles.stepText}>
              Focus your attention on the present moment, observing your thoughts and feelings without judgment. Mindfulness meditation can help you become more aware of your emotional triggers and develop a more balanced response to anger-inducing situations.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating comfort and self-soothing techniques into your daily routine can empower you to manage anger more effectively. By nurturing yourself and creating moments of calm, you can enhance your emotional resilience and overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/CVEmN3s78bk" }}
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
