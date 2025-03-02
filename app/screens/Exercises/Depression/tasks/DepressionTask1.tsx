import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask1">;

export default function DepressionTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Depression.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Storytelling</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided Storytelling is a therapeutic technique that encourages children to create and share stories as a way to explore and express their emotions. This process can help children process feelings of sadness or depression by externalizing their experiences and gaining new perspectives.
            </Text>

            <Text style={styles.stepTitle}>📚 Step 1: Choose a Theme</Text>
            <Text style={styles.stepText}>
              Select a theme that resonates with you, such as friendship, overcoming challenges, or a journey. This theme will serve as the foundation for your story.
            </Text>

            <Text style={styles.stepTitle}>✏️ Step 2: Create Your Story</Text>
            <Text style={styles.stepText}>
              Begin crafting a story around your chosen theme. Introduce characters, settings, and a plot that reflects the emotions or situations you're experiencing. Allow your imagination to guide you, and don't worry about perfection.
            </Text>

            <Text style={styles.stepTitle}>🗣 Step 3: Share Your Story</Text>
            <Text style={styles.stepText}>
              Share your story with a trusted person, such as a family member, friend, or therapist. Discuss the emotions and themes within the story and how they relate to your own experiences.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 4: Reflect on the Process</Text>
            <Text style={styles.stepText}>
              After sharing, take time to reflect on how creating and discussing the story made you feel. Consider any insights gained and how they might apply to your real-life situations.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in Guided Storytelling can provide a safe space to explore and express complex emotions. Regular practice can enhance emotional understanding and resilience.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/g4iHKY2p5bY" }}
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
