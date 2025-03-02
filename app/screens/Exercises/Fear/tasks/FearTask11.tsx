import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask11">;

export default function FearTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Controlled Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Controlled breathing, also known as diaphragmatic or deep breathing, is a relaxation technique that can help manage anxiety and reduce stress. By focusing on your breath, you can activate your body's relaxation response, promoting a sense of calm.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a comfortable position. Ensure your back is straight, and your shoulders are relaxed. Close your eyes to minimize distractions.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Place Your Hands</Text>
            <Text style={styles.stepText}>
              Place one hand on your chest and the other on your abdomen. This will help you monitor your breathing and ensure you're engaging your diaphragm.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 3: Inhale Deeply</Text>
            <Text style={styles.stepText}>
              Breathe in slowly through your nose for a count of four, allowing your abdomen to rise while keeping your chest relatively still. This indicates that you're using your diaphragm effectively.
            </Text>

            <Text style={styles.stepTitle}>🛑 Step 4: Hold Your Breath</Text>
            <Text style={styles.stepText}>
              Gently hold your breath for a count of four. This brief pause allows oxygen to circulate throughout your body.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 5: Exhale Slowly</Text>
            <Text style={styles.stepText}>
              Exhale slowly through your mouth for a count of six, allowing your abdomen to fall. Ensure the exhalation is smooth and controlled.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 6: Repeat the Cycle</Text>
            <Text style={styles.stepText}>
              Repeat steps 3 to 5 for 5 to 10 minutes. Focus on the rhythm of your breath and the sensation of relaxation with each cycle.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 7: Practice Regularly</Text>
            <Text style={styles.stepText}>
              Incorporate controlled breathing into your daily routine, practicing at least once or twice a day. Regular practice can enhance your ability to manage stress and anxiety effectively.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 8: Reflect on Your Experience</Text>
            <Text style={styles.stepText}>
              After each session, take a moment to reflect on how you feel. Notice any changes in your anxiety levels or overall mood, and consider journaling your observations to track progress.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Controlled breathing is a simple yet powerful tool to manage anxiety and promote relaxation. With consistent practice, it can become an integral part of your coping strategy for dealing with fear and stress.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/tEmt1Znux58" }} // Box Breathing Relaxation Technique
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

