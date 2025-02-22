import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anger">;

export default function AngerTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anger", { taskCompleted: true, taskScreen: "AngerTask1" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anger.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Deep Breathing Exercise</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>😤 Step 1: Controlled Breathing (1 min)</Text>
            <Text style={styles.stepText}>
              Find a quiet place and sit comfortably. Take a deep breath in through your nose for 4 seconds,
              hold it for 4 seconds, and exhale slowly through your mouth for 6 seconds.
              Repeat this for a minute to calm your nervous system.
            </Text>
  
            <Text style={styles.stepTitle}>🌬 Step 2: Releasing Tension (2 min)</Text>
            <Text style={styles.stepText}>
              As you breathe deeply, visualize releasing your anger with each exhale.
              Imagine the tension leaving your body as you let out each breath.
            </Text>
  
            <Text style={styles.stepTitle}>🧘‍♂️ Step 3: Grounding Breathwork (2 min)</Text>
            <Text style={styles.stepText}>
              Focus on your breath and count backward from 10 with each inhale and exhale.
              This helps divert attention from anger and brings a sense of calmness.
            </Text>
  
            <Text style={styles.stepTitle}>🎯 Final Thought</Text>
            <Text style={styles.stepText}>
              Deep breathing helps slow your heart rate and reduce anger intensity.
              Practicing this technique regularly can improve emotional control.
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
    color: "#003366", // Updated theme color
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
  completeButton: {
    marginTop: 20,
    backgroundColor: "#003366", // Updated theme color
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
