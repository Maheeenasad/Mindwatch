import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/types"; 
import { WebView } from "react-native-webview";

const { width } = Dimensions.get("window");

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "AngerTask1">;

export default function AngerTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require("@/assets/exercises/Anger.jpg")} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Expressive Art Therapy for Children</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Expressive Art Therapy provides children with a creative outlet to process and manage their emotions, particularly anger. Engaging in art activities can help children express feelings they might find difficult to verbalize, leading to improved emotional regulation.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Scribble Drawing</Text>
            <Text style={styles.stepText}>
              Provide your child with a blank sheet of paper and colored pencils or crayons. Encourage them to create a spontaneous scribble that represents their current feelings. This activity allows children to express their emotions freely without focusing on creating a specific image.
            </Text>

            <Text style={styles.stepTitle}>🖌️ Step 2: Transform the Scribble</Text>
            <Text style={styles.stepText}>
              Ask your child to look at their scribble and identify any shapes or images they see within it. Using additional colors, they can enhance these shapes to create a more defined picture. This process helps children find meaning and order in chaotic emotions.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Discuss the Artwork</Text>
            <Text style={styles.stepText}>
              Engage your child in a conversation about their artwork. Ask open-ended questions like:
              {"\n"}- What does this drawing represent?
              {"\n"}- How did you feel while creating it?
              {"\n"}- What title would you give this piece?
              {"\n"}This discussion encourages children to reflect on and articulate their emotions.
            </Text>

            <Text style={styles.stepTitle}>🧱 Step 4: Clay Modeling</Text>
            <Text style={styles.stepText}>
              Provide your child with modeling clay and encourage them to sculpt an "anger monster" or any form that represents their anger. This tactile activity allows children to externalize and manage their anger constructively.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Art Journal</Text>
            <Text style={styles.stepText}>
              Introduce the concept of an art journal where your child can regularly draw or paint their feelings. This ongoing practice promotes self-awareness and provides a safe space for emotional expression.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating expressive art activities into your child's routine can serve as a valuable tool for managing anger and other strong emotions. Through creative expression, children learn to process their feelings in a healthy and constructive manner.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: "https://www.youtube.com/embed/cs4_joJC3dU" }} // Art Therapy Activity For Anger - express and explore anger through art
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
