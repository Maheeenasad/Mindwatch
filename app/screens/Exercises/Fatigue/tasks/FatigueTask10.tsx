import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask10">;

export default function FatigueTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Nature Sounds</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with nature sounds can significantly reduce stress and enhance relaxation, which is particularly beneficial for teenagers experiencing fatigue. Studies have shown that exposure to natural sounds lowers blood pressure, reduces pain, and improves cognitive performance. 
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Create a Peaceful Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet space where you can sit or lie down comfortably without interruptions. Dim the lights or use a sleep mask to block out visual distractions.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 2: Choose Your Nature Sounds</Text>
            <Text style={styles.stepText}>
              Select a nature sound that resonates with you, such as a flowing river, rustling leaves, or birdsong. Using headphones can enhance the immersive experience.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Focus on Your Breathing</Text>
            <Text style={styles.stepText}>
              Close your eyes and take deep, slow breaths. Inhale through your nose for a count of four, hold for four, then exhale through your mouth for a count of four. Repeat this cycle to center yourself.
            </Text>

            <Text style={styles.stepTitle}>🎶 Step 4: Immerse Yourself in the Sounds</Text>
            <Text style={styles.stepText}>
              As the nature sounds play, direct your attention to the various elements you hear. If your mind wanders, gently bring your focus back to the sounds.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 5: Visualize a Natural Setting</Text>
            <Text style={styles.stepText}>
              Imagine yourself in a serene natural environment that corresponds with the sounds you're hearing. Visualizing being in nature can enhance the relaxation effect.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 6: Gradual Return</Text>
            <Text style={styles.stepText}>
              After 10-15 minutes, slowly bring your awareness back to the present. Wiggle your fingers and toes, take a deep breath, and open your eyes when you're ready.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating nature sounds into your routine can provide a simple yet effective way to combat fatigue and improve overall well-being. Regular practice can lead to sustained benefits.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/eKFTSSKCzWA" }} // Relaxing Nature Sounds video
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
 
