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

// Define navigation prop type
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Impatience">;

export default function ImpatienceTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Impatience", { taskCompleted: true, taskScreen: "ImpatienceTask3" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image
          source={require("@/assets/exercises/ImpatienceTask3.jpg")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Slow and Steady Walk</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~7 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>🚶‍♂️ Step 1: Find a Quiet Path (2 min)</Text>
            <Text style={styles.stepText}>
              Choose a peaceful place to walk, whether indoors or outdoors. Set a slow, steady pace.
            </Text>

            <Text style={styles.stepTitle}>🌿 Step 2: Focus on Each Step (3 min)</Text>
            <Text style={styles.stepText}>
              Walk mindfully, paying attention to the sensation of your feet touching the ground. Breathe deeply.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Embrace the Present (2 min)</Text>
            <Text style={styles.stepText}>
              Avoid rushing. Absorb your surroundings, listen to sounds, and feel the rhythm of your body moving.
            </Text>

            <Text style={styles.stepTitle}>🎯 Final Thought</Text>
            <Text style={styles.stepText}>
              Walking mindfully helps cultivate patience. With practice, you’ll feel more grounded and less rushed in daily life.
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
