import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask3">;

export default function DepressionTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Coloring for Mindfulness</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Coloring for Mindfulness is an engaging activity that helps children focus on the present moment, reducing feelings of anxiety and depression. By concentrating on colors and patterns, children can achieve a state of calm and relaxation.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Select a Coloring Page</Text>
            <Text style={styles.stepText}>
              Choose a coloring page that appeals to you. You can find free printable mindfulness coloring pages online, such as those offered by Twinkl.
            </Text>

            <Text style={styles.stepTitle}>🖍️ Step 2: Gather Coloring Materials</Text>
            <Text style={styles.stepText}>
              Collect your preferred coloring tools, such as crayons, colored pencils, or markers. Ensure you have a comfortable and quiet space to work in.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Begin Coloring Mindfully</Text>
            <Text style={styles.stepText}>
              Start coloring the page, focusing on each stroke and color choice. Pay attention to how the colors make you feel and immerse yourself in the process, letting go of other thoughts.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 4: Reflect on Your Artwork</Text>
            <Text style={styles.stepText}>
              Once you've finished, take a moment to observe your artwork. Reflect on the experience and how it made you feel. Display your creation as a reminder of your mindful practice.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful coloring into your routine can provide a creative outlet for emotions and promote mental well-being. Encourage regular practice to help manage feelings of depression.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/q0RchT7UqRU" }}
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
