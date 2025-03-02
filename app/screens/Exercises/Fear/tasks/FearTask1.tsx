import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask1">;

export default function FearTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Fear.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Bravery Storytime</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Sharing stories about bravery can help children understand and overcome their own fears. This activity involves reading a story that highlights courage and discussing its themes to reinforce the concept of bravery.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 1: Choose a Bravery Story</Text>
            <Text style={styles.stepText}>
              Select a story that exemplifies courage. "The Lion Inside" by Rachel Bright is an excellent choice, portraying a timid mouse who finds his inner bravery.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 2: Create a Comfortable Reading Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet, cozy space free from distractions. Ensure comfortable seating and adequate lighting to make the reading experience enjoyable.
            </Text>

            <Text style={styles.stepTitle}>👧👦 Step 3: Engage in Interactive Reading</Text>
            <Text style={styles.stepText}>
              As you read, encourage the child to ask questions and express their thoughts. Discuss the character's feelings and actions, relating them to real-life situations where the child can exhibit bravery.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Reflect Through Creative Expression</Text>
            <Text style={styles.stepText}>
              After the story, prompt the child to draw a scene that showcases bravery or write about a time they felt courageous. This reinforces the lesson and allows them to personalize the concept.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly incorporating stories about courage into reading time can empower children to face their fears with confidence. Exploring various tales of bravery provides diverse perspectives and examples for them to emulate.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/5znDKKZ81tg" }} // The Lion Inside - Stories about being brave for kids at home
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
