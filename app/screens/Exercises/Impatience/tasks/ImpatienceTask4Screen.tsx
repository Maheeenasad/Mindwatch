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
  "Impatience"
>;

export default function ImpatienceTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Impatience", { taskCompleted: true, taskScreen: "ImpatienceTask4" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require("@/assets/exercises/ImpatienceTask4.jpg")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Visualization Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~8 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🌅 Step 1: Find a Quiet Space (2 min)</Text>
            <Text style={styles.stepText}>
              Sit in a comfortable position in a quiet place where you won't be disturbed.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 2: Imagine a Peaceful Scene (3 min)</Text>
            <Text style={styles.stepText}>
              Close your eyes and visualize a calm and relaxing place, like a beach or a garden.
              Engage your senses—imagine the sound, scent, and feel of the environment.
            </Text>

            <Text style={styles.stepTitle}>💭 Step 3: Picture Yourself at Ease (3 min)</Text>
            <Text style={styles.stepText}>
              See yourself feeling patient and composed. Imagine how your body relaxes and your mind clears.
            </Text>

            <Text style={styles.stepTitle}>🎯 Final Thought</Text>
            <Text style={styles.stepText}>
              Visualization helps in training your mind for patience. Practicing this regularly can improve emotional regulation and reduce stress.
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
