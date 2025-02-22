import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "SelfConfidence">;

export default function SelfConfidenceTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("SelfConfidence", { taskCompleted: true, taskScreen: "SelfConfidenceTask4" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/SelfConfidenceTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Building Self-Confidence</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>💡 Step 1: Identify Your Strengths</Text>
            <Text style={styles.stepText}>
              Take a moment to reflect on your strengths and past achievements. Write them down in a journal.
            </Text>

            <Text style={styles.stepTitle}>🚀 Step 2: Positive Self-Talk</Text>
            <Text style={styles.stepText}>
              Replace negative thoughts with positive affirmations. Say to yourself, "I am capable and strong."
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 3: Set Small Goals</Text>
            <Text style={styles.stepText}>
              Set achievable goals and celebrate small victories. Progress boosts confidence!
            </Text>

            <Text style={styles.stepTitle}>💖 Final Thought</Text>
            <Text style={styles.stepText}>
              Confidence is built over time. Trust yourself, embrace challenges, and keep growing!
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
