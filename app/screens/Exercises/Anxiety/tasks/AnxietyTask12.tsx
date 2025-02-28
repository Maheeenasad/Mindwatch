import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask12">;

export default function AnxietyTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Stretching & Tension Release</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in regular stretching exercises can help alleviate physical tension and reduce anxiety. By focusing on gentle movements and mindful breathing, you can promote relaxation and enhance your overall well-being. Follow the steps below to practice stretching and tension release.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Neck Stretch</Text>
            <Text style={styles.stepText}>
              Sit comfortably with your back straight. Slowly tilt your head toward your right shoulder, feeling a gentle stretch on the left side of your neck. Hold for 15-30 seconds, then switch sides. Repeat 2-3 times on each side.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Shoulder Roll</Text>
            <Text style={styles.stepText}>
              While seated or standing, lift your shoulders toward your ears and then roll them back and down in a circular motion. Perform 10 rolls, then reverse the direction for another 10 rolls.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Cat-Cow Stretch</Text>
            <Text style={styles.stepText}>
              Begin on all fours with hands under shoulders and knees under hips. Inhale as you arch your back, lifting your head and tailbone (cow pose), then exhale as you round your spine, tucking your chin to your chest (cat pose). Repeat this sequence 5-10 times, moving with your breath.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Seated Forward Bend</Text>
            <Text style={styles.stepText}>
              Sit with your legs extended straight in front of you. Inhale and lengthen your spine, then exhale as you hinge at the hips to reach toward your toes. Hold the stretch for 15-30 seconds, breathing deeply. Return to the starting position slowly.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Child's Pose</Text>
            <Text style={styles.stepText}>
              Kneel on the floor with your knees hip-width apart and toes together. Sit back on your heels and extend your arms forward, lowering your chest toward the ground. Hold this pose for 30 seconds to a minute, focusing on deep, calming breaths.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating these stretches into your daily routine can help manage anxiety and promote physical relaxation. Remember to listen to your body and perform each movement gently, without forcing any positions.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/BLIKQwHITyc" }} // Relieve Stress & Anxiety with Relaxing Stretches
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
