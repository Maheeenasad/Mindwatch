import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask13">;

export default function AngerTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cognitive Reframing Strategy</Text>

          <View style={styles.timeContainer}>
        <Text style={styles.timeText}>~20 min</Text>
      </View>

      <View style={styles.stepsContainer}>
        <Text style={styles.description}>
          Cognitive Reframing is a therapeutic technique that helps individuals identify and challenge negative thought patterns, transforming them into more constructive perspectives. This practice is particularly effective in managing anger by altering the way we interpret and respond to triggering situations.
        </Text>

        <Text style={styles.stepTitle}>🧠 Step 1: Identify the Triggering Thought</Text>
        <Text style={styles.stepText}>
          Reflect on a recent incident where you felt intense anger. Write down the specific thought or belief that immediately preceded your emotional reaction. For example, "They did that on purpose to upset me."
        </Text>

        <Text style={styles.stepTitle}>🔍 Step 2: Examine the Evidence</Text>
        <Text style={styles.stepText}>
          Analyze the thought by asking yourself:
          {"\n"}- What evidence supports this belief?
          {"\n"}- What evidence contradicts it?
          {"\n"}- Is it possible that there are other interpretations of the situation?
        </Text>

        <Text style={styles.stepTitle}>🔄 Step 3: Reframe the Thought</Text>
        <Text style={styles.stepText}>
          Based on your analysis, construct a more balanced perspective. For instance, "Maybe they were having a bad day and didn't realize how their actions affected me."
        </Text>

        <Text style={styles.stepTitle}>💬 Step 4: Develop a Coping Statement</Text>
        <Text style={styles.stepText}>
          Create a positive affirmation or coping statement to remind yourself of the new perspective. Examples include:
          {"\n"}- "I can handle this calmly."
          {"\n"}- "I choose to respond with patience."
        </Text>

        <Text style={styles.stepTitle}>📝 Step 5: Practice Regularly</Text>
        <Text style={styles.stepText}>
          Incorporate this reframing process into your daily routine. When you notice negative thoughts leading to anger, pause and apply these steps to shift your mindset.
        </Text>

        <Text style={styles.stepTitle}>🌟 Final Thought</Text>
        <Text style={styles.stepText}>
          By consistently practicing Cognitive Reframing, you can transform habitual negative thought patterns, leading to healthier emotional responses and improved relationships.
        </Text>
      </View>

      {/* Embedded YouTube Video */}
      <View style={styles.videoContainer}>
        <WebView
          source={{ uri: "https://www.youtube.com/embed/hxZS50WhhBI" }} // CBT for Anger Management
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
