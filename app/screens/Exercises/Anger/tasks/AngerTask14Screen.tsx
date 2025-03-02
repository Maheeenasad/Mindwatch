import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask14">;

export default function AngerTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Therapeutic Journaling</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Therapeutic journaling is a powerful tool to process and manage anger. By writing down your thoughts and feelings, you can gain insights into your emotional responses and develop healthier coping strategies.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Set Up Your Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet, comfortable space where you won't be disturbed. Gather your journaling materials, whether it's a notebook and pen or a digital device.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 2: Allocate Time</Text>
            <Text style={styles.stepText}>
              Dedicate at least 15 minutes to this exercise. Consistency is key, so try to journal at the same time each day.
            </Text>

            <Text style={styles.stepTitle}>🖊️ Step 3: Begin with a Prompt</Text>
            <Text style={styles.stepText}>
              Use prompts to explore your anger. For example:
              {"\n"}- What are you most angry about right now? Why?
              {"\n"}- Describe a recent situation where you felt intense anger. What triggered it?
              {"\n"}- How does your body feel when you're angry? Where do you feel tension?
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 4: Reflect on Your Writing</Text>
            <Text style={styles.stepText}>
              After writing, read over your entry. Note any patterns or triggers that emerge. Reflect on how you handled the situation and consider alternative responses for the future.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular journaling can help you understand and manage your anger more effectively. By acknowledging and exploring your emotions, you take the first step toward healing and personal growth.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/dh70zriObn8" }} // MINDFUL JOURNALING TECHNIQUE FOR ANGER
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
