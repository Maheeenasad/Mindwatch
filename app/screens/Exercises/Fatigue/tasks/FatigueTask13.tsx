import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask13">;

export default function FatigueTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided relaxation is a powerful technique to alleviate fatigue and promote mental clarity. By following a structured relaxation session, you can reduce stress and rejuvenate your energy levels.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Create a Calm Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet space where you won't be disturbed. Dim the lights, and consider playing soft, ambient music to enhance relaxation.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 2: Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a comfortable position. Ensure your body is fully supported to prevent any discomfort during the session.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 3: Select a Guided Relaxation</Text>
            <Text style={styles.stepText}>
              Choose a guided relaxation session that resonates with you. This could be a meditation focusing on stress relief, a body scan, or visualization techniques.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 4: Focus on the Guidance</Text>
            <Text style={styles.stepText}>
              As the session begins, close your eyes and concentrate on the guide's voice. Allow yourself to follow along, releasing tension from each part of your body.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 5: Dedicate Time</Text>
            <Text style={styles.stepText}>
              Allocate approximately 15 minutes for this practice. Consistency enhances the benefits, so consider incorporating guided relaxation into your daily routine.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular guided relaxation can significantly reduce feelings of fatigue and improve overall well-being. Embrace this practice to restore balance and vitality in your life.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/qcdbCphVa1g" }} // 15 Minute Guided Imagery Meditation Exercise | City of Hope
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
