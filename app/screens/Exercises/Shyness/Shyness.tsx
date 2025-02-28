import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types/types";
import NavigationTab from '@/components/NavigationTab';

type ShynessScreenProps = NativeStackScreenProps<RootStackParamList, "Shyness"> & {
  route: {
    params: {
      taskCompleted?: boolean;
      taskScreen?: string;
    };
  };
};

const initialTasks = [
  { id: 1, title: "Confidence Boosting Exercise", time: "5 mins", unlocked: true, completed: false, screen: "ShynessTask1", image: require("@/assets/exercises/Shyness.jpg") },
  { id: 2, title: "Journaling Social Wins", time: "10 mins", unlocked: false, completed: false, screen: "ShynessTask2", image: require("@/assets/exercises/ShynessTask2.jpg") },
  { id: 3, title: "Gradual Exposure Challenge", time: "7 mins", unlocked: false, completed: false, screen: "ShynessTask3", image: require("@/assets/exercises/ShynessTask3.jpg") },
  { id: 4, title: "Mindfulness for Social Anxiety", time: "8 mins", unlocked: false, completed: false, screen: "ShynessTask4", image: require("@/assets/exercises/ShynessTask4.jpg") },
  { id: 5, title: "Positive Self-Talk", time: "10 mins", unlocked: false, completed: false, screen: "ShynessTask5", image: require("@/assets/exercises/ShynessTask5.jpg") },
];

export default function ShynessScreen() {
  const [tasks, setTasks] = useState(initialTasks);
  const navigation = useNavigation<ShynessScreenProps["navigation"]>();
  const route = useRoute<ShynessScreenProps["route"]>(); 
  
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
