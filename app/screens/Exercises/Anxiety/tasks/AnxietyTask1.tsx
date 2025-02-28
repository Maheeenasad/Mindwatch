import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; // Adjust path if needed
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask1">;

export default function AnxietyTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anxiety.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Grounding Technique</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Grounding techniques help children manage anxiety by focusing their attention on the present moment. These exercises engage the senses, promoting mindfulness and reducing overwhelming feelings.
            </Text>

            <Text style={styles.stepTitle}>👀 Step 1: 5 Things You Can See</Text>
            <Text style={styles.stepText}>
              Encourage your child to look around and identify five different things they can see. This could be a favorite toy, a picture on the wall, or a tree outside.
            </Text>

            <Text style={styles.stepTitle}>✋ Step 2: 4 Things You Can Touch</Text>
            <Text style={styles.stepText}>
              Ask them to touch four different objects and describe their textures. For example, a soft blanket, a smooth table surface, or a fuzzy stuffed animal.
            </Text>

            <Text style={styles.stepTitle}>👂 Step 3: 3 Things You Can Hear</Text>
            <Text style={styles.stepText}>
              Have your child close their eyes and focus on three sounds they can hear. It might be the chirping of birds, the hum of a fan, or distant traffic noises.
            </Text>

            <Text style={styles.stepTitle}>👃 Step 4: 2 Things You Can Smell</Text>
            <Text style={styles.stepText}>
              Encourage them to identify two distinct smells. This could be the scent of their soap, the aroma of food cooking, or the fresh smell of a flower.
            </Text>

            <Text style={styles.stepTitle}>👅 Step 5: 1 Thing You Can Taste</Text>
            <Text style={styles.stepText}>
              Finally, ask your child to focus on one thing they can taste. It might be the lingering taste of toothpaste or a sip of water.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Practicing this 5-4-3-2-1 grounding technique regularly can help children manage anxiety by bringing their focus to the present moment, utilizing their senses to foster a sense of calm and control.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/5YtnpPPnqaY" }} // Grounding Exercises For Anxiety And Other Big Emotions
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
