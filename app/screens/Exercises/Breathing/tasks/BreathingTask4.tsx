import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask4">;

export default function BreathingTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Shape Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Shape Breathing is a creative technique that helps children focus and calm their minds by associating breath control with tracing geometric shapes. This method enhances concentration and provides a fun way to practice mindful breathing.
            </Text>

            <Text style={styles.stepTitle}>🔺 Triangle Breathing</Text>
            <Text style={styles.stepText}>
              1. Visualize a triangle shape.
              2. Starting at the bottom left corner, inhale deeply through your nose as you trace the first side of the triangle for a count of three.
              3. Hold your breath as you trace the second side for another count of three.
              4. Exhale slowly through your mouth as you trace the final side for a count of three.
              5. Repeat this process several times, focusing on the rhythmic pattern.
            </Text>

            <Text style={styles.stepTitle}>🔲 Square Breathing</Text>
            <Text style={styles.stepText}>
              1. Visualize a square shape.
              2. Starting at the top left corner, inhale through your nose for a count of four as you trace the first side.
              3. Hold your breath for four counts as you trace the second side.
              4. Exhale through your mouth for four counts while tracing the third side.
              5. Hold your breath again for four counts as you complete the final side.
              6. Repeat this cycle multiple times, maintaining a steady rhythm.
            </Text>

            <Text style={styles.stepTitle}>🔄 Figure Eight Breathing</Text>
            <Text style={styles.stepText}>
              1. Visualize the number eight on its side, forming an infinity symbol.
              2. Begin at the center crossover point.
              3. Inhale deeply through your nose as you trace the first loop of the eight.
              4. Exhale slowly through your mouth as you trace the second loop.
              5. Continue this flowing motion, synchronizing your breath with the shape.
            </Text>

            <Text style={styles.stepTitle}>🌈 Rainbow Breathing</Text>
            <Text style={styles.stepText}>
              1. Imagine drawing a large rainbow in the air with your hands.
              2. As you raise your arms over your head to form the arc, inhale deeply through your nose.
              3. Once your hands meet above, exhale slowly through your mouth as you lower them back down.
              4. Repeat this movement and breathing pattern, visualizing the colors of the rainbow.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating Shape Breathing into daily routines offers children a playful yet effective tool to manage stress and enhance mindfulness. Encouraging regular practice can lead to improved emotional regulation and focus.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/6hSkmmNU7PM" }} // Deep Breathing with Shapes - Coping Skills for Kids
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
