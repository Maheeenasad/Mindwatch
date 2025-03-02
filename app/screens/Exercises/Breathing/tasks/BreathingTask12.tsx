import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "BreathingTask12">;

export default function BreathingTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Relaxation Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~12 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Relaxation Breathing is a powerful technique designed to release physical tension and promote a deep state of relaxation. This exercise helps in reducing anxiety, improving sleep, and fostering an overall sense of calmness.
            </Text>

            <Text style={styles.stepTitle}>🟦 Steps to Practice Progressive Relaxation Breathing</Text>
            <Text style={styles.stepText}>
              1. **Find a Comfortable Position**: Sit in a chair or lie down in a quiet, dimly lit space where you won’t be disturbed.
              2. **Take a Deep Breath**: Inhale deeply through your nose, feeling your lungs expand, then slowly exhale through your mouth.
              3. **Focus on Muscle Groups**: Start with your feet. As you inhale, tense the muscles in your feet for about 5 seconds. Then, as you exhale, release all tension.
              4. **Move Upward**: Continue this process, moving up to your legs, thighs, abdomen, chest, arms, shoulders, and finally, your face.
              5. **Synchronize with Breath**: Each time you inhale, tense a muscle group. As you exhale, consciously let go of all tension.
              6. **Perform a Full-Body Scan**: Once you've worked through each muscle group, take a few deep breaths and notice how relaxed your body feels.
              7. **End with Deep Breathing**: Spend a couple of minutes taking slow, deep breaths, allowing yourself to fully immerse in the state of relaxation.

            </Text>

            <Text style={styles.stepTitle}>🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - **Practice Before Bed**: This technique is highly effective in preparing the body and mind for restful sleep.
              - **Stay Mindful**: Pay attention to the sensations in your body as you release tension.
              - **Use Guided Audio**: If you're new to progressive relaxation, listening to a guided session can help.
            </Text>

            <Text style={styles.stepTitle}>🎯 Benefits of Progressive Relaxation Breathing</Text>
            <Text style={styles.stepText}>
              - **Reduces Physical Tension**: Helps in relieving muscle tightness caused by stress.
              - **Enhances Sleep Quality**: Prepares the body for deep, restorative sleep.
              - **Lowers Anxiety and Stress**: Calms the nervous system and promotes relaxation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/suzElyDrM6g" }} // Guided Progressive Muscle Relaxation
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
