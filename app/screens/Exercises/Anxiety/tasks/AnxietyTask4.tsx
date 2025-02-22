import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anxiety">;

export default function AnxietyTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anxiety", { taskCompleted: true, taskScreen: "AnxietyTask4" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/anxiety.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Thought Defusion Exercise</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~8 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧠 Step 1: Identify Your Thoughts</Text>
            <Text style={styles.stepText}>
              Recognize a distressing thought that is troubling you. Write it down or say it in your mind.
            </Text>
  
            <Text style={styles.stepTitle}>🌊 Step 2: Observe the Thought</Text>
            <Text style={styles.stepText}>
              Imagine your thought as a cloud floating in the sky or a leaf drifting down a stream.
            </Text>
  
            <Text style={styles.stepTitle}>🔄 Step 3: Reframe the Thought</Text>
            <Text style={styles.stepText}>
              Instead of “I am not good enough,” say “I am having the thought that I am not good enough.”
            </Text>
  
            <Text style={styles.stepTitle}>🎭 Step 4: Change the Perspective</Text>
            <Text style={styles.stepText}>
              Repeat the thought in a silly voice or sing it. This reduces its power over you.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              Thoughts are just thoughts—not reality. Defusing from them helps reduce their emotional impact.
            </Text>
          </View>
  
          <TouchableOpacity style={styles.completeButton} onPress={handleCompleteTask}>
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
    backgroundColor: "#F0F8FF", // Light blue for anxiety theme
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
    color: "#004D80", // Deep blue for calming effect
    textAlign: "center",
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: "#004D80",
    borderWidth: 2,
    alignSelf: "center",
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: "#004D80",
    fontWeight: "600",
  },
  stepsContainer: {
    backgroundColor: "#DFF4FF",
    padding: 15,
    borderRadius: 10,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004D80",
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    lineHeight: 22,
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: "#004D80",
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
