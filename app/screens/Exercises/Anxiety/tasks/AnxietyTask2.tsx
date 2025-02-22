import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anxiety">;

export default function AnxietyTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anxiety", { taskCompleted: true, taskScreen: "AnxietyTask2" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/anxiety.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Box Breathing Technique</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🫁 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit in a comfortable position with your back straight and hands relaxed on your lap.
            </Text>
  
            <Text style={styles.stepTitle}>💨 Step 2: Inhale (4 seconds)</Text>
            <Text style={styles.stepText}>
              Take a slow, deep breath in through your nose for a count of four. Feel your lungs filling with air.
            </Text>
  
            <Text style={styles.stepTitle}>⏳ Step 3: Hold (4 seconds)</Text>
            <Text style={styles.stepText}>
              Hold your breath for a count of four. Maintain relaxation and avoid tension.
            </Text>
  
            <Text style={styles.stepTitle}>🌬️ Step 4: Exhale (4 seconds)</Text>
            <Text style={styles.stepText}>
              Slowly exhale through your mouth for four seconds, emptying your lungs completely.
            </Text>
  
            <Text style={styles.stepTitle}>🔄 Step 5: Repeat</Text>
            <Text style={styles.stepText}>
              Continue this cycle for 5–10 minutes. Focus on your breath to bring calmness to your mind.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              Box breathing helps reduce anxiety by controlling the nervous system and enhancing focus. Use it whenever you feel stressed or overwhelmed.
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
