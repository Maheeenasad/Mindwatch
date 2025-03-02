import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask2">;

export default function AnxietyTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Calming Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Calming visualization is a technique that helps children manage anxiety by using their imagination to create peaceful and soothing images in their minds. This practice can reduce stress and promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              Guide your child to a quiet and comfortable place where they won't be disturbed. This could be a cozy corner in their room or any space where they feel safe and relaxed.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Deep Breathing</Text>
            <Text style={styles.stepText}>
              Encourage your child to take slow, deep breaths. Inhale deeply through the nose, hold for a moment, and then exhale slowly through the mouth. Repeat this several times to help them relax.
            </Text>

            <Text style={styles.stepTitle}>🌈 Step 3: Imagine a Peaceful Place</Text>
            <Text style={styles.stepText}>
              Ask your child to close their eyes and visualize a place where they feel happy and calm. It could be a beach, a forest, a garden, or any other serene location. Encourage them to use all their senses to imagine this place vividly:
              {"\n"}- **Sight**: What do they see? Colors, objects, nature?
              {"\n"}- **Sound**: What sounds are present? Birds chirping, waves crashing?
              {"\n"}- **Touch**: What can they feel? The warmth of the sun, a gentle breeze?
              {"\n"}- **Smell**: Are there any scents? Fresh flowers, salty sea air?
              {"\n"}- **Taste**: Is there a particular taste associated with this place? Perhaps the taste of fresh fruit or cool water?
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 4: Spend Time in the Visualization</Text>
            <Text style={styles.stepText}>
              Allow your child to spend several minutes immersed in their imagined peaceful place. Let them explore and enjoy the sensations, helping them to feel more relaxed and centered.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Return to the Present</Text>
            <Text style={styles.stepText}>
              Gently guide your child to bring their awareness back to the present moment. Suggest they wiggle their fingers and toes, take a deep breath, and open their eyes when they're ready.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of calming visualization can empower children to manage their anxiety effectively. By creating a mental "safe space," they can retreat to this calming place whenever they feel overwhelmed or anxious.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/zqs5mOklk2Q" }} // Guided Visualization for Kids - A Rainbow Journey
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
