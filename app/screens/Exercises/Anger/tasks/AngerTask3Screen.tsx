import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask3">;

export default function AngerTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Physical Release Activity</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Physical Release Activity provides children with a constructive outlet to channel their anger and frustration through movement, promoting emotional regulation and physical well-being.
            </Text>

            <Text style={styles.stepTitle}>🏃‍♂️ Step 1: Choose a Physical Activity</Text>
            <Text style={styles.stepText}>
              Encourage your child to select a physical activity they enjoy, such as dancing, jumping rope, or running in place. Engaging in physical movement can help release pent-up energy associated with anger.
            </Text>

            <Text style={styles.stepTitle}>🎵 Step 2: Incorporate Music</Text>
            <Text style={styles.stepText}>
              Play some of your child's favorite upbeat music to make the activity more enjoyable. Music can enhance the mood and provide a rhythmic pattern for the physical movements.
            </Text>

            <Text style={styles.stepTitle}>⏱️ Step 3: Set a Time Frame</Text>
            <Text style={styles.stepText}>
              Decide on a duration for the activity, typically between 10 to 15 minutes. This provides a structured time for your child to engage in the physical release without feeling rushed.
            </Text>

            <Text style={styles.stepTitle}>🤗 Step 4: Reflect on Feelings</Text>
            <Text style={styles.stepText}>
              After the activity, sit down with your child and discuss how they feel. Reflecting on their emotions post-exercise can help them recognize the benefits of physical activity in managing anger.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in physical activities offers children a healthy way to express and manage their anger, contributing to their overall emotional and physical health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/UZrJBj3kRd0" }} // 3 Movement Or Physical Release-Anger Coping Skills For Kids
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
