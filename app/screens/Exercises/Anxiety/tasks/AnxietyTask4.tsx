import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AnxietyTask4">;

export default function AnxietyTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/AnxietyTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Simple Movement Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in simple movement exercises can help children manage anxiety by releasing built-up energy and promoting relaxation. These activities are designed to be fun and accessible, encouraging physical activity as a natural way to alleviate stress.
            </Text>

            <Text style={styles.stepTitle}>🤸‍♂️ Step 1: Jumping Jacks</Text>
            <Text style={styles.stepText}>
              Have your child stand with their feet together and arms at their sides. Instruct them to jump while spreading their legs shoulder-width apart and raising their arms overhead, then return to the starting position. Repeat for 1-2 minutes to elevate heart rate and release energy.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 2: Yoga Poses</Text>
            <Text style={styles.stepText}>
              Introduce simple yoga poses such as Child's Pose and Cat-Cow to promote relaxation and flexibility. These poses can help calm the nervous system and reduce anxiety.
            </Text>

            <Text style={styles.stepTitle}>🏃‍♀️ Step 3: Silly Dance Party</Text>
            <Text style={styles.stepText}>
              Play your child's favorite upbeat music and encourage them to dance freely. This activity allows for self-expression and can significantly boost mood while reducing anxiety.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 4: Deep Breathing with Movement</Text>
            <Text style={styles.stepText}>
              Teach your child to combine deep breathing with gentle movements. For example, while standing, they can inhale deeply while raising their arms above their head and exhale slowly while lowering them. Repeat this motion several times to promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating simple movement exercises into your child's daily routine can be an effective way to manage anxiety. These activities not only provide physical benefits but also empower children to use movement as a tool for emotional regulation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/tG_M1UfvIv0" }} // Children's Mindful Movement for Stressful Times
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
