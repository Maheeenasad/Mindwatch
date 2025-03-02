import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask15">;

export default function AngerTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Active Stress Release</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Active Stress Release involves engaging in physical activities that help dissipate built-up tension and reduce anger. By channeling energy into movement, you can experience immediate relief and promote long-term emotional balance.
            </Text>

            <Text style={styles.stepTitle}>🏃‍♂️ Step 1: Choose a Physical Activity</Text>
            <Text style={styles.stepText}>
              Select an activity that you enjoy and that gets your body moving. This could be:
              {"\n"}- Brisk walking or jogging
              {"\n"}- Dancing to your favorite music
              {"\n"}- Jumping rope
              {"\n"}- Practicing yoga or tai chi
              {"\n"}- Engaging in a sport like cycling or swimming
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 2: Set Aside Time</Text>
            <Text style={styles.stepText}>
              Allocate at least 20 minutes for this activity. Ensure it's a time when you can focus solely on yourself without interruptions.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              As you engage in the activity, pay attention to your breathing. Deep, rhythmic breaths can enhance the stress-relieving benefits and help center your mind.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Cool Down and Reflect</Text>
            <Text style={styles.stepText}>
              After completing the activity, take a few minutes to cool down. Perform gentle stretches and reflect on how your body feels. Notice any reduction in tension or anger.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating regular physical activity into your routine can be a powerful tool for managing anger and stress. Find activities you enjoy, and make them a consistent part of your life to promote emotional well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/XsuVihWOf4I" }} // Stress Release Workout! - Billy Blanks
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
