import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask7">;

export default function FearTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Muscle Relaxation (PMR) is a technique that helps reduce stress and anxiety by systematically tensing and then relaxing different muscle groups. This exercise guides teenagers through PMR to promote physical relaxation and mental calm.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a quiet, comfortable place where you won't be disturbed. Close your eyes and take a few deep breaths to center yourself.
            </Text>

            <Text style={styles.stepTitle}>🦶 Step 2: Tense and Relax Muscle Groups</Text>
            <Text style={styles.stepText}>
              Starting from your feet and working up to your head, tense each muscle group for 5 seconds, then relax for 10 seconds. Notice the difference between tension and relaxation. For example:
            </Text>
            <Text style={styles.exampleText}>- Feet: Curl your toes downward, then release.</Text>
            <Text style={styles.exampleText}>- Legs: Tighten your calf muscles, then let go.</Text>
            <Text style={styles.exampleText}>- Stomach: Squeeze your abdominal muscles, then relax.</Text>
            <Text style={styles.exampleText}>- Hands: Clench your fists, then open them.</Text>
            <Text style={styles.exampleText}>- Shoulders: Shrug them up to your ears, then drop them.</Text>
            <Text style={styles.exampleText}>- Face: Scrunch your facial muscles, then smooth them out.</Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Focus on Your Breathing</Text>
            <Text style={styles.stepText}>
              As you progress through each muscle group, maintain steady, deep breaths. Inhale during tensing, and exhale during relaxation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After completing the relaxation sequence, take a moment to notice how your body feels. Reflect on any changes in your physical sensations or mood.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of Progressive Muscle Relaxation can enhance your ability to manage stress and promote a sense of well-being. Incorporate this technique into your routine to support your mental and physical health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/aF4H0oAiDSQ" }} // Progressive Muscle Relaxation (PMR) Exercise for Kids and Teens
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
  exampleText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    lineHeight: 22,
    marginLeft: 10,
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
