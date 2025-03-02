import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask4">;

export default function AngerTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Comfort & Self-Soothing Techniques</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5-10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Teaching children comfort and self-soothing techniques equips them with tools to manage anger and distress, fostering emotional resilience and independence.
            </Text>

            <Text style={styles.stepTitle}>🧸 Step 1: Create a Calm-Down Box</Text>
            <Text style={styles.stepText}>
              Assemble a collection of items that your child finds comforting, such as a favorite toy, stress ball, or coloring book. This personalized box serves as a go-to resource when they need to calm down. 
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Practice Deep Breathing</Text>
            <Text style={styles.stepText}>
              Teach your child simple deep breathing exercises. For example, instruct them to inhale slowly for four counts, hold for four counts, and exhale for four counts. This technique helps reduce physical tension associated with anger.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 3: Engage in a Soothing Activity</Text>
            <Text style={styles.stepText}>
              Encourage your child to participate in calming activities like drawing, listening to soft music, or reading a favorite book. These activities can divert attention from anger and promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Positive Self-Talk</Text>
            <Text style={styles.stepText}>
              Help your child develop positive affirmations they can repeat to themselves when feeling upset, such as "I am calm and in control." Positive self-talk can shift their mindset and reduce feelings of anger.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Empowering children with self-soothing techniques not only aids in managing anger but also builds their confidence in handling various emotions constructively.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/3BFO-NwCK08" }} // How to comfort an upset child - Dr. Dan Siegel
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
