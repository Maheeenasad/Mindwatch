import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask11">;

export default function FatigueTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Fatigue.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Quick Desk Stretches</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Prolonged sitting can cause muscle tension and fatigue. These quick desk stretches can help relieve stiffness, improve circulation, and boost energy levels without leaving your chair.
            </Text>

            <Text style={styles.stepTitle}>🧑‍💻 Step 1: Neck Stretch</Text>
            <Text style={styles.stepText}>
              Sit upright and slowly tilt your head toward your right shoulder until you feel a gentle stretch. Hold for 15-30 seconds, then switch sides.
            </Text>

            <Text style={styles.stepTitle}>💪 Step 2: Shoulder Shrugs</Text>
            <Text style={styles.stepText}>
              Lift both shoulders toward your ears and hold for a moment before releasing. Repeat 10 times to relieve tension.
            </Text>

            <Text style={styles.stepTitle}>🌀 Step 3: Seated Spinal Twist</Text>
            <Text style={styles.stepText}>
              Sit with your feet flat on the floor. Place your right hand on the back of your chair and gently twist your torso to the right. Hold for 15-30 seconds, then switch sides.
            </Text>

            <Text style={styles.stepTitle}>✋ Step 4: Wrist & Forearm Stretch</Text>
            <Text style={styles.stepText}>
              Extend your right arm forward, fingers pointing down. Gently pull back on the fingers with your left hand. Hold for 15-30 seconds, then switch arms.
            </Text>

            <Text style={styles.stepTitle}>🦵 Step 5: Seated Hamstring Stretch</Text>
            <Text style={styles.stepText}>
              Extend your right leg straight with the heel on the floor. Reach toward your toes while keeping your back straight. Hold for 15-30 seconds, then switch legs.
            </Text>

            <Text style={styles.stepTitle}>🦶 Step 6: Ankle Rotations</Text>
            <Text style={styles.stepText}>
              Lift your right foot off the floor and rotate your ankle clockwise 10 times, then counterclockwise 10 times. Repeat with the left foot.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Performing these simple stretches regularly can help you feel more refreshed and prevent fatigue. Try incorporating them into your work routine for better comfort and productivity.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/kdLSJuzRNUw" }} // Desk Stretches Video
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

