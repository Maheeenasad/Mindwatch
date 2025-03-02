import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask2">;

export default function DepressionTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gentle Movement Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Gentle movement exercises can help alleviate feelings of depression in children by promoting relaxation and enhancing mood. These activities encourage physical engagement in a soothing manner, making them suitable for children experiencing low energy or sadness.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Mindful Stretching</Text>
            <Text style={styles.stepText}>
              Begin with simple stretches to awaken the body. Encourage your child to reach their arms overhead, gently twist their torso, and touch their toes. Focus on slow, deliberate movements and deep breathing to foster mindfulness.
            </Text>

            <Text style={styles.stepTitle}>🐾 Step 2: Animal Movements</Text>
            <Text style={styles.stepText}>
              Incorporate playful movements by imitating animals. For example, hop like a kangaroo, slither like a snake, or waddle like a penguin. This not only makes the exercise fun but also engages different muscle groups and stimulates the imagination.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Deep Breathing with Movement</Text>
            <Text style={styles.stepText}>
              Combine deep breathing exercises with gentle movements. Have your child inhale deeply while raising their arms and exhale slowly while lowering them. This practice can help reduce anxiety and improve emotional regulation.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular participation in gentle movement exercises can provide children with a healthy outlet for emotions and contribute to overall well-being. Encourage your child to engage in these activities daily to help manage feelings of depression.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/KeGybW3zuxo" }}
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
