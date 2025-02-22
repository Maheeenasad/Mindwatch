import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anxiety">;

export default function AnxietyTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anxiety", { taskCompleted: true, taskScreen: "AnxietyTask1" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/anxiety.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Anxiety Body Scan</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧘 Step 1: Find a Calm Space (1 min)</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a quiet place. Close your eyes and take a few deep breaths. 
              Allow your body to settle and bring your focus to the present moment.
            </Text>
  
            <Text style={styles.stepTitle}>🌿 Step 2: Scan from Head to Toe (2 min)</Text>
            <Text style={styles.stepText}>
              Begin at the top of your head and slowly move your awareness down your body. 
              Notice any areas of tension, discomfort, or restlessness. Don't try to change anything—just observe.
            </Text>
  
            <Text style={styles.stepTitle}>💆 Step 3: Release Tension (2 min)</Text>
            <Text style={styles.stepText}>
              As you notice areas of tension, consciously relax those muscles. 
              Imagine each exhale carrying away anxiety and each inhale bringing in calmness.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              Body scan meditation helps increase body awareness and reduce anxiety symptoms. 
              Practicing this regularly can enhance relaxation and emotional stability.
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
