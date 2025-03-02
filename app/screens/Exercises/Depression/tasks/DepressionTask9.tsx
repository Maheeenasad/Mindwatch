import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask9">;

export default function DepressionTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Meditation & Deep Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Meditation and deep breathing are effective techniques for managing stress and alleviating symptoms of depression. These practices help calm the mind, improve focus, and promote emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              Choose a peaceful environment where you won't be disturbed. This could be a quiet room, a cozy corner, or any place where you feel comfortable and relaxed.
            </Text>

            <Text style={styles.stepTitle}>🪑 Step 2: Assume a Comfortable Posture</Text>
            <Text style={styles.stepText}>
              Sit in a comfortable position with your back straight. You can sit on a chair with your feet flat on the floor or cross-legged on a cushion. Rest your hands on your knees or in your lap.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Practice Deep Breathing</Text>
            <Text style={styles.stepText}>
              Close your eyes and take a deep breath in through your nose, allowing your abdomen to expand. Exhale slowly through your mouth, releasing any tension. Repeat this process several times to center yourself.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Begin Meditation</Text>
            <Text style={styles.stepText}>
              Focus your attention on your breath. Notice the sensation of air entering and leaving your nostrils. If your mind wanders, gently bring your focus back to your breath without judgment.
            </Text>

            <Text style={styles.stepTitle}>⏲️ Step 5: Set a Time Limit</Text>
            <Text style={styles.stepText}>
              Start with short sessions, such as 5 minutes, and gradually increase the duration as you become more comfortable with the practice. Consistency is key to experiencing the benefits of meditation.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 6: Explore Guided Meditations</Text>
            <Text style={styles.stepText}>
              Guided meditations can be helpful, especially for beginners. They provide direction and can enhance your meditation experience. Consider using apps or online resources to find guided sessions that resonate with you.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating meditation and deep breathing into your daily routine can significantly impact your mental health. These practices offer a simple yet powerful way to manage stress and cultivate a sense of inner peace.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/cvflhGzINJ4" }}
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
