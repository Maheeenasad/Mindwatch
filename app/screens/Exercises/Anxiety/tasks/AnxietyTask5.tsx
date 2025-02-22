import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Anxiety">;

export default function AnxietyTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  const handleCompleteTask = () => {
    navigation.replace("Anxiety", { taskCompleted: true, taskScreen: "AnxietyTask5" });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/anxiety.png")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Expressive Writing for Anxiety</Text>
  
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>
  
          <View style={styles.stepsContainer}>
            <Text style={styles.stepTitle}>✍️ Step 1: Set a Timer</Text>
            <Text style={styles.stepText}>
              Set a timer for 10 minutes and find a quiet space where you won't be disturbed.
            </Text>
  
            <Text style={styles.stepTitle}>📝 Step 2: Write Freely</Text>
            <Text style={styles.stepText}>
              Write about whatever is making you anxious. Don't worry about grammar or structure—just let your thoughts flow.
            </Text>
  
            <Text style={styles.stepTitle}>💭 Step 3: Express Your Emotions</Text>
            <Text style={styles.stepText}>
              Allow yourself to fully express your feelings. Write about how the situation makes you feel and why.
            </Text>
  
            <Text style={styles.stepTitle}>🔄 Step 4: Reflect and Reframe</Text>
            <Text style={styles.stepText}>
              Once the timer ends, read what you wrote. Identify any patterns, and try to reframe negative thoughts in a more positive or neutral way.
            </Text>
  
            <Text style={styles.stepTitle}>💡 Final Thought</Text>
            <Text style={styles.stepText}>
              Expressive writing helps process emotions and gain insight into anxious thoughts. Regular practice can improve emotional well-being.
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
