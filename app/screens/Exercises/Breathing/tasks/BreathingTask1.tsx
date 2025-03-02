import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask1">;

export default function BreathindTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask1.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Balloon Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Balloon Breathing is a fun and effective technique that helps children manage stress and anxiety by encouraging deep, mindful breathing. This exercise uses the imagery of inflating and deflating a balloon to promote relaxation and focus.
            </Text>

            <Text style={styles.stepTitle}>🎈 Step 1: Get Comfortable</Text>
            <Text style={styles.stepText}>
              Have your child sit comfortably on a chair or cross-legged on the floor. Ensure they are in a quiet space free from distractions.
            </Text>

            <Text style={styles.stepTitle}>👐 Step 2: Hand Placement</Text>
            <Text style={styles.stepText}>
              Ask your child to place their hands on their belly, with fingertips touching, forming a circle. This position will help them feel their breath as they inhale and exhale.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Inhale Slowly</Text>
            <Text style={styles.stepText}>
              Instruct your child to breathe in deeply through their nose, imagining they are filling up a balloon in their belly. Their hands should move apart as their belly expands.
            </Text>

            <Text style={styles.stepTitle}>😮‍💨 Step 4: Exhale Gently</Text>
            <Text style={styles.stepText}>
              Have them exhale slowly through their mouth, as if they are gently releasing air from the balloon. Their hands should come back together as the belly contracts.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Repeat the Process</Text>
            <Text style={styles.stepText}>
              Encourage your child to repeat this breathing cycle 5-10 times, maintaining a slow and steady rhythm. This practice can help them feel more relaxed and centered.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of Balloon Breathing can empower children to manage their emotions effectively, providing them with a simple tool to find calmness in moments of stress.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/2PcCmxEW5WA" }} // Two minutes Mindfulness: Balloon Breaths/Belly Breaths
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
