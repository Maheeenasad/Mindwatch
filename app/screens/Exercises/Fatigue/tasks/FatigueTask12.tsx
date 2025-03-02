import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask12">;

export default function FatigueTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Hydration & Deep Breaths</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Staying hydrated and practicing deep breathing exercises are simple yet effective strategies to combat fatigue and enhance overall well-being. Proper hydration supports bodily functions, while deep breathing promotes relaxation and reduces stress.
            </Text>

            <Text style={styles.stepTitle}>💧 Step 1: Hydrate</Text>
            <Text style={styles.stepText}>
              Begin by drinking a glass of water. Hydration is essential for maintaining energy levels and cognitive function.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 2: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit in a comfortable chair with your feet flat on the floor and hands resting on your thighs. Ensure your back is straight to allow for optimal lung expansion.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Practice Diaphragmatic Breathing</Text>
            <Text style={styles.stepText}>
              Close your eyes and take a deep breath in through your nose, allowing your abdomen to rise as your lungs fill with air. Exhale slowly through your mouth, letting your abdomen fall. Repeat this process for several breaths, focusing on the sensation of air entering and leaving your body.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 4: Establish a Rhythm</Text>
            <Text style={styles.stepText}>
              Aim for a breathing pattern where your exhale is longer than your inhale. For example, inhale for a count of four and exhale for a count of six. This technique can activate the body's relaxation response.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 5: Continue for Several Minutes</Text>
            <Text style={styles.stepText}>
              Maintain this deep, rhythmic breathing for 3-5 minutes. If your mind wanders, gently redirect your focus back to your breath.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating regular hydration and deep breathing exercises into your daily routine can help alleviate fatigue and improve mental clarity. These practices are quick, easy, and can be done anywhere.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/F28MGLlpP90" }} // 15 Minute Deep Breathing Exercise | City of Hope
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
