import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


import JournalingScreen from "../screens/Journals/JournalingScreen";


const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      initialRouteName="MoodTracking"
      screenOptions={({ route }) => ({
        tabBarStyle: { height: 60, backgroundColor: "blue" },
        tabBarIcon: ({ color, size }) => {
          const icons: { [key: string]: keyof typeof Ionicons.glyphMap } = {
            MoodTracking: "happy",
            Journaling: "book",
            Breathing: "leaf",
            Meditation: "medkit",
          };

          const iconName = icons[route.name] || "help-circle";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      })}
    >
     
      <Tab.Screen
        name="Journaling"
        component={JournalingScreen}
        options={{ title: "Journal" }}
      />
     
    </Tab.Navigator>
  );
}
