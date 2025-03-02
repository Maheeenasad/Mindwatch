import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask7">;

export default function AnxietyTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Self-Talk Reframing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Self-talk reframing involves identifying and challenging negative thoughts to promote a more positive and realistic mindset. This practice can help teenagers manage anxiety by transforming unhelpful thought patterns. Follow the steps below to engage in self-talk reframing.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Pay attention to moments when you feel anxious or stressed. Write down the specific thoughts you're experiencing during these times. This awareness is the first step toward change.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Challenge the Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Examine the evidence for and against your negative thoughts. Ask yourself questions like, "Is this thought based on facts or assumptions?" and "What would I say to a friend thinking this way?" This process helps in evaluating the validity of your thoughts.
            </Text>

            <Text style={styles.stepTitle}>💡 Step 3: Reframe with Positive Alternatives</Text>
            <Text style={styles.stepText}>
              Replace negative thoughts with positive, realistic ones. For example, if you think, "I'll fail this test," reframe it to, "I've prepared well, and I will do my best." This shift encourages a more balanced perspective.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Practice Regularly</Text>
            <Text style={styles.stepText}>
              Consistently practicing self-talk reframing can make it a natural part of your thought process. Set aside time each day to reflect on your thoughts and apply these steps.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Transforming negative self-talk into positive affirmations can significantly impact your emotional well-being. With regular practice, you can develop a more optimistic outlook and better manage anxiety.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/MMmlnFa6q7k" }} // All Or Nothing: Reframing Negative Thoughts
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
