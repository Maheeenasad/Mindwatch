import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask10">;

export default function AnxietyTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Breathing with Music</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Combining deep breathing exercises with calming music can be an effective way for teenagers to manage anxiety. This practice helps synchronize breath with soothing sounds, promoting relaxation and reducing stress. Follow the steps below to engage in a guided breathing session accompanied by music.
            </Text>

            <Text style={styles.stepTitle}>🎵 Step 1: Choose Calming Music</Text>
            <Text style={styles.stepText}>
              Select a piece of instrumental music that you find soothing. It could be classical, ambient, or nature sounds. Ensure the track is free from lyrics to minimize distractions.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 2: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a quiet space where you won't be disturbed. Keep your back straight and relax your shoulders, preparing your body for deep breathing.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Begin Deep Breathing</Text>
            <Text style={styles.stepText}>
              Start the music and close your eyes. Inhale deeply through your nose for a count of four, allowing your abdomen to rise. Hold the breath for a count of four, then exhale slowly through your mouth for a count of six. Repeat this cycle, focusing on the rhythm of your breath and the music.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 4: Continue for 10 Minutes</Text>
            <Text style={styles.stepText}>
              Maintain this breathing pattern for about 10 minutes. If your mind wanders, gently redirect your focus to the music and your breath. This practice enhances mindfulness and reduces anxious thoughts.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Integrating music into your deep breathing exercises can create a powerful tool for managing anxiety. Regular practice can help you develop a sense of calm and control over your emotions.
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
