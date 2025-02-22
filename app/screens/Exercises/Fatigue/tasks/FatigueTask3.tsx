import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Fatigue">;

export default function FatigueTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Fatigue", { taskCompleted: true, taskScreen: "FatigueTask3" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/fatigue.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gentle Stretching</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧘 Step 1: Neck Stretch (1 min)</Text>
            <Text style={styles.stepText}>
              Gently tilt your head to one side, bringing your ear towards your shoulder. Hold for 30 seconds on each side.
            </Text>
  
            <Text style={styles.stepTitle}>🙆‍♂️ Step 2: Shoulder Rolls (1 min)</Text>
            <Text style={styles.stepText}>
              Roll your shoulders forward and backward in a circular motion to release tension.
            </Text>
  
            <Text style={styles.stepTitle}>🤸‍♂️ Step 3: Upper Body Stretch (2 min)</Text>
            <Text style={styles.stepText}>
              Extend your arms overhead and interlock your fingers. Stretch from side to side, holding each stretch for 30 seconds.
            </Text>
  
            <Text style={styles.stepTitle}>🦵 Step 4: Leg Stretch (1 min)</Text>
            <Text style={styles.stepText}>
              Sit or stand and extend one leg forward. Lean slightly to stretch your hamstring, then switch sides.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              Gentle stretching helps reduce muscle fatigue, improve flexibility, and enhance relaxation.
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
    backgroundColor: "#F0F8FF", // Light blue for a calming effect
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
