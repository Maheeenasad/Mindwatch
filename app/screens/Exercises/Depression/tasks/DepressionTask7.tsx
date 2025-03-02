import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "DepressionTask7">;

export default function DepressionTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/DepressionTask2.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Uplifting Music</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with uplifting music can be a powerful tool for teenagers to enhance mood and alleviate symptoms of depression. Music has the ability to influence emotions, provide comfort, and serve as a positive distraction during challenging times.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 1: Create a Positive Playlist</Text>
            <Text style={styles.stepText}>
              Compile a playlist of songs that make you feel happy, energized, and motivated. Consider including tracks like:
            </Text>
            <Text style={styles.bulletPoint}>• "Rise Up" by Andra Day</Text>
            <Text style={styles.bulletPoint}>• "This Is Me" by Keala Settle</Text>
            <Text style={styles.bulletPoint}>• "I'm Good" by The Mowgli's</Text>
            <Text style={styles.bulletPoint}>• "Love Yourself" by Justin Bieber</Text>
            <Text style={styles.bulletPoint}>• "Fight Song" by Rachel Platten</Text>
            <Text style={styles.bulletPoint}>• "Be Ok" by Ingrid Michaelson</Text>

            <Text style={styles.stepTitle}>🕰️ Step 2: Dedicate Time for Listening</Text>
            <Text style={styles.stepText}>
              Set aside 15 minutes each day to listen to your positive playlist. This could be during a morning routine, after school, or before bedtime. Consistent engagement can help establish a positive habit.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Mindful Listening</Text>
            <Text style={styles.stepText}>
              While listening, focus on the lyrics, melodies, and rhythms. Allow yourself to fully experience the emotions conveyed in the music. This mindful approach can enhance the therapeutic effects of music.
            </Text>

            <Text style={styles.stepTitle}>🎤 Step 4: Active Participation</Text>
            <Text style={styles.stepText}>
              Sing along, dance, or even play an instrument if you have one. Active participation can increase the release of endorphins, further boosting your mood.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating uplifting music into your daily routine can serve as a simple yet effective strategy to improve mental well-being. Remember, the key is to choose music that resonates with you personally and brings joy.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/sspBiMzqUjk" }}
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
