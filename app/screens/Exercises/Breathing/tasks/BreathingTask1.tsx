import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Breathing">;

export default function BreathingTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Breathing", { taskCompleted: true, taskScreen: "BreathingTask1" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/BreathingTask1.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Diaphragmatic Breathing</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🪑 Step 1: Find a Comfortable Position (1 min)</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a comfortable position. Place one hand on your chest and the other on your abdomen.
            </Text>
  
            <Text style={styles.stepTitle}>🌬 Step 2: Inhale Deeply (2 min)</Text>
            <Text style={styles.stepText}>
              Breathe in slowly through your nose, ensuring your abdomen expands while your chest remains still.
            </Text>
  
            <Text style={styles.stepTitle}>😌 Step 3: Exhale Slowly (2 min)</Text>
            <Text style={styles.stepText}>
              Exhale gently through your mouth, allowing your abdomen to deflate. Focus on controlled and rhythmic breathing.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              Diaphragmatic breathing helps reduce stress and improve oxygen flow, promoting relaxation and emotional balance.
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
