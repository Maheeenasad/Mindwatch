import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask7">;

export default function FatigueTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Light Movement Routine</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in light physical activity can effectively combat fatigue by boosting energy levels and enhancing mental clarity. This routine incorporates gentle movements suitable for teenagers to rejuvenate the body and mind.
            </Text>

            <Text style={styles.stepTitle}>🚶‍♂️ Step 1: Gentle Walking</Text>
            <Text style={styles.stepText}>
              Begin with a 2-minute walk around your space. This activity increases blood circulation and prepares your body for the routine.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 2: Stretching</Text>
            <Text style={styles.stepText}>
              Perform gentle stretches for 3 minutes, focusing on major muscle groups. Stretching alleviates muscle tension and promotes relaxation.
            </Text>

            <Text style={styles.stepTitle}>🤸‍♂️ Step 3: Low-Impact Exercises</Text>
            <Text style={styles.stepText}>
              Engage in low-impact exercises such as standing marches or gentle arm swings for 3 minutes. These movements elevate heart rate without causing strain.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 4: Deep Breathing</Text>
            <Text style={styles.stepText}>
              Conclude with 2 minutes of deep breathing exercises. Inhale deeply through the nose, hold for a moment, and exhale slowly through the mouth. This practice calms the nervous system and reduces fatigue.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating this light movement routine into your daily schedule can significantly reduce feelings of fatigue. Regular activity not only boosts physical energy but also enhances mental well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/6k6cWxrBpK8" }} // Relevant Light Movement Routine video
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
