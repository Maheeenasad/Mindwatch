import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "FearTask3">;

export default function FearTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/FearTask3.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Comfort Object Time</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Comfort objects, such as a favorite blanket or stuffed animal, can provide children with a sense of security and help alleviate fears. This activity encourages children to spend dedicated time with their comfort object to reinforce feelings of safety.
            </Text>

            <Text style={styles.stepTitle}>🧸 Step 1: Identify the Comfort Object</Text>
            <Text style={styles.stepText}>
              Encourage the child to choose a special item that makes them feel safe and calm. This could be a stuffed toy, blanket, or any object they are attached to.
            </Text>

            <Text style={styles.stepTitle}>🏡 Step 2: Create a Safe Space</Text>
            <Text style={styles.stepText}>
              Designate a cozy area in your home where the child can relax with their comfort object. This space should be quiet and free from distractions.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 3: Schedule Regular Comfort Time</Text>
            <Text style={styles.stepText}>
              Set aside specific times each day for the child to spend with their comfort object in the safe space. This routine can help reduce anxiety and build resilience against fears.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Discuss Feelings</Text>
            <Text style={styles.stepText}>
              After each session, talk with the child about how they felt during their comfort time. Encourage them to express any fears and discuss how their comfort object helps them feel better.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating comfort object time into a child's daily routine can provide them with a reliable coping mechanism for managing fears and anxieties.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/qkb5FcLcflA" }} // You Should ENCOURAGE A COMFORT OBJECT In Your Child
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
