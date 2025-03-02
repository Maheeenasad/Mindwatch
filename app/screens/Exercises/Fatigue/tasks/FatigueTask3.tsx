import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask3">;

export default function FatigueTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Short Guided Meditation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~7 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided meditation is a powerful tool to help children alleviate fatigue by promoting relaxation and mental clarity. This short meditation exercise can rejuvenate their energy levels and enhance focus.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 1: The Magic Treehouse Visualization</Text>
            <Text style={styles.stepText}>
              Have your child sit or lie down in a comfortable position. Ask them to close their eyes and take a deep breath in through the nose, then slowly exhale through the mouth. Guide them to imagine a magical treehouse nestled in a serene forest, a place where they feel safe and happy. Encourage them to explore this space in their mind for a few minutes.
            </Text>

            <Text style={styles.stepTitle}>🌈 Step 2: Rainbow Relaxation</Text>
            <Text style={styles.stepText}>
              While they are in their magical treehouse, prompt your child to visualize a beautiful rainbow appearing in the sky. As they focus on each color, starting from red to violet, have them take a deep breath in and out, imagining the color filling their body with warmth and light. This process helps in releasing tension and promoting relaxation.
            </Text>

            <Text style={styles.stepTitle}>☁️ Step 3: Floating on a Cloud</Text>
            <Text style={styles.stepText}>
              Next, guide your child to imagine stepping onto a soft, fluffy cloud from their treehouse. As they lie on the cloud, it gently lifts them into the sky, providing a sense of lightness and calm. Encourage them to feel the gentle sway of the cloud, letting go of any remaining stress or fatigue.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              After a few minutes of floating on the cloud, gently guide your child to take a deep breath and slowly open their eyes, bringing their awareness back to the present moment. Regular practice of this guided meditation can help children manage fatigue and improve their overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/DWOHcGF1Tmc" }}
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
