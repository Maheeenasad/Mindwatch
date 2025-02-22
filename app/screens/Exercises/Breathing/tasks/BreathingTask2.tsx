import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Breathing">;

export default function BreathingTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Breathing", { taskCompleted: true, taskScreen: "BreathingTask2" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/breathing.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>4-7-8 Breathing Technique</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧘 Step 1: Find a Relaxing Position</Text>
            <Text style={styles.stepText}>
              Sit comfortably with your back straight and shoulders relaxed.
            </Text>
  
            <Text style={styles.stepTitle}>🌬 Step 2: Inhale for 4 Seconds</Text>
            <Text style={styles.stepText}>
              Close your eyes and inhale deeply through your nose for a count of four.
            </Text>
  
            <Text style={styles.stepTitle}>⏳ Step 3: Hold for 7 Seconds</Text>
            <Text style={styles.stepText}>
              Hold your breath for a count of seven, staying relaxed.
            </Text>
  
            <Text style={styles.stepTitle}>😌 Step 4: Exhale for 8 Seconds</Text>
            <Text style={styles.stepText}>
              Slowly exhale through your mouth for a count of eight, releasing all tension.
            </Text>
  
            <Text style={styles.stepTitle}>🔁 Step 5: Repeat</Text>
            <Text style={styles.stepText}>
              Repeat this cycle for at least four rounds to feel a calming effect.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              The 4-7-8 technique is known to help reduce stress, calm the nervous system, and improve sleep quality.
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
    backgroundColor: "#F0F8FF", // Light blue for calming effect
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
    color: "#004D80", // Deep blue for relaxation
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