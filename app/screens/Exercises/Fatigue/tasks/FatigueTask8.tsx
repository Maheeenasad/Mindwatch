import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask8">;

export default function FatigueTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Muscle Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Muscle Relaxation (PMR) is a technique that helps reduce physical tension and stress by systematically tensing and then relaxing different muscle groups. This practice can enhance body awareness and promote a sense of calm, making it beneficial for teenagers experiencing fatigue.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a quiet environment where you won't be disturbed. Ensure your clothing is loose and comfortable.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Deep Breathing</Text>
            <Text style={styles.stepText}>
              Close your eyes and take a deep breath in through your nose, filling your lungs completely. Hold the breath for a moment, then exhale slowly through your mouth. Repeat this deep breathing cycle three times to center yourself.
            </Text>

            <Text style={styles.stepTitle}>💪 Step 3: Tense and Relax Muscle Groups</Text>
            <Text style={styles.stepText}>
              Starting from your feet and working up to your head, focus on one muscle group at a time. For each group:
              {"\n"}1. Inhale deeply and tense the muscles as hard as you can for about 5 seconds.
              {"\n"}2. Exhale and abruptly release the tension, allowing the muscles to relax completely.
              {"\n"}3. Pause for 10 seconds before moving to the next group.
              {"\n"}The sequence is as follows:
              {"\n"}- Feet: Curl your toes downward.
              {"\n"}- Calves: Flex your feet upward, pointing toes toward your head.
              {"\n"}- Thighs: Squeeze your thigh muscles tightly.
              {"\n"}- Buttocks: Clench the muscles in your buttocks.
              {"\n"}- Stomach: Suck in your abdomen.
              {"\n"}- Chest: Take a deep breath and hold it.
              {"\n"}- Hands: Clench your fists.
              {"\n"}- Arms: Bend your elbows and tense your biceps.
              {"\n"}- Shoulders: Shrug them up toward your ears.
              {"\n"}- Neck: Gently tilt your head back, looking up at the ceiling.
              {"\n"}- Face: Scrunch your facial muscles by squeezing your eyes shut and clenching your jaw.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Full Body Relaxation</Text>
            <Text style={styles.stepText}>
              After completing all muscle groups, take a moment to enjoy the sensation of relaxation throughout your body. Continue to breathe deeply and evenly, maintaining this state of calm for a few minutes.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of Progressive Muscle Relaxation can help manage stress and reduce fatigue. By becoming more aware of physical tension, you can take proactive steps to relax and rejuvenate your body and mind.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/aF4H0oAiDSQ" }} // Progressive Muscle Relaxation video
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
