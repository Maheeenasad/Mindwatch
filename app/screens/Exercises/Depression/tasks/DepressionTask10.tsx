import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask10">;

export default function DepressionTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Positive Affirmations</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Positive affirmations are powerful statements that can help reshape negative thought patterns and boost self-esteem. Regular practice can enhance mental well-being and combat depressive symptoms.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Reflect on recurring negative thoughts you experience. Recognizing these thoughts is the first step toward transforming them.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 2: Create Personalized Affirmations</Text>
            <Text style={styles.stepText}>
              Develop positive statements that counteract your negative thoughts. Ensure they are realistic and meaningful to you. For example:
            </Text>
            <Text style={styles.bulletPoint}>• "I am resilient and can overcome challenges."</Text>
            <Text style={styles.bulletPoint}>• "I am worthy of love and happiness."</Text>
            <Text style={styles.bulletPoint}>• "My feelings are valid, and I honor them."</Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Practice Daily Recitation</Text>
            <Text style={styles.stepText}>
              Set aside time each day to recite your affirmations. This could be in front of a mirror in the morning or during a quiet moment before bed. Consistency enhances their effectiveness.
            </Text>

            <Text style={styles.stepTitle}>📓 Step 4: Incorporate Affirmations into Journaling</Text>
            <Text style={styles.stepText}>
              Write down your affirmations in a journal. This reinforces positive thinking and allows you to track your progress over time.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Adjust Affirmations as Needed</Text>
            <Text style={styles.stepText}>
              As you grow and change, your affirmations should evolve too. Regularly assess their relevance and make adjustments to align with your current goals and challenges.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Integrating positive affirmations into your daily routine can be a transformative tool in managing depression. Embrace this practice with patience and self-compassion, acknowledging your progress along the way.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/XGNCv0kUQuQ" }}
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
  bulletPoint: {
    fontSize: 16,
    color: "#333",
    marginTop: 5,
    marginLeft: 10,
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
