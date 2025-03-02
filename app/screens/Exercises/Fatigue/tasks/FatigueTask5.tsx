import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types";
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FatigueTask5">;

export default function FatigueTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FatigueTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Soothing Music & Rest</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Incorporating soothing music into rest periods can significantly reduce fatigue in children by promoting relaxation and improving sleep quality. This activity combines calming melodies with a restful environment to rejuvenate your child's energy levels.
            </Text>

            <Text style={styles.stepTitle}>🎵 Step 1: Select Calming Music</Text>
            <Text style={styles.stepText}>
              Choose gentle, instrumental music known for its relaxing properties. Soft piano tunes or nature sounds are excellent options. Ensure the volume is low to create a peaceful atmosphere.
            </Text>

            <Text style={styles.stepTitle}>🛏️ Step 2: Create a Comfortable Resting Space</Text>
            <Text style={styles.stepText}>
              Prepare a cozy area with soft pillows and blankets where your child can lie down comfortably. Dim the lights or use a nightlight to enhance the serene environment.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Practice Deep Breathing</Text>
            <Text style={styles.stepText}>
              Encourage your child to take slow, deep breaths in through the nose and out through the mouth. This practice helps in calming the nervous system and preparing the body for rest.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Mindful Listening</Text>
            <Text style={styles.stepText}>
              As the music plays, guide your child to focus on the different sounds and instruments. This mindful listening can divert attention from fatigue and promote mental relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly integrating soothing music and rest into your child's routine can effectively combat fatigue. This practice not only relaxes the body and mind but also fosters a sense of well-being and tranquility.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/XgxRHa26JLo" }}
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
