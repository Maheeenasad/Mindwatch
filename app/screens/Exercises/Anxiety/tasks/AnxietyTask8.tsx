import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask8">;

export default function AnxietyTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Nature Sounds</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with nature sounds can significantly reduce anxiety and promote relaxation. Studies have shown that listening to natural environments helps lower stress levels and calms the mind. Follow the steps below to incorporate this practice into your routine.
            </Text>

            <Text style={styles.stepTitle}>🔊 Step 1: Choose Your Nature Sound</Text>
            <Text style={styles.stepText}>
              Select a nature sound that resonates with you, such as rainfall, ocean waves, or forest ambiance. You can find these sounds on various apps, websites, or nature sound playlists.
            </Text>

            <Text style={styles.stepTitle}>📍 Step 2: Find a Comfortable Space</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a quiet and comfortable area where you won't be disturbed. Using headphones can enhance the immersive experience.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Focus on the Sounds</Text>
            <Text style={styles.stepText}>
              Close your eyes and direct your attention to the nature sounds. Allow your mind to wander through the natural setting, visualizing the environment associated with the sounds.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Practice Mindful Breathing</Text>
            <Text style={styles.stepText}>
              Inhale deeply through your nose, hold for a moment, and exhale slowly through your mouth. Synchronize your breathing with the rhythm of the sounds to deepen relaxation.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 5: Incorporate into Daily Routine</Text>
            <Text style={styles.stepText}>
              Dedicate 10 minutes each day to this practice, whether in the morning to start your day calmly or in the evening to unwind. Consistency will enhance the benefits over time.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly immersing yourself in nature sounds can be a simple yet effective way to manage anxiety. This practice offers a moment of peace and connection to the natural world, fostering a sense of calm and well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/5lN4iXuxONA" }} // Stress Relief Sounds, White Noise, Relaxing Nature
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
