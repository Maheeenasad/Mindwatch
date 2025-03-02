import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask6">;

export default function DepressionTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Depression.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Reflective Journaling</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Reflective journaling is a powerful tool for teenagers to explore their thoughts and emotions, fostering self-awareness and emotional growth. By dedicating time to write about personal experiences, teens can gain insights into their feelings and develop coping strategies for depression.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Choose a Comfortable Setting</Text>
            <Text style={styles.stepText}>
              Find a quiet and comfortable place where you can write without interruptions. This could be a cozy corner in your room or a peaceful spot outdoors.
            </Text>

            <Text style={styles.stepTitle}>📓 Step 2: Select Your Journaling Medium</Text>
            <Text style={styles.stepText}>
              Decide whether you prefer writing in a physical notebook or using a digital platform. Choose the medium that feels most natural and accessible to you.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 3: Set Aside Regular Time</Text>
            <Text style={styles.stepText}>
              Allocate a specific time each day or week for journaling. Consistency helps in building a routine and making journaling a habit.
            </Text>

            <Text style={styles.stepTitle}>💡 Step 4: Use Prompts to Guide Your Writing</Text>
            <Text style={styles.stepText}>
              If you're unsure where to start, consider using prompts to inspire your writing. Here are a few examples:
            </Text>
            <Text style={styles.bulletPoint}>• What are three things you're grateful for today?</Text>
            <Text style={styles.bulletPoint}>• Describe a recent challenge and how it made you feel.</Text>
            <Text style={styles.bulletPoint}>• Write about a time when you felt truly happy. What were you doing?</Text>
            <Text style={styles.bulletPoint}>• What are your goals for the next month, and how do you plan to achieve them?</Text>

            <Text style={styles.stepTitle}>🔒 Step 5: Reflect on Your Entries</Text>
            <Text style={styles.stepText}>
              Periodically read through your past journal entries to observe patterns in your thoughts and emotions. Reflecting on your writing can provide valuable insights and highlight areas of personal growth.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Remember, your journal is a private space for honest self-expression. There are no rules or judgments—write freely and authentically to explore your inner world.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/-Uc08w_UFVQ" }}
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
  },
});
