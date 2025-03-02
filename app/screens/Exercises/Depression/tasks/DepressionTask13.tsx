import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask13">;

export default function DepressionTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cognitive Restructuring</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Cognitive Restructuring is a therapeutic technique aimed at identifying and challenging negative thought patterns to improve mental health. By reframing unhelpful thoughts, individuals can alleviate depressive symptoms and foster a more positive outlook.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Reflect on recent situations where you felt distressed. Write down the specific thoughts that crossed your mind during these moments.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Challenge These Thoughts</Text>
            <Text style={styles.stepText}>
              Examine the evidence supporting and contradicting your negative thoughts. Consider alternative perspectives and assess their validity.
            </Text>

            <Text style={styles.stepTitle}>💡 Step 3: Reframe with Positive Alternatives</Text>
            <Text style={styles.stepText}>
              Replace negative thoughts with balanced, constructive alternatives. For instance, change "I'm a failure" to "I faced a setback, but I can learn and improve."
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Practice Regularly</Text>
            <Text style={styles.stepText}>
              Consistently apply this technique to new situations. Over time, it will become a natural part of your thought process, promoting resilience against depressive tendencies.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 5: Seek Professional Guidance</Text>
            <Text style={styles.stepText}>
              Consider consulting a mental health professional trained in Cognitive Behavioral Therapy (CBT) to gain personalized insights and support.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Transforming negative thought patterns is a gradual process. Be patient with yourself and acknowledge each step forward as progress toward improved mental well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/orPPdMvaNGA" }}
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
