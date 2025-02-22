import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Impatience">;

export default function ImpatienceTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Impatience", { taskCompleted: true, taskScreen: "ImpatienceTask5" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require("@/assets/exercises/ImpatienceTask5.jpg")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Observing Nature</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🌳 Step 1: Choose a Natural Spot (3 min)</Text>
            <Text style={styles.stepText}>
              Find a quiet place outdoors, such as a park, garden, or by a window with a view of nature.
            </Text>

            <Text style={styles.stepTitle}>👀 Step 2: Observe Mindfully (4 min)</Text>
            <Text style={styles.stepText}>
              Focus on the details of your surroundings—watch the movement of leaves, the colors of flowers, or the patterns in the sky.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Breathe and Absorb (3 min)</Text>
            <Text style={styles.stepText}>
              Take deep breaths and feel connected to nature. Let the peacefulness of your surroundings help you cultivate patience and mindfulness.
            </Text>

            <Text style={styles.stepTitle}>🎯 Final Thought</Text>
            <Text style={styles.stepText}>
              Spending time in nature enhances patience and well-being. Observing nature mindfully can bring clarity and calmness to your day.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.completeButton}
            onPress={handleCompleteTask}
          >
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
