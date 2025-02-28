import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../../../../types/types";

const API_URL = "http://192.168.100.8:5000"; // Replace with your actual backend URL

const initialTasks = [
  { id: 1, title: "Deep Breathing Exercise", time: "5 mins", unlocked: true, completed: false, screen: "FearTask1", image: require("@/assets/exercises/Fear.jpg") },
  { id: 2, title: "Positive Visualization", time: "10 mins", unlocked: false, completed: false, screen: "FearTask2", image: require("@/assets/exercises/FearTask2.jpg") },
  { id: 3, title: "Grounding Techniques", time: "7 mins", unlocked: false, completed: false, screen: "FearTask3", image: require("@/assets/exercises/FearTask3.jpg") },
  { id: 4, title: "Affirmations Practice", time: "8 mins", unlocked: false, completed: false, screen: "FearTask4", image: require("@/assets/exercises/FearTask4.jpg") },
];

export default function FearScreen() {
  const [tasks, setTasks] = useState(initialTasks);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      const token = await AsyncStorage.getItem("token");
      if (!token) return;

      try {
        const response = await fetch(`${API_URL}/completed-tasks`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const completedTasks = await response.json();

        setTasks((prevTasks) =>
          prevTasks.map((task, index) => {
            const isCompleted = completedTasks.some((t: { taskScreen: string }) => t.taskScreen === task.screen);
            return {
              ...task,
              completed: isCompleted,
              unlocked: index === 0 || prevTasks[index - 1].completed, // Unlock next task if previous is completed
            };
          })
        );
      } catch (error) {
        console.error("Error fetching completed tasks:", error);
      }
    };

    fetchCompletedTasks();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks</Text>
      <ScrollView contentContainerStyle={styles.taskList}>
        {tasks.map((task, index) => (
          <TouchableOpacity
            key={task.id}
            style={[styles.taskCard, !task.unlocked && styles.lockedTask]}
            disabled={!task.unlocked}
            onPress={() => navigation.navigate(task.screen)}
          >
            <Image source={task.image} style={styles.taskImage} />
            <View style={styles.taskInfo}>
              <Text style={[styles.taskTitle, !task.unlocked && styles.lockedText]}>
                {index + 1}. {task.title}
              </Text>
              <View style={styles.taskTime}>
                <Ionicons name="time-outline" size={14} color={task.unlocked ? "#000" : "#aaa"} />
                <Text style={[styles.taskDuration, !task.unlocked && styles.lockedText]}>{task.time}</Text>
              </View>
            </View>
            {task.completed ? (
              <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            ) : (
              <Ionicons name={task.unlocked ? "radio-button-off" : "lock-closed"} size={24} color="#aaa" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 15,
  },
  taskList: {
    paddingBottom: 40,
  },
  taskCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  lockedTask: {
    backgroundColor: "#F0F0F0",
  },
  taskImage: {
    width: 65,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  taskTime: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  taskDuration: {
    marginLeft: 4,
    fontSize: 14,
    color: "#000",
  },
  lockedText: {
    color: "#aaa",
  },
});