import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask5">;

export default function DepressionTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask5.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Breathing & Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Breathing and relaxation exercises are effective tools to help children manage stress and alleviate feelings of depression. By practicing controlled breathing techniques, children can achieve a state of calm and improve their emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 1: Introduce Deep Breathing</Text>
            <Text style={styles.stepText}>
              Explain to your child that deep breathing can help them feel more relaxed. Demonstrate by taking a slow, deep breath in through your nose, allowing your belly to rise, and then exhaling slowly through your mouth.
            </Text>

            <Text style={styles.stepTitle}>🐻 Step 2: Practice "Teddy Bear Breathing"</Text>
            <Text style={styles.stepText}>
              Have your child lie down and place a favorite stuffed animal on their belly. Instruct them to breathe in deeply through the nose, watching the stuffed animal rise, and then breathe out through the mouth, observing it fall. This visual can make deep breathing more engaging.
            </Text>

            <Text style={styles.stepTitle}>🕯️ Step 3: "Candle and Flower" Technique</Text>
            <Text style={styles.stepText}>
              Ask your child to imagine holding a flower in one hand and a candle in the other. Instruct them to breathe in through the nose to "smell the flower" and then breathe out through the mouth to "blow out the candle." Repeat this several times to promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌈 Step 4: Guided Visualization</Text>
            <Text style={styles.stepText}>
              Encourage your child to close their eyes and imagine a peaceful place, like a beach or a garden. Guide them to take deep breaths while visualizing this calming scene, helping to reduce anxiety and improve mood.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of breathing and relaxation techniques can empower children to manage their emotions effectively. Incorporate these exercises into daily routines to foster resilience and enhance mental health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/xkHaUI5kAyA" }}
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
