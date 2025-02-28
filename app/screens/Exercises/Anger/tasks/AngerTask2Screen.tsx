import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
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
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Mindful Counting Exercise is a simple yet effective technique to help manage anger by grounding your mind and body. By focusing on counting and your breath, you can divert attention from anger triggers and promote a sense of calm.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              Choose a peaceful environment where you won't be disturbed. Sit comfortably with your back straight and shoulders relaxed.
            </Text>

            <Text style={styles.stepTitle}>🌬 Step 2: Begin Counting with Your Breath</Text>
            <Text style={styles.stepText}>
              Close your eyes and take a deep breath in. As you exhale, count "one." On the next exhale, count "two." Continue this pattern up to "ten," then start over at "one." Focus solely on the counting and the rhythm of your breath.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 3: Redirect When Distracted</Text>
            <Text style={styles.stepText}>
              It's natural for the mind to wander. When you notice your thoughts drifting, gently bring your focus back to your counting and breathing without judgment.
            </Text>

            <Text style={styles.stepTitle}>🕰 Step 4: Practice for Several Minutes</Text>
            <Text style={styles.stepText}>
              Continue this mindful counting for about five minutes or until you feel a sense of calm. With regular practice, this technique can become a valuable tool in managing anger and enhancing mindfulness.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating the Mindful Counting Exercise into your routine can help you develop greater control over your emotional responses, leading to improved well-being and reduced anger.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/TeCwSfAqAxI" }}
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
