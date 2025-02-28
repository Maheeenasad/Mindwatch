import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask2">;

export default function BreathingTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Belly Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Belly Breathing, also known as diaphragmatic breathing, is a simple yet powerful technique that helps children manage stress and anxiety by promoting deep, mindful breaths. This exercise encourages full oxygen exchange, which can slow the heartbeat and lower blood pressure.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Have your child sit in a comfortable chair or lie down on their back. Ensure they are in a quiet environment with minimal distractions.
            </Text>

            <Text style={styles.stepTitle}>🤲 Step 2: Hand Placement</Text>
            <Text style={styles.stepText}>
              Ask your child to place one hand on their chest and the other on their belly, just below the ribcage. This will help them feel the movement of their diaphragm during the exercise.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Inhale Deeply</Text>
            <Text style={styles.stepText}>
              Instruct your child to take a slow, deep breath in through their nose, allowing their belly to rise as it fills with air. The hand on their chest should remain relatively still, while the hand on their belly should move outward.
            </Text>

            <Text style={styles.stepTitle}>😮‍💨 Step 4: Exhale Slowly</Text>
            <Text style={styles.stepText}>
              Have your child exhale slowly through their mouth, feeling their belly fall as the air is released. Encourage them to imagine blowing out a candle gently.
            </Text>

            <Text style={styles.stepTitle}>🔁 Step 5: Repeat the Process</Text>
            <Text style={styles.stepText}>
              Encourage your child to continue this breathing pattern for several minutes, focusing on the rise and fall of their belly. This practice can help them feel more relaxed and centered.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of Belly Breathing can equip children with a valuable tool to manage their emotions and reduce anxiety. It's a simple technique that can be used anytime they need to find calmness.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/RiMb2Bw4Ae8" }} // Belly Breathing: Mindfulness for Children
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
