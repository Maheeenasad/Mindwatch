import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask1">;

export default function AngerTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anger.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Expressive Art Therapy</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Expressive Art Therapy is a creative process that helps individuals process emotions
              and release anger in a healthy way. By engaging in creative activities such as drawing,
              painting, or sculpting, you can express your feelings without the need for words.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              Collect art supplies such as colored pencils, paints, markers, or a sketchbook.
              Choose materials that allow you to freely express your emotions.
            </Text>

            <Text style={styles.stepTitle}>🖌 Step 2: Express Your Feelings</Text>
            <Text style={styles.stepText}>
              Start drawing or painting without thinking too much. Let your hand move freely and
              express any anger, frustration, or stress onto the canvas or paper.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 3: Reflect on Your Artwork</Text>
            <Text style={styles.stepText}>
              Once finished, take a moment to observe your creation. Identify emotions reflected
              in your work and acknowledge them. You can also write a few words about how you feel.
            </Text>

            <Text style={styles.stepTitle}>🌿 Final Thought</Text>
            <Text style={styles.stepText}>
              Expressive art therapy provides a safe and creative outlet to process emotions.
              Practicing this regularly can help manage anger and improve emotional well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/Ptu2ca2Ezp0" }} 
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