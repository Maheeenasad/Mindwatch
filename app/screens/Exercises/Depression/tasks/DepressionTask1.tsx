import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Depression">;

export default function DepressionTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Depression", { taskCompleted: true, taskScreen: "DepressionTask1" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Depression.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Morning Walk</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🚶 Step 1: Start with a Warm-up (2 min)</Text>
            <Text style={styles.stepText}>
              Begin with light stretching or slow walking to prepare your body.
            </Text>
  
            <Text style={styles.stepTitle}>🌳 Step 2: Walk at a Steady Pace (10 min)</Text>
            <Text style={styles.stepText}>
              Maintain a comfortable pace, focus on deep breathing, and enjoy nature.
            </Text>
  
            <Text style={styles.stepTitle}>💆 Step 3: Cool Down (3 min)</Text>
            <Text style={styles.stepText}>
              Slow down your pace and take deep breaths to relax your body.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Final Thought</Text>
            <Text style={styles.stepText}>
              A morning walk helps clear your mind, boosts mood, and improves overall well-being.
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
    color: "#004D80",
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