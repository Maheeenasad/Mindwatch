import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anxiety">;

export default function AnxietyTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anxiety", { taskCompleted: true, taskScreen: "AnxietyTask3" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Safe Space Visualization</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~7 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🌅 Step 1: Find a Quiet Place</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a peaceful environment. Close your eyes and take a few deep breaths.
            </Text>
  
            <Text style={styles.stepTitle}>🌿 Step 2: Imagine Your Safe Space</Text>
            <Text style={styles.stepText}>
              Visualize a place where you feel completely safe and relaxed. It can be real or imaginary—a beach, forest, or cozy room.
            </Text>
  
            <Text style={styles.stepTitle}>🎨 Step 3: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              Notice the details—what do you see, hear, and feel? Picture the colors, sounds, and textures around you.
            </Text>
  
            <Text style={styles.stepTitle}>🕊️ Step 4: Absorb the Calmness</Text>
            <Text style={styles.stepText}>
              Stay in this space for a few minutes, letting go of any stress. Remind yourself that you can return to this place anytime.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              Safe space visualization is a powerful way to reduce anxiety and create a sense of security in moments of stress.
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
