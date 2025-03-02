import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask2">;

export default function FatigueTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Breathing Exercises</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Breathing exercises are effective techniques to help children manage fatigue by promoting relaxation and increasing oxygen flow to the brain. Incorporating these exercises into daily routines can enhance energy levels and improve focus.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 1: Balloon Breathing</Text>
            <Text style={styles.stepText}>
              Have your child sit comfortably. Ask them to take a deep breath in through their nose, imagining they are filling a balloon in their belly. Then, have them slowly exhale through their mouth, visualizing the balloon deflating. Repeat this process five times.
            </Text>

            <Text style={styles.stepTitle}>🐉 Step 2: Dragon Fire Breaths</Text>
            <Text style={styles.stepText}>
              Encourage your child to stand tall with feet hip-width apart. Instruct them to inhale deeply through their nose, then exhale forcefully through their mouth with a "ha" sound, like a dragon breathing fire. This energizing exercise can be repeated three times.
            </Text>

            <Text style={styles.stepTitle}>🖐️ Step 3: Take-Five Breathing</Text>
            <Text style={styles.stepText}>
              Have your child hold one hand out with fingers spread. Using the index finger of the other hand, they will trace up and down each finger. As they trace up a finger, they inhale; as they trace down, they exhale. Continue this pattern for all five fingers.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of these breathing exercises can help children combat fatigue by promoting relaxation and enhancing mental clarity. Encourage your child to use these techniques whenever they feel tired or overwhelmed.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/ujLkszl0xT4" }}
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
