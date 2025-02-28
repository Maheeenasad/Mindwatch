import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity,StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DepressionTask1Screen() {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserEmail = async () => {
      const email = await AsyncStorage.getItem("userEmail");
      setUserEmail(email);
    };
    fetchUserEmail();
  }, []);

  const handleCompleteTask = async () => {
    if (userEmail) {
      const tasks = await AsyncStorage.getItem(`tasks_${userEmail}`);
      if (tasks) {
        let updatedTasks = JSON.parse(tasks);
        const taskIndex = updatedTasks.findIndex((task: any) => task.screen === "DepressionTask1");

        if (taskIndex !== -1) {
          updatedTasks[taskIndex].completed = true;
          if (taskIndex < updatedTasks.length - 1) {
            updatedTasks[taskIndex + 1].unlocked = true;
          }
          await AsyncStorage.setItem(`tasks_${userEmail}`, JSON.stringify(updatedTasks));
        }
      }
      navigation.replace("Depression", { taskCompleted: true, taskScreen: "DepressionTask1" });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Depression.jpg")} style={styles.image} />
        <Text style={styles.title}>Morning Walk</Text>
        <TouchableOpacity style={styles.completeButton} onPress={handleCompleteTask}>
          <Text style={styles.completeButtonText}>Complete Task</Text>
        </TouchableOpacity>
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
    // width: width,
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