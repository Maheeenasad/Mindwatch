import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask2">;

export default function FearTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided visualization is a relaxation technique that helps children manage fear by using their imagination to create calming mental images. This practice can empower children to face their fears with confidence.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Create a Calm Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet, comfortable space where the child can sit or lie down without interruptions. Dim the lights and minimize background noise to enhance relaxation.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 2: Choose a Guided Visualization</Text>
            <Text style={styles.stepText}>
              Select a guided visualization exercise designed for children. "The Beach - Children's Guided Imagery for Relaxation" by SickKids is a great option that takes children on a calming beach journey.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Begin the Visualization</Text>
            <Text style={styles.stepText}>
              Have the child close their eyes and take deep breaths. Play the chosen guided visualization, encouraging them to fully immerse themselves in the experience.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Discuss the Experience</Text>
            <Text style={styles.stepText}>
              After the session, talk with the child about their experience. Discuss the images they visualized and how it made them feel, reinforcing positive emotions and coping strategies.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of guided visualization can help children develop resilience against fear and anxiety. Encourage them to use this technique whenever they feel overwhelmed.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/Feydqcmrfbg" }} // The Beach - Children's Guided Imagery for Relaxation
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
