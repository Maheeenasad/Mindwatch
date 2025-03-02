import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask9">;

export default function AnxietyTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anxiety.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cognitive Restructuring</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Cognitive restructuring is a therapeutic technique aimed at identifying and challenging negative thought patterns to reduce anxiety. By reframing these thoughts, you can develop a more balanced and constructive mindset. Follow the steps below to practice cognitive restructuring.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Pay attention to moments when you feel anxious and note the specific thoughts running through your mind. Writing them down can help in recognizing patterns.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Challenge the Thoughts</Text>
            <Text style={styles.stepText}>
              Evaluate the evidence supporting and contradicting these thoughts. Ask yourself questions like, "Is this thought based on facts or assumptions?" and "What would I tell a friend thinking this way?"
            </Text>

            <Text style={styles.stepTitle}>💡 Step 3: Reframe the Thoughts</Text>
            <Text style={styles.stepText}>
              Replace the negative thoughts with more balanced alternatives. For example, change "I'll fail this task" to "I have prepared well, and I'll do my best."
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Practice Mindfulness</Text>
            <Text style={styles.stepText}>
              Engage in mindfulness exercises to stay present and reduce overthinking. Techniques such as deep breathing or guided meditation can be beneficial.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 5: Apply Regularly</Text>
            <Text style={styles.stepText}>
              Incorporate cognitive restructuring into your daily routine. Regular practice can lead to lasting changes in thought patterns and anxiety levels.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Transforming negative thoughts requires patience and persistence. By consistently applying these steps, you can cultivate a more positive and resilient mindset.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/ArS-SJi2sbM" }} // CBT for Anxiety & Cognitive Restructuring
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
