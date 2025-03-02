import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask1">;

export default function FatigueTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Fatigue.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gentle Stretching</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Gentle stretching exercises can help alleviate fatigue in children by promoting blood circulation, reducing muscle tension, and enhancing overall relaxation. Incorporating these stretches into daily routines can boost energy levels and improve well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Overhead Arm Stretch</Text>
            <Text style={styles.stepText}>
              Stand with feet shoulder-width apart. Raise both arms overhead and interlace fingers. Gently stretch upward, feeling the elongation in the upper body. Hold for 15 seconds and repeat twice.
            </Text>

            <Text style={styles.stepTitle}>🐱 Step 2: Cat-Cow Stretch</Text>
            <Text style={styles.stepText}>
              Begin on all fours with hands under shoulders and knees under hips. Inhale as you arch your back, lifting your head (cow pose), then exhale while rounding your back and tucking your chin to your chest (cat pose). Repeat this sequence five times.
            </Text>

            <Text style={styles.stepTitle}>🦋 Step 3: Butterfly Stretch</Text>
            <Text style={styles.stepText}>
              Sit on the floor with the soles of your feet touching and knees bent outward. Hold your feet with your hands and gently press your knees toward the floor. Maintain this position for 20 seconds and repeat twice.
            </Text>

            <Text style={styles.stepTitle}>🌿 Step 4: Child's Pose</Text>
            <Text style={styles.stepText}>
              Kneel on the floor with knees apart and toes touching. Sit back on your heels and extend your arms forward, lowering your chest toward the ground. Hold this pose for 30 seconds, focusing on deep breathing.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly practicing these gentle stretches can help combat fatigue by revitalizing the body and calming the mind. Encourage children to listen to their bodies and perform each stretch comfortably.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/v6rD5JUnwX8" }}
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
