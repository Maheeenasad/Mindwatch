import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask10">;

export default function FearTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Exposure</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful Exposure combines mindfulness practices with exposure therapy techniques to help individuals confront and manage their fears. By bringing present-moment awareness to feared situations, individuals can reduce avoidance behaviors and build resilience.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Practice Mindfulness</Text>
            <Text style={styles.stepText}>
              Begin by engaging in a mindfulness exercise to center yourself. This could involve focusing on your breath, performing a body scan, or observing your thoughts without judgment. The goal is to cultivate a state of present-moment awareness.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Identify a Manageable Fear</Text>
            <Text style={styles.stepText}>
              Choose a specific fear that you feel ready to address. Ensure it's a situation that provokes mild to moderate anxiety, making it suitable for initial exposure.
            </Text>

            <Text style={styles.stepTitle}>📍 Step 3: Set a Clear Intention</Text>
            <Text style={styles.stepText}>
              Define what you aim to achieve through this exposure. For example, "I intend to reduce my anxiety about speaking in small group settings."
            </Text>

            <Text style={styles.stepTitle}>🚶‍♀️ Step 4: Gradual Exposure</Text>
            <Text style={styles.stepText}>
              Approach the feared situation gradually. If public speaking is the fear, start by speaking up in small groups before progressing to larger audiences. During exposure, maintain mindfulness by observing your thoughts, emotions, and bodily sensations without attempting to change them.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 5: Apply Mindfulness Techniques During Exposure</Text>
            <Text style={styles.stepText}>
              Utilize mindfulness strategies, such as deep breathing or grounding exercises, to manage anxiety during exposure. Focus on the present moment, acknowledging any discomfort without judgment.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 6: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After the exposure, take time to reflect. Consider journaling about the experience, noting any changes in your anxiety levels and what you learned from the process.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 7: Repeat and Progress</Text>
            <Text style={styles.stepText}>
              Consistently practice mindful exposure with various situations, gradually increasing the level of challenge. This repetition helps desensitize the fear response over time.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Integrating mindfulness with exposure therapy can empower you to face fears with greater ease and resilience. Embrace each step of the process, acknowledging progress and practicing self-compassion.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/jZ-Ef939x08" }} // Mindfulness (Exposure-Friendly)
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
