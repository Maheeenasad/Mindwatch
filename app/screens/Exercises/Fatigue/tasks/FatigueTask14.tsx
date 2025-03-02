import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask14">;

export default function FatigueTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Short Walk & Fresh Air</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Taking a short walk outdoors and breathing in fresh air can significantly reduce fatigue and enhance mental clarity. This simple activity boosts energy levels, improves mood, and promotes overall well-being.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 1: Choose Your Path</Text>
            <Text style={styles.stepText}>
              Select a safe and accessible outdoor area for your walk. Parks, nature trails, or quiet neighborhood streets are ideal choices.
            </Text>

            <Text style={styles.stepTitle}>👟 Step 2: Dress Comfortably</Text>
            <Text style={styles.stepText}>
              Wear comfortable clothing and supportive footwear suitable for walking. Check the weather to ensure you're dressed appropriately.
            </Text>

            <Text style={styles.stepTitle}>🚶‍♀️ Step 3: Begin Your Walk</Text>
            <Text style={styles.stepText}>
              Start with a gentle pace, allowing your body to warm up. Focus on your surroundings, taking in the sights, sounds, and smells of nature.
            </Text>

            <Text style={styles.stepTitle}>💨 Step 4: Practice Mindful Breathing</Text>
            <Text style={styles.stepText}>
              As you walk, take deep breaths, inhaling through your nose and exhaling through your mouth. This practice increases oxygen intake and promotes relaxation.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 5: Duration</Text>
            <Text style={styles.stepText}>
              Aim for a 15-20 minute walk. Listen to your body and adjust the duration based on your comfort and energy levels.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating short walks and fresh air into your daily routine can effectively combat fatigue and improve mental clarity. Embrace this simple yet powerful practice to enhance your overall health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/-SSYX8sIOmM" }} // 20 Minute Walk at Home Exercise | Fitness Videos
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
