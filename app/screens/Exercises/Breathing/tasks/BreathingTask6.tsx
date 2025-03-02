import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask6">;

export default function BreathingTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>4-7-8 Technique</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The 4-7-8 Technique is a simple yet effective breathing exercise designed to promote relaxation and reduce stress. By focusing on specific counts during inhalation, breath-holding, and exhalation, this method can help calm the mind and body.
            </Text>

            <Text style={styles.stepTitle}>🟦 Steps to Practice the 4-7-8 Technique</Text>
            <Text style={styles.stepText}>
              1. **Find a Comfortable Position**: Sit or lie down in a relaxed posture, ensuring your back is straight.
              2. **Inhale**: Close your eyes and inhale quietly through your nose for a count of four.
              3. **Hold**: Hold your breath for a count of seven.
              4. **Exhale**: Exhale completely through your mouth, making a whooshing sound, for a count of eight.
              5. **Repeat**: This cycle constitutes one breath. Repeat the process for a total of four breaths.
            </Text>

            <Text style={styles.stepTitle}>🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - **Consistency**: Practice the 4-7-8 Technique twice daily to develop a habit and enhance its effectiveness.
              - **Comfort**: If holding your breath for seven counts is challenging, start with shorter durations and gradually increase as you become more comfortable.
              - **Environment**: Choose a quiet, comfortable environment free from distractions to maximize relaxation.
            </Text>

            <Text style={styles.stepTitle}>🎯 Benefits of the 4-7-8 Technique</Text>
            <Text style={styles.stepText}>
              - **Reduces Anxiety**: Helps manage stress and anxiety by promoting a state of calm.
              - **Improves Sleep**: Assists in falling asleep faster by quieting the mind.
              - **Controls Cravings**: Aids in reducing cravings and regulating emotional responses.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/Uxbdx-SeOOo" }} // 4-7-8 Breathing Exercise by GoZen
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
