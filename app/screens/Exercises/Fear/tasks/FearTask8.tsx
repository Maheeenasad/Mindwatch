import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask8">;

export default function FearTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Power Pose Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Power Pose Exercise is a simple technique designed to boost confidence and reduce feelings of fear or anxiety. By adopting expansive body postures, teenagers can influence their mental state, leading to increased self-assurance in challenging situations.
            </Text>

            <Text style={styles.stepTitle}>🦸‍♀️ Step 1: Understand the Power Pose</Text>
            <Text style={styles.stepText}>
              Power poses are expansive, open stances that can positively affect your mood and confidence. Examples include standing tall with hands on hips (Wonder Woman pose) or raising your arms in a 'V' shape like a victorious athlete.
            </Text>

            <Text style={styles.stepTitle}>🧍 Step 2: Choose Your Power Pose</Text>
            <Text style={styles.stepText}>
              Select a power pose that resonates with you. Ensure it's a stance that makes you feel strong and assertive. Common choices are:
            </Text>
            <Text style={styles.exampleText}>- **The Wonder Woman:** Stand with feet shoulder-width apart, hands on hips, chest out, and head held high.</Text>
            <Text style={styles.exampleText}>- **The Victory Pose:** Stand with feet apart and arms raised overhead in a 'V' shape.</Text>
            <Text style={styles.exampleText}>- **The Boss:** Sit with legs apart, hands behind your head, and elbows pointing outward.</Text>

            <Text style={styles.stepTitle}>🕒 Step 3: Hold the Pose</Text>
            <Text style={styles.stepText}>
              Once you've chosen your pose, hold it for 2 minutes. Breathe deeply and focus on the feelings of strength and confidence that arise during this time.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Visualize Success</Text>
            <Text style={styles.stepText}>
              While maintaining the pose, visualize yourself succeeding in a situation where you desire more confidence, such as giving a presentation or facing a challenging task.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After completing the exercise, take a moment to reflect. Notice any changes in your mood or confidence levels. Consider jotting down your feelings in a journal.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating power poses into your routine can be a quick and effective way to boost self-confidence and manage feelings of fear. Remember, your body language not only influences how others perceive you but also how you perceive yourself.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/gEV0wPuxaiQ" }} // Does Your Youth/Teen Need a Confidence Boost? Try Starfish!
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
  exampleText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    lineHeight: 22,
    marginLeft: 10,
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
