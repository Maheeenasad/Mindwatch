import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask14">;

export default function DepressionTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Therapeutic Writing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Therapeutic writing is a powerful tool for expressing emotions and processing experiences, which can help alleviate symptoms of depression. This exercise guides you through structured journaling to enhance self-awareness and emotional healing.
            </Text>

            <Text style={styles.stepTitle}>🖊️ Step 1: Create a Comfortable Writing Space</Text>
            <Text style={styles.stepText}>
              Find a quiet and comfortable place where you can write without interruptions. Ensure you have your preferred writing materials, whether it's a notebook and pen or a digital device.
            </Text>

            <Text style={styles.stepTitle}>🗓️ Step 2: Set Aside Dedicated Time</Text>
            <Text style={styles.stepText}>
              Allocate at least 15-30 minutes daily for your writing practice. Consistency helps in building a therapeutic routine.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 3: Choose a Writing Prompt</Text>
            <Text style={styles.stepText}>
              Select a prompt to guide your writing. Here are a few examples:
            </Text>
            <Text style={styles.bulletPoint}>• Describe a moment today when you felt a strong emotion. What triggered it?</Text>
            <Text style={styles.bulletPoint}>• Write a letter to someone (you don't have to send it) expressing something you've been holding back.</Text>
            <Text style={styles.bulletPoint}>• Reflect on a recent challenge. What did you learn from it?</Text>

            <Text style={styles.stepTitle}>🖋️ Step 4: Write Freely</Text>
            <Text style={styles.stepText}>
              Begin writing in response to the chosen prompt. Let your thoughts flow without worrying about grammar or structure. The goal is to express yourself authentically.
            </Text>

            <Text style={styles.stepTitle}>🔒 Step 5: Reflect and Secure Your Writing</Text>
            <Text style={styles.stepText}>
              After writing, take a moment to reflect on what you've expressed. Consider any insights or patterns that emerge. Store your writings in a safe place, respecting your privacy.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating therapeutic writing into your routine can be a valuable tool for managing depression. Remember, the process is personal, and there's no right or wrong way to express your thoughts and feelings.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/7CcZ7gyFXv0" }}
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
  bulletPoint: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    marginLeft: 10,
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
