import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask15">;

export default function FatigueTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Calming Podcasts</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with calming podcasts can be an effective way to reduce fatigue and promote relaxation. These audio experiences provide soothing content that helps divert the mind from stressors, facilitating mental rest and rejuvenation.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 1: Select a Calming Podcast</Text>
            <Text style={styles.stepText}>
              Choose a podcast known for its relaxing content. Options include "The Mindful Podcast," which offers short mindfulness practices, or "Calming Anxiety," featuring guided meditation sessions.
            </Text>

            <Text style={styles.stepTitle}>📱 Step 2: Find a Comfortable Setting</Text>
            <Text style={styles.stepText}>
              Locate a quiet and comfortable space where you can sit or lie down without interruptions. This environment will enhance the calming effect of the podcast.
            </Text>

            <Text style={styles.stepTitle}>🔊 Step 3: Use Headphones</Text>
            <Text style={styles.stepText}>
              Wearing headphones can immerse you more deeply into the audio experience, minimizing external distractions and improving sound quality.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 4: Allocate Time</Text>
            <Text style={styles.stepText}>
              Set aside approximately 30 minutes for this activity. Consistency is key, so consider making it a regular part of your routine, perhaps before bedtime or during a midday break.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating calming podcasts into your daily schedule can serve as a simple yet effective strategy to combat fatigue and enhance mental well-being. Explore different podcasts to find the ones that resonate most with you.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/1vx8iUvfyCY" }} // Guided Meditation for Relaxation
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
