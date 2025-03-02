import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask6">;

export default function AngerTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anger.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Reflective Writing Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Reflective writing is a therapeutic technique that allows you to explore and process your emotions, particularly anger, by articulating your thoughts and feelings on paper. This practice can lead to greater self-awareness and emotional regulation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Set Up Your Writing Space</Text>
            <Text style={styles.stepText}>
              Find a quiet, comfortable place where you won't be disturbed. Gather your materials: a notebook or journal and a pen. Ensure the environment is calming, perhaps with soft lighting or soothing background music.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 2: Allocate Time for Reflection</Text>
            <Text style={styles.stepText}>
              Dedicate at least 15 minutes to this exercise. Setting a timer can help you remain focused and ensure you have sufficient time to delve into your emotions without feeling rushed.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Begin Free Writing</Text>
            <Text style={styles.stepText}>
              Start by writing about a recent experience that triggered feelings of anger. Describe the event in detail, including what happened, who was involved, and how it made you feel. Don't worry about grammar or punctuation; let your thoughts flow freely.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 4: Explore Underlying Emotions</Text>
            <Text style={styles.stepText}>
              After detailing the event, reflect on the deeper emotions beneath your anger. Consider questions like:
              {"\n"}- What other feelings did this situation evoke (e.g., hurt, disappointment, fear)?
              {"\n"}- Why did this event affect me so profoundly?
              {"\n"}- Are there past experiences that amplify my reaction to this event?
            </Text>

            <Text style={styles.stepTitle}>💡 Step 5: Identify Triggers and Patterns</Text>
            <Text style={styles.stepText}>
              Review your writing to identify any common themes or triggers. Recognizing patterns in your emotional responses can help you anticipate and manage future episodes of anger more effectively.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly engaging in reflective writing can serve as a valuable tool for understanding and managing your emotions. By processing your feelings on paper, you create a safe space for self-expression and personal growth.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/wAZn9dF3XTo" }} // Relevant reflective writing exercise video
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