import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask10">;

export default function AngerTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Meditative Mind Reset</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Meditative Mind Reset is a guided meditation designed to help you release anger and restore emotional balance. By focusing on calming visualizations and mindful breathing, this practice aims to reset your mental state and promote inner peace.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Prepare Your Space</Text>
            <Text style={styles.stepText}>
              Find a quiet, comfortable place where you won't be disturbed. Dim the lights, sit or lie down in a relaxed position, and close your eyes. Ensure your environment is conducive to relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Center Your Breathing</Text>
            <Text style={styles.stepText}>
              Begin by taking deep, slow breaths. Inhale deeply through your nose, allowing your abdomen to rise, and exhale slowly through your mouth. Focus solely on your breath, letting go of any intrusive thoughts.
            </Text>

            <Text style={styles.stepTitle}>🌅 Step 3: Visualization Exercise</Text>
            <Text style={styles.stepText}>
              Imagine yourself in a serene natural setting, such as a peaceful forest or a tranquil beach. Visualize the details vividly—the sound of rustling leaves or gentle waves, the scent of fresh air, the warmth of sunlight on your skin. Allow this mental imagery to envelop you, fostering a sense of calm and safety.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Guided Meditation</Text>
            <Text style={styles.stepText}>
              As you maintain the visualization, listen to a guided meditation specifically designed to address anger and promote relaxation. Follow the instructions, allowing the guidance to lead you through the process of acknowledging and releasing your anger.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of the Meditative Mind Reset can help you manage anger more effectively. By dedicating time to this meditation, you cultivate a habit of mindfulness and emotional regulation, leading to a more balanced and peaceful state of mind.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/wkse4PPxkk4" }} // 10-Minute Meditation For Anger - YouTube
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
