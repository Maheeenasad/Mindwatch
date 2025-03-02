import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask12">;

export default function FearTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cognitive Reframing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Cognitive reframing, also known as cognitive restructuring, is a therapeutic technique that helps individuals identify and challenge irrational or maladaptive thoughts, transforming them into more constructive and balanced perspectives. This process can significantly reduce anxiety and improve emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Begin by recognizing thoughts that trigger fear or anxiety. These are often automatic and may include assumptions like "I'm going to fail" or "Something bad will happen." Writing them down can help in acknowledging their presence.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Examine the Evidence</Text>
            <Text style={styles.stepText}>
              Evaluate the validity of these thoughts by considering factual evidence. Ask yourself questions like, "What evidence supports this thought?" and "What evidence contradicts it?" This critical analysis helps in distinguishing between perception and reality.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 3: Reframe the Thought</Text>
            <Text style={styles.stepText}>
              Replace the negative thought with a more balanced and realistic one. For example, if the original thought was "I'll never overcome my fear," reframe it to "I have the ability to work through my fears with practice and support."
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Practice Positive Affirmations</Text>
            <Text style={styles.stepText}>
              Reinforce the new, positive thoughts by repeating affirmations that counteract the negative beliefs. This practice can strengthen neural pathways associated with positive thinking.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on the Process</Text>
            <Text style={styles.stepText}>
              After practicing cognitive reframing, take time to reflect on any changes in your emotional state or behavior. Journaling your experiences can provide insights into your progress and areas that may need further attention.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Cognitive reframing empowers you to take control of your thought patterns, leading to a more balanced and positive outlook. With consistent practice, this technique can become a valuable tool in managing fear and enhancing overall mental health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/58RytIerkmc" }} // CBT and Reframing Thoughts With Cognitive Restructuring
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