import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask11">;

export default function AngerTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anger.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Anger Meditation</Text>

          <View style={styles.timeContainer}>
        <Text style={styles.timeText}>~20 min</Text>
      </View>

      <View style={styles.stepsContainer}>
        <Text style={styles.description}>
          This guided meditation is designed to help you recognize, understand, and manage feelings of anger. By engaging in this practice, you can develop a healthier relationship with your emotions and respond to challenging situations with greater calm and clarity.
        </Text>

        <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Quiet Space</Text>
        <Text style={styles.stepText}>
          Choose a serene environment where you won't be disturbed. This could be a quiet room, a peaceful corner in your home, or any place where you feel comfortable and at ease.
        </Text>

        <Text style={styles.stepTitle}>🪑 Step 2: Assume a Comfortable Posture</Text>
        <Text style={styles.stepText}>
          Sit in a comfortable position with your back straight but not tense. Rest your hands on your lap or knees, and gently close your eyes to minimize external distractions.
        </Text>

        <Text style={styles.stepTitle}>🌬️ Step 3: Focus on Your Breath</Text>
        <Text style={styles.stepText}>
          Bring your attention to your breathing. Inhale deeply through your nose, allowing your abdomen to rise, and exhale slowly through your mouth. Continue this deep, rhythmic breathing throughout the meditation.
        </Text>

        <Text style={styles.stepTitle}>🧠 Step 4: Acknowledge Your Anger</Text>
        <Text style={styles.stepText}>
          Reflect on a recent situation that triggered feelings of anger. Visualize the event clearly, acknowledging the emotions it stirred without judgment. Recognize that it's natural to feel anger, and it's an emotion that can be managed constructively.
        </Text>

        <Text style={styles.stepTitle}>🔍 Step 5: Observe Physical Sensations</Text>
        <Text style={styles.stepText}>
          Notice where you experience anger in your body. It might manifest as tension in your shoulders, a tightness in your chest, or a clenching of your jaw. Observe these sensations with curiosity, allowing yourself to fully experience them without resistance.
        </Text>

        <Text style={styles.stepTitle}>💭 Step 6: Explore Underlying Emotions</Text>
        <Text style={styles.stepText}>
          Beneath the surface of anger, there are often other emotions such as hurt, fear, or frustration. Gently explore these underlying feelings, acknowledging their presence and understanding their connection to your anger.
        </Text>

        <Text style={styles.stepTitle}>❤️ Step 7: Cultivate Compassion</Text>
        <Text style={styles.stepText}>
          Direct compassion towards yourself, recognizing that everyone experiences challenging emotions. You might silently repeat affirmations like, "May I find peace," or "I am learning to manage my emotions with ease."
        </Text>

        <Text style={styles.stepTitle}>🌟 Step 8: Visualize Release</Text>
        <Text style={styles.stepText}>
          Imagine the tension and anger within you dissolving, like mist evaporating under the warm sun. Visualize yourself responding to future challenges with calmness and clarity, feeling empowered to handle situations constructively.
        </Text>

        <Text style={styles.stepTitle}>🔄 Step 9: Return to the Present</Text>
        <Text style={styles.stepText}>
          Gradually bring your awareness back to your surroundings. Wiggle your fingers and toes, take a deep breath, and when you're ready, open your eyes. Carry the sense of calm and understanding you've cultivated into your daily life.
        </Text>
      </View>

      {/* Embedded YouTube Video */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/wkse4PPxkk4" }} // 10-Minute Meditation For Anger
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