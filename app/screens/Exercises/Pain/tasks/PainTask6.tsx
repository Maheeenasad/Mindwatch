import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Pain">;

export default function PainTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Pain", { taskCompleted: true, taskScreen: "PainTask1" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Pain.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Muscle Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a quiet place where you won’t be disturbed.
            </Text>

            <Text style={styles.stepTitle}>💪 Step 2: Tense and Release</Text>
            <Text style={styles.stepText}>
              Start with your feet. Tense the muscles for 5 seconds, then release and feel the relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌊 Step 3: Move Up the Body</Text>
            <Text style={styles.stepText}>
              Repeat this process for your legs, abdomen, arms, shoulders, and neck.
            </Text>

            <Text style={styles.stepTitle}>🧠 Final Thought</Text>
            <Text style={styles.stepText}>
              This technique helps reduce tension and pain by promoting deep relaxation.
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
