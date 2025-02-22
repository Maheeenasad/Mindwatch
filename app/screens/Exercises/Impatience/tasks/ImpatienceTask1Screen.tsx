import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

// Define navigation prop type
type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Impatience">;

export default function ImpatienceTask1Screen() {
  const navigation = useNavigation<NavigationProp>(); // ✅ Fix the error

  const handleCompleteTask = () => {
    navigation.replace("Impatience", { taskCompleted: true, taskScreen: "ImpatienceTask1" }); // ✅ Now it matches the updated type
  };
  
  

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Impatience.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Breathing</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Deep Breathing (1 min)</Text>
            <Text style={styles.stepText}>
              Find a quiet place to sit comfortably. Close your eyes and focus on your breath:
              {"\n"}• Inhale deeply through your nose for 4 seconds  
              {"\n"}• Hold your breath for 4 seconds  
              {"\n"}• Exhale slowly through your mouth for 6 seconds  
              {"\n"}Repeat this cycle for a full minute, allowing your mind to relax.
            </Text>
  
            <Text style={styles.stepTitle}>🌊 Step 2: Breathing with Awareness (2 min)</Text>
            <Text style={styles.stepText}>
              Place one hand on your stomach and the other on your chest. Feel your breath move through your body.  
              Focus on the rise and fall, letting go of any impatience or tension.
            </Text>
  
            <Text style={styles.stepTitle}>🌿 Step 3: Counting Breaths (2 min)</Text>
            <Text style={styles.stepText}>
              Silently count each inhale and exhale up to 10. If your mind wanders, gently bring it back and restart.
              {"\n"}This helps improve focus and patience over time.
            </Text>
  
            <Text style={styles.stepTitle}>🎯 Final Thought</Text>
            <Text style={styles.stepText}>
              Practicing mindful breathing daily strengthens patience and emotional control.  
              The more you focus on your breath, the more present and calm you'll feel in daily life.
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
    paddingBottom: 20, // Adjusted padding
  },
  image: {
    width: width,
    height: 250,
    resizeMode: "cover",
    borderBottomLeftRadius: 20, // Rounded bottom corners
    borderBottomRightRadius: 20, // Rounded bottom corners
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
