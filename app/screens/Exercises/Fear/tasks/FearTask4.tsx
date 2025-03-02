import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask4">;

export default function FearTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Face a Tiny Fear</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Gradual exposure to fears can help children build confidence and reduce anxiety. This activity encourages children to face a small fear in a controlled and supportive environment.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 1: Identify a Small Fear</Text>
            <Text style={styles.stepText}>
              Sit down with the child and discuss things that make them slightly uneasy but are not overwhelming. Choose one minor fear to address, such as touching a harmless insect or speaking up in class.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Create a Fear Ladder</Text>
            <Text style={styles.stepText}>
              Help the child break down the chosen fear into manageable steps, starting from the least scary to the most. This "fear ladder" will serve as a guide for gradual exposure.
            </Text>

            <Text style={styles.stepTitle}>🚶 Step 3: Take the First Step</Text>
            <Text style={styles.stepText}>
              Begin with the least intimidating step on the ladder. Provide encouragement and support as the child faces this small challenge, ensuring they feel safe throughout the process.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 4: Reflect and Reward</Text>
            <Text style={styles.stepText}>
              After completing the step, discuss the experience with the child. Celebrate their bravery and consider a small reward to reinforce positive behavior.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Progress Gradually</Text>
            <Text style={styles.stepText}>
              Over time, continue to work through the steps on the fear ladder at the child's pace. Patience and consistent support are key to helping them overcome their fears.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Facing fears in small, controlled steps empowers children to build resilience and confidence. Celebrate each victory, no matter how small, to encourage continued progress.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/xQiE_V9-5ac" }} // How to Help Children Manage Fear | Child Mind Institute
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
