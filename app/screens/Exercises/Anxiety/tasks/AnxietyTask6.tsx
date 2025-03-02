import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask6">;

export default function AnxietyTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Walking</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful walking is a practice that combines the physical benefits of walking with mindfulness techniques to help reduce anxiety and improve overall well-being. By focusing on the present moment and your surroundings, you can cultivate a sense of calm and clarity. Follow the steps below to engage in a mindful walking exercise.
            </Text>

            <Text style={styles.stepTitle}>👟 Step 1: Choose a Peaceful Location</Text>
            <Text style={styles.stepText}>
              Find a quiet and safe place where you can walk undisturbed for about 20 minutes. This could be a park, a quiet neighborhood, or even a spacious indoor area.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 2: Set Your Intention</Text>
            <Text style={styles.stepText}>
              Before you begin, take a moment to set an intention for your walk. This could be to clear your mind, observe your surroundings, or simply enjoy the act of walking.
            </Text>

            <Text style={styles.stepTitle}>🚶‍♂️ Step 3: Begin Walking Slowly</Text>
            <Text style={styles.stepText}>
              Start walking at a slow, comfortable pace. Pay attention to the sensation of your feet touching the ground, the movement of your legs, and the rhythm of your breath.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              As you walk, bring awareness to your senses:
              {"\n"}- **Sight**: Observe the colors, shapes, and movements around you.
              {"\n"}- **Sound**: Listen to the sounds in your environment, whether it's birds chirping, leaves rustling, or distant traffic.
              {"\n"}- **Smell**: Notice any scents in the air, like fresh grass or blooming flowers.
              {"\n"}- **Touch**: Feel the texture of the ground beneath your feet and the sensation of the air on your skin.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 5: Acknowledge Thoughts and Emotions</Text>
            <Text style={styles.stepText}>
              If your mind starts to wander, gently acknowledge any thoughts or emotions that arise without judgment, then redirect your focus back to the act of walking and your sensory experiences.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful walking into your routine can be a valuable tool for managing anxiety. It encourages you to connect with the present moment and fosters a sense of peace and relaxation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/ElHCp33OIOo" }} // Mindful Walking Activity
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
