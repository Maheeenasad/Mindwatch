import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask8">;

export default function BreathingTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Deep Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided Deep Breathing is a relaxation technique that involves following verbal instructions to focus on slow, deep breaths. This practice can help teenagers reduce stress, improve concentration, and enhance overall well-being.
            </Text>

            <Text style={styles.stepTitle}>🟦 Steps to Practice Guided Deep Breathing</Text>
            <Text style={styles.stepText}>
              1. **Find a Quiet Space**: Choose a comfortable, quiet environment where you won't be disturbed.
              2. **Sit Comfortably**: Sit in a chair with your feet flat on the floor and your back straight, or lie down on your back with your arms resting by your sides.
              3. **Close Your Eyes**: Gently close your eyes to minimize distractions.
              4. **Follow the Guidance**: Play a guided deep breathing audio or video. As you listen, focus on the instructor's voice and follow the breathing instructions provided.
              5. **Breathe Deeply**: Inhale deeply through your nose, allowing your abdomen to rise, then exhale slowly through your mouth, letting your abdomen fall.
              6. **Maintain Focus**: If your mind wanders, gently bring your attention back to your breath and the guide's instructions.
              7. **Continue for 5-10 Minutes**: Practice this deep breathing for 5 to 10 minutes, or as long as the guided session lasts.
            </Text>

            <Text style={styles.stepTitle}>🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - **Regular Practice**: Incorporate guided deep breathing into your daily routine, such as before bedtime or after school, to build consistency.
              - **Use Headphones**: Wearing headphones can help minimize external noises and enhance focus on the guided instructions.
              - **Stay Present**: Focus on the sensation of your breath and the guide's voice to stay grounded in the present moment.
            </Text>

            <Text style={styles.stepTitle}>🎯 Benefits of Guided Deep Breathing</Text>
            <Text style={styles.stepText}>
              - **Reduces Anxiety**: Helps calm the nervous system, reducing feelings of anxiety.
              - **Enhances Focus**: Improves attention and concentration by promoting mental clarity.
              - **Promotes Relaxation**: Encourages physical relaxation, aiding in better sleep and stress management.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/cvflhGzINJ4" }} // Deep Breathing Exercise for Kids and Teens
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
