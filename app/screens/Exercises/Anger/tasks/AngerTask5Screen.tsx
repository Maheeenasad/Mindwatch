import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask5">;

export default function AngerTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Controlled Breathing Practice</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5-10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Controlled breathing exercises help children manage anger by promoting relaxation and emotional regulation. This practice can reduce stress and improve overall well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Introduce Belly Breathing</Text>
            <Text style={styles.stepText}>
              Explain to your child that belly breathing, also known as diaphragmatic breathing, involves taking deep breaths that fill the stomach area. This technique can help them feel calmer when they're upset.
            </Text>

            <Text style={styles.stepTitle}>🐻 Step 2: Practice with a Stuffed Animal</Text>
            <Text style={styles.stepText}>
              Have your child lie down comfortably and place a stuffed animal on their belly. Ask them to inhale deeply through the nose, making the stuffed animal rise, and then exhale slowly through the mouth, watching it fall. This visual can make the exercise more engaging. 
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Teach the 4-7-8 Technique</Text>
            <Text style={styles.stepText}>
              Guide your child to inhale through the nose for 4 seconds, hold the breath for 7 seconds, and then exhale slowly through the mouth for 8 seconds. This method can be particularly effective in reducing anxiety and anger. 
            </Text>

            <Text style={styles.stepTitle}>🎈 Step 4: Balloon Breathing Exercise</Text>
            <Text style={styles.stepText}>
              Encourage your child to imagine inflating a balloon in their stomach. As they inhale deeply through the nose, their belly expands like a balloon. As they exhale slowly through the mouth, the balloon deflates. This visualization can make deep breathing more fun. 
            </Text>

            <Text style={styles.stepTitle}>🕊️ Step 5: Regular Practice</Text>
            <Text style={styles.stepText}>
              Encourage your child to practice these breathing techniques daily, even when they're not feeling angry. Regular practice can make it easier for them to use these techniques during challenging moments.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Controlled breathing is a valuable tool that children can use to manage their emotions. By incorporating these exercises into their routine, they can develop better self-regulation skills and handle anger more effectively.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/xkHaUI5kAyA" }} // Breathing Exercises for Calm Kids Self-Regulation
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