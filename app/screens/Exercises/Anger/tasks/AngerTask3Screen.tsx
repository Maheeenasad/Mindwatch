import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask3">;

export default function AngerTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AngerTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Physical Release Activity</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Physical Release Activities are designed to help you channel and dissipate anger through intentional physical movements. Engaging in these activities can reduce tension, promote relaxation, and improve emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>🥊 Step 1: Prepare a Safe Space</Text>
            <Text style={styles.stepText}>
              Find an area where you can move freely without obstacles. Ensure the space is safe for activities like punching, kicking, or vigorous movements.
            </Text>

            <Text style={styles.stepTitle}>💪 Step 2: Engage in Vigorous Exercise</Text>
            <Text style={styles.stepText}>
              Choose a physical activity that appeals to you, such as:
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Boxing or Kickboxing:</Text> Use a punching bag or air punches to release energy.
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Dancing:</Text> Put on your favorite music and let your body move freely.
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Running or Jogging:</Text> A brisk run can help dissipate built-up tension.
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Jumping Rope:</Text> This high-intensity activity requires focus and coordination.
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Cardio Drumming:</Text> Use drumsticks to rhythmically hit an exercise ball, combining music and movement for stress relief.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 3: Cool Down and Reflect</Text>
            <Text style={styles.stepText}>
              After the activity, take a few minutes to cool down:
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Deep Breathing:</Text> Inhale deeply through your nose, hold for a moment, and exhale slowly through your mouth.
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Stretching:</Text> Gently stretch your muscles to release any remaining tension.
              {"\n"}- <Text style={{ fontWeight: "bold" }}>Reflection:</Text> Sit quietly and observe how your body feels after releasing the physical energy associated with anger.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly incorporating Physical Release Activities into your routine can provide a healthy outlet for anger and stress, leading to improved emotional balance and physical health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/bPu87cLEHac" }}
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

