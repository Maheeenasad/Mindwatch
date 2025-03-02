import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask11">;

export default function AnxietyTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gratitude Reflection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Practicing gratitude can significantly reduce anxiety and enhance overall well-being. By focusing on positive aspects of life, you can shift attention away from stressors and cultivate a more optimistic outlook. Follow the steps below to engage in a gratitude reflection exercise.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Start a Gratitude Journal</Text>
            <Text style={styles.stepText}>
              Dedicate a notebook to record things you're grateful for. Each day, write down three to five items, ranging from simple pleasures to significant events. This practice helps in acknowledging and appreciating positive experiences.
            </Text>

            <Text style={styles.stepTitle}>💌 Step 2: Write a Gratitude Letter</Text>
            <Text style={styles.stepText}>
              Think of someone who has positively impacted your life. Write them a letter expressing your appreciation, detailing how they've helped you and the difference they've made. You can choose to send it or keep it for personal reflection.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 3: Take a Gratitude Walk</Text>
            <Text style={styles.stepText}>
              Go for a walk outdoors, paying close attention to your surroundings. Notice the beauty in nature, the fresh air, and the sensations you experience. Reflect on these observations and acknowledge the gratitude they evoke.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Practice Mindful Gratitude</Text>
            <Text style={styles.stepText}>
              Set aside a few minutes each day to sit quietly and reflect on things you're thankful for. Focus on the feelings these thoughts bring, allowing yourself to fully experience and savor the gratitude.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 5: Incorporate Gratitude into Daily Routine</Text>
            <Text style={styles.stepText}>
              Make gratitude a regular part of your day. Whether it's during meals, before bed, or at the start of your day, take a moment to acknowledge and appreciate the positive aspects of your life.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Consistent gratitude practice can lead to a more positive mindset and reduced anxiety. By focusing on the good in your life, you can foster resilience and improve overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/OCorElLKFQE" }} // 5 Minute Guided Meditation for Gratitude
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
