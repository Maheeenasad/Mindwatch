import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anger">;

export default function AngerTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anger", { taskCompleted: true, taskScreen: "AngerTask3" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~7 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🌿 Step 1: Find a Quiet Place (1 min)</Text>
            <Text style={styles.stepText}>
              Sit comfortably in a quiet space where you won’t be disturbed. Close your eyes and take a few deep breaths to center yourself.
            </Text>

            <Text style={styles.stepTitle}>🌊 Step 2: Imagine a Peaceful Scene (3 min)</Text>
            <Text style={styles.stepText}>
              Visualize yourself in a calm, safe environment—perhaps a beach, a forest, or a peaceful garden.
              Engage your senses: feel the breeze, hear the waves, and smell the fresh air.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 3: Connect with the Calmness (2 min)</Text>
            <Text style={styles.stepText}>
              As you immerse yourself in this visualization, feel the tension melting away. Picture yourself letting go of anger and replacing it with peace.
            </Text>

            <Text style={styles.stepTitle}>🎯 Final Thought</Text>
            <Text style={styles.stepText}>
              Guided Visualization can help shift your mind away from anger and into a state of relaxation.
              Regular practice can improve emotional control and bring inner peace.
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

