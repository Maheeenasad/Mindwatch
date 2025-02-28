import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask5">;

export default function AnxietyTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anxiety.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Journaling for Worries</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Journaling is a powerful tool for teenagers to process and manage anxiety. By putting thoughts and feelings onto paper, you can gain clarity, reduce stress, and develop effective coping strategies. This exercise will guide you through structured journaling techniques to address your worries.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Your Worries</Text>
            <Text style={styles.stepText}>
              Take a moment to reflect on what's been bothering you lately. Write down a list of your current worries, no matter how big or small. This helps in acknowledging and externalizing your concerns.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Explore the Details</Text>
            <Text style={styles.stepText}>
              Choose one worry from your list. Describe it in detail: What triggers this worry? How does it make you feel physically and emotionally? Understanding the specifics can demystify the fear and make it more manageable.
            </Text>

            <Text style={styles.stepTitle}>💡 Step 3: Challenge Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Analyze the worry you've detailed. Ask yourself: Is there evidence supporting this concern? Could there be another perspective? Challenging negative thoughts can reduce their impact on your emotions.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 4: Develop a Coping Plan</Text>
            <Text style={styles.stepText}>
              For the worry you've explored, brainstorm possible solutions or coping strategies. Write down steps you can take to address or alleviate this concern. Having a plan can empower you and reduce feelings of helplessness.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 5: Reflect on Positive Aspects</Text>
            <Text style={styles.stepText}>
              End your journaling session by noting down things you're grateful for or positive experiences from your day. Focusing on positivity can balance out anxious thoughts and improve your overall mood.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular journaling can be a valuable habit in managing anxiety. It provides a safe space to express yourself, reflect on your experiences, and develop resilience against stressors.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/66GNd6DbjbI" }} // Journaling Techniques to Track Your Daily Anxiety
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
