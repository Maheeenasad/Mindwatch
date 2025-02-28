import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask7">;

export default function AngerTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Energy Discharge Routine</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Energy Discharge Routine is designed to help you release pent-up anger and frustration through physical movement and mindful practices. By engaging in this routine, you can channel your emotions into constructive outlets, promoting emotional balance and well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Progressive Muscle Relaxation</Text>
            <Text style={styles.stepText}>
              Begin by finding a quiet space where you can sit or lie down comfortably. Close your eyes and take a few deep breaths. Starting from your toes, tense each muscle group for 5 seconds, then release. Progressively move up through your body—feet, legs, abdomen, chest, arms, and face—tensing and relaxing each area. This practice helps in reducing physical tension associated with anger.
            </Text>

            <Text style={styles.stepTitle}>🏃‍♀️ Step 2: High-Intensity Physical Activity</Text>
            <Text style={styles.stepText}>
              Engage in a vigorous physical activity for 10 minutes to release built-up energy. This could include:
              {"\n"}- **Running or brisk walking**: Elevate your heart rate to help dissipate anger.
              {"\n"}- **Dancing energetically**: Put on your favorite music and let loose.
              {"\n"}- **Shadowboxing**: Perform boxing movements in the air, focusing on form and breathing.
              {"\n"}Choose an activity that you enjoy and that gets your body moving intensely.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Mindful Breathing and Visualization</Text>
            <Text style={styles.stepText}>
              After physical activity, sit down in a comfortable position. Close your eyes and focus on your breath. Inhale deeply through your nose for a count of four, hold for a count of four, and exhale through your mouth for a count of six. As you breathe, visualize releasing anger and tension with each exhale. Continue this practice for 5 minutes to promote calmness and clarity.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflective Journaling</Text>
            <Text style={styles.stepText}>
              Conclude the routine by writing down your thoughts and feelings. Reflect on what triggered your anger, how you responded, and what you can do differently in the future. This exercise promotes self-awareness and helps in identifying patterns in your emotional responses.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly practicing the Energy Discharge Routine can aid in managing anger effectively. By combining physical activity with mindfulness and reflection, you create a holistic approach to emotional regulation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/bPu87cLEHac" }} // Somatic Exercises for ANGER: Release Anger in Under 5 Minutes
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