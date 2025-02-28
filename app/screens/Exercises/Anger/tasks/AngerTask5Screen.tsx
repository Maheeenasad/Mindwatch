import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask5">;

export default function AngerTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Controlled Breathing Practice</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Controlled breathing is a scientifically proven technique to regulate emotions, reduce stress, and calm the nervous system. This practice can help you regain control during moments of anger and frustration.
            </Text>

            <Text style={styles.stepTitle}>🪑 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Sit in a quiet space with a straight back, or lie down in a comfortable position. Ensure your body is fully relaxed and free from distractions.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Start with a Cleansing Breath</Text>
            <Text style={styles.stepText}>
              Take a deep breath in through your nose, hold for a few seconds, and exhale slowly through your mouth. This will prepare your body for a more focused breathing exercise.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 3: The 4-7-8 Breathing Technique</Text>
            <Text style={styles.stepText}>
              - Inhale deeply through your nose for **4 seconds**.
              - Hold your breath for **7 seconds**.
              - Exhale slowly and completely through your mouth for **8 seconds**.
              - Repeat this cycle **4 to 5 times**.
            </Text>

            <Text style={styles.stepTitle}>😌 Step 4: Box Breathing for Grounding</Text>
            <Text style={styles.stepText}>
              - Inhale for **4 seconds**.
              - Hold for **4 seconds**.
              - Exhale for **4 seconds**.
              - Hold again for **4 seconds** before repeating.
              - Continue this pattern until you feel more in control.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Observe Your Body’s Response</Text>
            <Text style={styles.stepText}>
              Pay attention to the physical changes in your body. Notice how your muscles relax, your heartbeat slows down, and your mind becomes clearer. Acknowledge this shift without judgment.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular controlled breathing exercises can help you develop better emotional regulation. Practicing these techniques daily will equip you with a powerful tool to manage anger effectively.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/sJ04nsiz_M0" }} // Relevant controlled breathing exercise video
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
