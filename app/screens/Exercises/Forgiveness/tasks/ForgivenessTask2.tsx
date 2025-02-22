import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Forgiveness">;

export default function ForgivenessTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Forgiveness", { taskCompleted: true, taskScreen: "ForgivenessTask2" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/ForgivenessTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Self-Reflection</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧘 Step 1: Find a Quiet Place (1 min)</Text>
            <Text style={styles.stepText}>
              Sit in a peaceful place, free from distractions.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Step 2: Reflect on Hurt (2 min)</Text>
            <Text style={styles.stepText}>
              Think about a past hurt and acknowledge your feelings without judgment.
            </Text>
  
            <Text style={styles.stepTitle}>💖 Step 3: Embrace Forgiveness (2 min)</Text>
            <Text style={styles.stepText}>
              Visualize letting go of negativity and replacing it with compassion.
            </Text>
  
            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Forgiveness is a gift you give yourself; it sets you free from past burdens.
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
    backgroundColor: "#F0F8FF", // Warm and soothing background
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
    color: "#003366", // Soothing brown
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
