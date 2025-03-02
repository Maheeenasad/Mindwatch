import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask4">;

export default function DepressionTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask4.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gratitude Journal</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Keeping a Gratitude Journal helps children focus on positive aspects of their lives, fostering a sense of appreciation and enhancing emotional well-being. This practice encourages mindfulness and can alleviate feelings of depression.
            </Text>

            <Text style={styles.stepTitle}>📓 Step 1: Choose a Journal</Text>
            <Text style={styles.stepText}>
              Select a notebook or journal that your child likes. Personalizing it with drawings or stickers can make it more special and inviting.
            </Text>

            <Text style={styles.stepTitle}>🖊️ Step 2: Set a Routine</Text>
            <Text style={styles.stepText}>
              Establish a regular time each day for journaling, such as before bed or after school. Consistency helps in building a lasting habit.
            </Text>

            <Text style={styles.stepTitle}>💭 Step 3: Reflect on Positive Moments</Text>
            <Text style={styles.stepText}>
              Encourage your child to think about three things they are grateful for each day. These can be simple, like a tasty meal, a fun game, or a kind gesture from a friend.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 4: Write or Draw</Text>
            <Text style={styles.stepText}>
              Have your child write down or draw their grateful moments in the journal. This creative expression reinforces positive feelings and makes the experience enjoyable.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Share and Discuss</Text>
            <Text style={styles.stepText}>
              If comfortable, allow your child to share their entries with you or other family members. Discussing these moments can strengthen family bonds and highlight the importance of gratitude.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly maintaining a Gratitude Journal can help children develop a positive outlook and improve their mental health. Encourage your child to make this practice a joyful part of their daily routine.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/fi7eDRt-hDI" }}
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
