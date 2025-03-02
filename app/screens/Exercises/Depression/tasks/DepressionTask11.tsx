import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask11">;

export default function DepressionTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Depression.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Meditation for Positivity</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided meditation is a powerful tool to cultivate positive energy and enhance mental clarity. Regular practice can help alleviate depressive symptoms and promote a sense of well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Space</Text>
            <Text style={styles.stepText}>
              Choose a quiet environment where you won't be disturbed. Sit or lie down in a comfortable position, ensuring your body is relaxed.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 2: Prepare for Meditation</Text>
            <Text style={styles.stepText}>
              Use headphones for an immersive experience. Close your eyes and take a few deep breaths to center yourself.
            </Text>

            <Text style={styles.stepTitle}>▶️ Step 3: Begin the Guided Meditation</Text>
            <Text style={styles.stepText}>
              Play the following guided meditation video, which will lead you through a journey to foster positivity and inner peace.
            </Text>

            {/* Embedded YouTube Video */}
            <View style={styles.videoContainer}>
              <WebView
                source={{ uri: "https://www.youtube.com/embed/cyMxWXlX9sU" }}
                style={styles.video}
                allowsFullscreenVideo={true}
                javaScriptEnabled={true}
                domStorageEnabled={true}
              />
            </View>

            <Text style={styles.stepTitle}>🕊️ Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After the meditation, take a moment to reflect on any positive feelings or insights gained. Consider journaling your thoughts to track your progress over time.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Incorporate into Daily Routine</Text>
            <Text style={styles.stepText}>
              Aim to practice this meditation daily, preferably at the same time each day, to build consistency and maximize benefits.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Embracing guided meditation can be a transformative step in managing depression. Approach this practice with an open heart and patience, acknowledging your journey toward positivity.
            </Text>
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
