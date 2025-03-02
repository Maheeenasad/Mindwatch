import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask2">;

export default function AngerTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Counting Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5-10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Mindful Counting Exercise helps children manage anger by focusing their attention on counting breaths, promoting calmness and self-awareness.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Have your child sit or lie down in a comfortable position, ensuring they feel relaxed and at ease.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Start Counting Breaths</Text>
            <Text style={styles.stepText}>
              Instruct your child to gently close their eyes and begin breathing naturally. Ask them to count each inhale and exhale silently, starting from one up to ten, and then repeat the cycle. This technique helps anchor their attention to the present moment.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 3: Refocus When Distracted</Text>
            <Text style={styles.stepText}>
              If your child's mind starts to wander, gently guide them to bring their focus back to counting their breaths. Remind them that it's normal for thoughts to drift and encourage them to refocus without judgment.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Practice Regularly</Text>
            <Text style={styles.stepText}>
              Encourage your child to practice this mindful counting exercise daily, gradually increasing the duration as they become more comfortable. Regular practice can enhance their ability to manage anger and other strong emotions effectively.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Mindful counting is a simple yet powerful tool that empowers children to cultivate inner calm and emotional resilience, aiding in the management of anger.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/4UyPe7S0cSg" }} // Cosmic Counting (Peace Out: Guided Meditation for Kids)
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
