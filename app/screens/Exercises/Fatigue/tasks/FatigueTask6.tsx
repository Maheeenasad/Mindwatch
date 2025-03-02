import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask6">;

export default function FatigueTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Fatigue.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Power Nap</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              A power nap is a short, effective way to refresh your mind and body without feeling groggy. It enhances focus, reduces fatigue, and boosts energy levels. Follow these steps to take a perfect power nap.
            </Text>

            <Text style={styles.stepTitle}>🛏️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              Choose a comfortable, quiet spot where you won't be disturbed. A dimly lit room or an eye mask can help block out distractions.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 2: Set a Timer</Text>
            <Text style={styles.stepText}>
              The ideal power nap lasts between 10-20 minutes. Avoid exceeding this duration to prevent sleep inertia (feeling groggy after waking up).
            </Text>

            <Text style={styles.stepTitle}>😌 Step 3: Get Comfortable</Text>
            <Text style={styles.stepText}>
              Lie down or recline in a relaxed position. Use a pillow for support and maintain a comfortable temperature.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 4: Relax and Breathe</Text>
            <Text style={styles.stepText}>
              Take deep breaths, letting go of any stress. Focus on slow, rhythmic breathing to help your body enter a restful state quickly.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 5: Wake Up and Stretch</Text>
            <Text style={styles.stepText}>
              When your alarm goes off, gently stretch and take a few deep breaths before resuming activities. Drinking a glass of water can also help refresh you.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Power naps are a simple yet powerful tool to fight fatigue and boost productivity. Incorporating them into your daily routine can make a noticeable difference in energy and focus.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/FPGPo_5NBUs" }} // Relevant Power Nap video
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
