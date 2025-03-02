import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask12">;

export default function DepressionTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Physical Exercise Routine</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in regular physical activity is a proven method to alleviate symptoms of depression and enhance overall mental health. This routine combines aerobic exercises with strength training to boost mood and energy levels.
            </Text>

            <Text style={styles.stepTitle}>🏃‍♂️ Step 1: Warm-Up (5 minutes)</Text>
            <Text style={styles.stepText}>
              Begin with a light warm-up to prepare your body for exercise. This can include:
            </Text>
            <Text style={styles.bulletPoint}>• Gentle stretching of major muscle groups</Text>
            <Text style={styles.bulletPoint}>• Slow jogging in place</Text>
            <Text style={styles.bulletPoint}>• Arm circles and shoulder rolls</Text>

            <Text style={styles.stepTitle}>💪 Step 2: Strength Training (10 minutes)</Text>
            <Text style={styles.stepText}>
              Incorporate bodyweight exercises to build strength and improve mood:
            </Text>
            <Text style={styles.bulletPoint}>• 2 sets of 10 squats</Text>
            <Text style={styles.bulletPoint}>• 2 sets of 10 push-ups (modify as needed)</Text>
            <Text style={styles.bulletPoint}>• 2 sets of 10 lunges on each leg</Text>
            <Text style={styles.bulletPoint}>• 2 sets of 15-second planks</Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Cool Down and Stretching (5 minutes)</Text>
            <Text style={styles.stepText}>
              Conclude your routine with gentle stretching to relax muscles and prevent soreness:
            </Text>
            <Text style={styles.bulletPoint}>• Hamstring stretch</Text>
            <Text style={styles.bulletPoint}>• Quadriceps stretch</Text>
            <Text style={styles.bulletPoint}>• Shoulder and triceps stretch</Text>
            <Text style={styles.bulletPoint}>• Neck stretch</Text>

            <Text style={styles.stepTitle}>🎯 Step 4: Set Realistic Goals</Text>
            <Text style={styles.stepText}>
              Establish achievable exercise goals to maintain motivation. Start with shorter sessions and gradually increase duration and intensity as you feel more comfortable.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 5: Maintain Consistency</Text>
            <Text style={styles.stepText}>
              Aim to engage in this routine at least three times a week. Consistency is key to experiencing the mental health benefits of physical exercise.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating regular physical activity into your routine can significantly impact your mental well-being. Remember to listen to your body, start at a comfortable pace, and celebrate your progress along the way.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/sFtP0HWvu0k" }}
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
  }
});
 
