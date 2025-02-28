import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types/types";
import NavigationTab from '@/components/NavigationTab';

type FatigueScreenProps = NativeStackScreenProps<RootStackParamList, "Fatigue"> & {
  route: {
    params: {
      taskCompleted?: boolean;
      taskScreen?: string;
    };
  };
};

const initialTasks = [
  { id: 1, title: "Gentle Stretching", time: "5 mins", unlocked: true, completed: false, screen: "FatigueTask1", image: require("@/assets/exercises/Fatigue.jpg") },
  { id: 2, title: "Progressive Muscle Relaxation", time: "10 mins", unlocked: false, completed: false, screen: "FatigueTask2", image: require("@/assets/exercises/FatigueTask2.jpg") },
  { id: 3, title: "Mindful Walking", time: "7 mins", unlocked: false, completed: false, screen: "FatigueTask3", image: require("@/assets/exercises/FatigueTask3.jpg") },
  { id: 4, title: "Hydration and Deep Breathing", time: "8 mins", unlocked: false, completed: false, screen: "FatigueTask4", image: require("@/assets/exercises/FatigueTask4.jpg") },
  { id: 5, title: "Power Nap", time: "10-15 mins", unlocked: false, completed: false, screen: "FatigueTask5", image: require("@/assets/exercises/FatigueTask5.jpg") },
];

export default function FatigueScreen() {
  const [tasks, setTasks] = useState(initialTasks);
  const navigation = useNavigation<FatigueScreenProps["navigation"]>();
  const route = useRoute<FatigueScreenProps["route"]>(); 

  useEffect(() => {
    if (route.params?.taskCompleted) {
      setTasks((prevTasks) => {
        const taskIndex = prevTasks.findIndex((task) => task.screen === route.params.taskScreen);
        if (taskIndex !== -1) {
          const updatedTasks = [...prevTasks];
          updatedTasks[taskIndex].completed = true;
          if (taskIndex < updatedTasks.length - 1) {
            updatedTasks[taskIndex + 1].unlocked = true;
          }
          return updatedTasks;
        }
        return prevTasks;
      });
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tasks</Text>
      <ScrollView contentContainerStyle={styles.taskList}>
        {tasks.map((task, index) => (
          <TouchableOpacity
            key={task.id}
            style={[styles.taskCard, !task.unlocked && styles.lockedTask]}
            disabled={!task.unlocked}
            onPress={() => navigation.navigate(task.screen as never)}
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
      <NavigationTab />
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