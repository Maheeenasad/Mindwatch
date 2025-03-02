import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask3">;

export default function BreathingTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Animal Breaths</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~7 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Animal Breaths are engaging and imaginative breathing exercises that help children manage stress and anxiety by mimicking the breathing patterns of various animals. This playful approach encourages mindfulness and relaxation.
            </Text>

            <Text style={styles.stepTitle}>🐰 Bunny Breathing</Text>
            <Text style={styles.stepText}>
              1. Sit comfortably with your back straight.
              2. Wiggle your nose like a bunny.
              3. Take three quick sniffs through your nose.
              4. Exhale slowly through your mouth.
              5. Repeat this sequence several times.
            </Text>

            <Text style={styles.stepTitle}>🐝 Bumblebee Breathing</Text>
            <Text style={styles.stepText}>
              1. Sit or kneel comfortably.
              2. Close your eyes and relax your shoulders.
              3. Inhale deeply through your nose.
              4. As you exhale, make a gentle humming or buzzing sound like a bee.
              5. Continue this pattern for a few breaths.
            </Text>

            <Text style={styles.stepTitle}>🦁 Lion Breathing</Text>
            <Text style={styles.stepText}>
              1. Sit on your heels with your hands on your knees.
              2. Inhale deeply through your nose.
              3. Open your mouth wide, stick out your tongue, and exhale forcefully with a "ha" sound, like a lion's roar.
              4. Repeat this exercise a few times.
            </Text>

            <Text style={styles.stepTitle}>🐍 Snake Breathing</Text>
            <Text style={styles.stepText}>
              1. Sit comfortably with your back straight.
              2. Inhale slowly through your nose for a count of three.
              3. Hold your breath for a moment.
              4. Exhale slowly through your mouth, making a hissing sound like a snake.
              5. Repeat this process several times.
            </Text>

            <Text style={styles.stepTitle}>🐻 Bear Breathing</Text>
            <Text style={styles.stepText}>
              1. Sit comfortably with your hands on your knees.
              2. Inhale deeply through your nose for a count of four.
              3. Hold your breath for a count of four.
              4. Exhale slowly through your mouth for a count of four.
              5. Pause for a count of four before the next inhale.
              6. Repeat this cycle a few times.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating Animal Breaths into daily routines can make mindfulness and relaxation enjoyable for children, providing them with creative tools to manage their emotions effectively.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/rP-3mBnJG68" }} // 5 ANIMAL Breath Exercises for Kids
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
