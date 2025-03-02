import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask9">;

export default function AngerTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Deep Breathing & Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Deep breathing is a simple yet powerful technique to manage anger and stress. By focusing on your breath, you can activate your body's relaxation response, helping to calm your mind and reduce tension.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              Choose a peaceful environment where you won't be disturbed. Sit or lie down in a comfortable position, ensuring your back is straight to allow for full lung expansion.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Practice Diaphragmatic Breathing</Text>
            <Text style={styles.stepText}>
              Place one hand on your chest and the other on your abdomen. Inhale deeply through your nose for a count of four, allowing your abdomen to rise while keeping your chest still. Hold the breath for a count of four, then exhale slowly through your mouth for a count of six, feeling your abdomen fall. Repeat this cycle for several minutes.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 3: Incorporate the 4-7-8 Technique</Text>
            <Text style={styles.stepText}>
              This method involves inhaling through your nose for 4 seconds, holding the breath for 7 seconds, and exhaling through your mouth for 8 seconds. This technique can help reduce anger and promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Progressive Muscle Relaxation</Text>
            <Text style={styles.stepText}>
              While maintaining deep, rhythmic breathing, systematically tense and then relax each muscle group in your body, starting from your toes and working up to your head. This practice can help release physical tension associated with anger.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of deep breathing and relaxation techniques can enhance your ability to manage anger effectively. By dedicating a few minutes each day to these exercises, you can cultivate a calmer mind and a more balanced emotional state.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/cdtPgETLokI" }} // 12-Minute Breathwork Meditation for Anger | goop
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
