import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask9">;

export default function FatigueTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful breathing is a powerful technique that helps center the mind and reduce stress, which can alleviate feelings of fatigue. By focusing on your breath, you can enhance mental clarity and promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              Choose a comfortable, quiet place where you won't be disturbed. Sit in a chair with your feet flat on the floor and your hands resting on your thighs, or sit cross-legged on a cushion.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Assume a Comfortable Posture</Text>
            <Text style={styles.stepText}>
              Keep your back straight yet relaxed. Close your eyes to minimize distractions and bring your attention inward.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              Take a deep breath in through your nose, allowing your abdomen to expand. Exhale slowly through your mouth, feeling your abdomen contract. Pay attention to the sensation of the air entering and leaving your nostrils.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 4: Establish a Rhythm</Text>
            <Text style={styles.stepText}>
              Inhale deeply for a count of four, hold the breath for a count of four, then exhale for a count of four. This rhythmic breathing helps synchronize your body and mind.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Practice Breath Counting</Text>
            <Text style={styles.stepText}>
              To maintain focus, silently count each breath. Inhale (count "one"), exhale (count "two"), and continue up to ten, then start over. If your mind wanders, gently bring your attention back to your breath and restart the count.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 6: Body Scan Integration</Text>
            <Text style={styles.stepText}>
              As you breathe, perform a mental scan of your body from head to toe. Notice any areas of tension and, with each exhale, imagine releasing that tension.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 7: Gradual Conclusion</Text>
            <Text style={styles.stepText}>
              After 5-10 minutes, bring your awareness back to your surroundings. Wiggle your fingers and toes, open your eyes, and take a moment before resuming your activities.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful breathing into your daily routine can significantly reduce stress and combat fatigue. Regular practice enhances self-awareness and promotes a sense of calm.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/wfDTp2GogaQ" }} // Mindful Breathing Exercise video
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
