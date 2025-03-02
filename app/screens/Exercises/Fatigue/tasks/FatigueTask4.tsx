import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask4">;

export default function FatigueTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Hydration Break</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Staying hydrated is essential for maintaining energy levels and preventing fatigue in children. This hydration break encourages regular water intake through a fun and engaging activity.
            </Text>

            <Text style={styles.stepTitle}>🚰 Step 1: Create a Fun Water Bottle</Text>
            <Text style={styles.stepText}>
              Provide your child with a reusable water bottle and some stickers or markers. Encourage them to decorate their bottle, making it a personal and enjoyable accessory. This personalization can motivate them to drink more water throughout the day.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 2: Set Hydration Reminders</Text>
            <Text style={styles.stepText}>
              Establish regular intervals for hydration breaks. Use a timer or a fun alarm sound to remind your child to take a sip of water every hour. Consistent hydration helps maintain optimal energy levels and reduces the risk of fatigue.
            </Text>

            <Text style={styles.stepTitle}>🍓 Step 3: Infuse Water with Natural Flavors</Text>
            <Text style={styles.stepText}>
              Add slices of fruits like strawberries, lemons, or cucumbers to the water to enhance its taste naturally. This not only makes drinking water more enjoyable but also provides additional nutrients.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 4: Hydration Chart Challenge</Text>
            <Text style={styles.stepText}>
              Create a simple chart to track daily water intake. For each glass of water consumed, your child can place a sticker or draw a star on the chart. Set achievable goals, and celebrate when they reach them to encourage continued hydration habits.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating regular hydration breaks into your child's routine can significantly impact their energy levels and overall well-being. Making hydration fun and engaging fosters healthy habits that can last a lifetime.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/22qXqKm1UZ8" }}
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
          </View>

          <TouchableOpacity style={styles.completeButton} onPress={() => navigation.goBack()}>
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
  description: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    lineHeight: 22,
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
  videoContainer: {
    marginTop: 20,
    width: "100%",
    height: 250,
    borderRadius: 10,
    overflow: "hidden",
  },
  video: {
    width: "100%",
    height: "100%",
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
