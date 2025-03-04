import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask8'>;

export default function FearOfLossTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Positive Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Positive Visualization" is a therapeutic exercise designed to help teenagers cope with feelings of loss by imagining positive outcomes and experiences. This technique leverages the
              power of the mind to foster hope and emotional healing.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Prepare Your Space</Text>
            <Text style={styles.stepText}>
              Find a quiet, comfortable space where you won't be disturbed. Sit or lie down in a relaxed position. Ensure the environment is calm, perhaps dimming the lights or playing soft
              instrumental music.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Relax Your Body</Text>
            <Text style={styles.stepText}>
              Close your eyes and take several deep breaths. With each exhale, release any tension in your body. Start from your head and move down to your toes, consciously relaxing each muscle
              group.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 3: Visualize a Positive Scenario</Text>
            <Text style={styles.stepText}>
              Imagine a place or situation where you feel completely at peace and happy. This could be a real location you've visited or an entirely imaginary setting. Engage all your senses: see the
              vibrant colors, hear the soothing sounds, feel the gentle textures, and even notice any pleasant scents.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 4: Embrace Positive Emotions</Text>
            <Text style={styles.stepText}>
              As you immerse yourself in this visualization, allow positive emotions to surface. Feelings of joy, contentment, and hope are encouraged. Let these emotions wash over you, reinforcing a
              sense of well-being.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After your visualization, take a moment to reflect. Consider writing down your experience in a journal, noting the emotions and sensations you felt. This reflection can help solidify the
              positive effects of the exercise.
            </Text>

            <Text style={styles.stepTitle}>🌿 Step 6: Return to the Present</Text>
            <Text style={styles.stepText}>
              Gently bring your awareness back to the present moment. Wiggle your fingers and toes, stretch your body, and open your eyes when you're ready. Carry the positivity from your
              visualization into your day.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of positive visualization can enhance emotional resilience and provide a constructive way to process feelings of loss. Remember, it's okay to seek support from trusted
              individuals or professionals if needed.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/2xyAQbBES_A' }} // Visualizing My Positive Future: A Guided Imagery by Tian Dayton
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
    backgroundColor: '#F0F8FF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#003366',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600',
  },
  stepsContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22,
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
