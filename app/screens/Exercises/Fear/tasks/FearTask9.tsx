import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask9">;

export default function FearTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Fear.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Fear Hierarchy Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The Fear Hierarchy Exercise is a cognitive-behavioral technique designed to help individuals confront and gradually overcome their fears. By systematically exposing oneself to feared situations, starting from the least to the most anxiety-provoking, individuals can reduce their overall anxiety and build confidence.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Your Fears</Text>
            <Text style={styles.stepText}>
              Begin by listing situations, objects, or thoughts that trigger anxiety. Be specific and comprehensive in your list. For example:
            </Text>
            <Text style={styles.exampleText}>- Speaking up in a meeting</Text>
            <Text style={styles.exampleText}>- Attending a social gathering alone</Text>
            <Text style={styles.exampleText}>- Flying in an airplane</Text>

            <Text style={styles.stepTitle}>📊 Step 2: Rate Each Fear</Text>
            <Text style={styles.stepText}>
              Assign a distress rating to each item on your list using the Subjective Units of Distress Scale (SUDS), ranging from 0 (no anxiety) to 100 (extreme anxiety). For example:
            </Text>
            <Text style={styles.exampleText}>- Speaking up in a meeting: 60</Text>
            <Text style={styles.exampleText}>- Attending a social gathering alone: 75</Text>
            <Text style={styles.exampleText}>- Flying in an airplane: 90</Text>

            <Text style={styles.stepTitle}>🗂️ Step 3: Organize Into a Hierarchy</Text>
            <Text style={styles.stepText}>
              Arrange your list from the lowest to the highest SUDS rating. This sequence will guide your gradual exposure process.
            </Text>

            <Text style={styles.stepTitle}>🚶‍♂️ Step 4: Begin Gradual Exposure</Text>
            <Text style={styles.stepText}>
              Start with the least anxiety-provoking situation. Engage in the activity repeatedly until your anxiety decreases significantly. Then, proceed to the next item on your hierarchy. Ensure each exposure is prolonged and repetitive, focusing on the anxiety without employing safety behaviors.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 5: Practice Relaxation Techniques</Text>
            <Text style={styles.stepText}>
              Incorporate relaxation strategies, such as deep breathing or mindfulness, during and after exposures to manage anxiety effectively.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 6: Reflect and Document Progress</Text>
            <Text style={styles.stepText}>
              Keep a journal detailing each exposure, your anxiety levels, and any observations. This practice helps track progress and identify patterns.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 7: Repeat and Progress</Text>
            <Text style={styles.stepText}>
              Continue the exposure process, moving up your hierarchy as you become more comfortable with each level. Consistency and patience are key to overcoming fears.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Facing fears through a structured hierarchy can significantly reduce anxiety over time. Celebrate small victories and seek support when needed to maintain motivation and progress.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/0oPRqQ6ns18" }} // Using a Fear Hierarchy
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
  exampleText: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    lineHeight: 22,
    marginLeft: 10,
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