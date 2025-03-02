import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask5">;

export default function FearTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Fear.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Confidence Affirmations</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Positive affirmations are powerful tools that can help teenagers build self-confidence and combat negative thoughts. This exercise guides you through creating and practicing personalized affirmations to enhance self-esteem.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Understand Affirmations</Text>
            <Text style={styles.stepText}>
              Affirmations are positive statements that challenge negative beliefs and promote a healthy mindset. They can boost confidence and encourage a positive self-image.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 2: Create Personal Affirmations</Text>
            <Text style={styles.stepText}>
              Write down 3-5 positive statements about yourself. Ensure they are in the present tense and reflect qualities or goals you value. For example:
            </Text>
            <Text style={styles.exampleText}>
              - I am capable of achieving my goals.
            </Text>
            <Text style={styles.exampleText}>
              - I embrace challenges as opportunities to grow.
            </Text>
            <Text style={styles.exampleText}>
              - I believe in myself and my abilities.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Practice Your Affirmations</Text>
            <Text style={styles.stepText}>
              Stand in front of a mirror and recite each affirmation aloud. Repeat them daily, preferably in the morning, to set a positive tone for the day.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After a week of practicing your affirmations, journal your feelings and any changes in your self-perception. Reflect on how this practice has impacted your confidence and mindset.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Consistently practicing positive affirmations can lead to a more optimistic outlook and strengthened self-confidence. Embrace this habit to nurture a resilient and empowered mindset.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/sLX72_WJ5q8" }} // Mindful Moment for Teens: "I Am" Affirmations
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
