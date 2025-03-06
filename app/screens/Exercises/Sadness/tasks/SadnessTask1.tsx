import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SadnessTask1'>;

export default function SadnessTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Sadness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Happy Storytime</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with uplifting stories can enhance mood and provide comfort. This exercise involves immersing yourself in a joyful story to promote happiness and alleviate feelings of sadness.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 1: Choose a Happy Story</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Select a short story that embodies themes of happiness, kindness, or positivity. For example, "The Little Good Mouse" is a tale
              where a mouse helps protect a happy queen from a jealous king.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 2: Create a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Find a quiet and comfortable place to sit or lie down. Ensure the lighting is adequate and the environment is free from
              distractions.
            </Text>

            <Text style={styles.stepTitle}>🕯️ Step 3: Engage with the Story</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Read the chosen story slowly, allowing yourself to visualize the scenes and connect with the characters. Immerse yourself fully in
              the narrative, letting the positive themes resonate with you.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 4: Reflect on the Story</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After reading, take a few moments to reflect on the story's message. Consider how the themes of happiness and kindness can be
              applied to your own life.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Journal Your Thoughts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Write down any thoughts or feelings that arose during the reading. Journaling can help process emotions and reinforce positive
              messages.
            </Text>

            <Text style={styles.stepTitle}>🎥 Step 6: Watch a Related Video</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Enhance the experience by watching a short video that reinforces the themes of the story. For instance, "The Happy Stories |
              English Animated Stories For Kids" offers animated tales that promote positivity.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/JN_B_jdIlwE' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
    backgroundColor: '#F0F8FF'
  },
  scrollContent: {
    paddingBottom: 20
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#003366',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 15
  },
  timeText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600'
  },
  stepsContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden'
  },
  video: {
    width: '100%',
    height: '100%'
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
