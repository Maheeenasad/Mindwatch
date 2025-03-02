import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask15">;

export default function DepressionTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Outdoor Walk & Reflection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in outdoor walks combined with reflective practices can significantly enhance mental well-being and alleviate depressive symptoms. This exercise encourages you to connect with nature while fostering introspection.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 1: Choose a Natural Setting</Text>
            <Text style={styles.stepText}>
              Select a nearby park, trail, or any natural environment where you feel comfortable and safe. Being in nature has been shown to improve mood and reduce stress.
            </Text>

            <Text style={styles.stepTitle}>🕒 Step 2: Schedule Your Walk</Text>
            <Text style={styles.stepText}>
              Allocate 20-30 minutes for this activity. Consistency is key, so aim to incorporate this into your routine several times a week.
            </Text>

            <Text style={styles.stepTitle}>🚶‍♀️ Step 3: Engage in Mindful Walking</Text>
            <Text style={styles.stepText}>
              As you walk, pay attention to the sensations: the ground beneath your feet, the rustle of leaves, the scent of the air. Mindful walking helps ground you in the present moment.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 4: Reflect on Your Thoughts</Text>
            <Text style={styles.stepText}>
              Use this time to observe your thoughts and feelings without judgment. Consider bringing a small notebook to jot down any insights or reflections that arise.
            </Text>

            <Text style={styles.stepTitle}>🌞 Step 5: Conclude with Gratitude</Text>
            <Text style={styles.stepText}>
              At the end of your walk, take a moment to acknowledge something you're grateful for. This practice can shift focus from negative to positive aspects of your life.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular outdoor walks combined with reflection can be a powerful tool in managing depression. Embrace this time as a personal retreat to nurture your mind and body.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/zJX46ungBm4" }}
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
