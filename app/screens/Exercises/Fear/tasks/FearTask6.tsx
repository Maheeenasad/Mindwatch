import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask6">;

export default function FearTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Exposure Therapy (Mild)</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Exposure therapy is a technique that helps individuals confront and reduce their fears by gradually facing them in a controlled manner. This exercise introduces a mild form of exposure therapy suitable for teenagers aiming to manage their anxieties.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Your Fear</Text>
            <Text style={styles.stepText}>
              Reflect on situations or objects that trigger mild to moderate anxiety. Choose one specific fear to address, ensuring it's manageable for gradual exposure.
            </Text>

            <Text style={styles.stepTitle}>📊 Step 2: Create a Fear Hierarchy</Text>
            <Text style={styles.stepText}>
              List scenarios related to your chosen fear, ranking them from least to most anxiety-provoking. This hierarchy will guide your exposure process.
            </Text>

            <Text style={styles.stepTitle}>🚶 Step 3: Begin Gradual Exposure</Text>
            <Text style={styles.stepText}>
              Start with the least intimidating scenario on your hierarchy. Engage with this situation until your anxiety decreases. Repeat as necessary before progressing to more challenging scenarios.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Employ Coping Strategies</Text>
            <Text style={styles.stepText}>
              Utilize relaxation techniques, such as deep breathing or mindfulness, during exposure to manage anxiety.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on Your Progress</Text>
            <Text style={styles.stepText}>
              After each exposure session, journal your experiences, noting any changes in anxiety levels and personal insights.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Gradual exposure to fears can diminish their power over time, fostering resilience and confidence. Celebrate your progress, no matter how small, as each step brings you closer to overcoming your anxieties.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/hpii4Uu4Fjo" }} // Helping kids with anxiety through exposure therapy
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
