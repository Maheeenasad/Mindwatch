import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask12'>;

export default function ForgivenessTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Forgiveness Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 mins</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Visualization is a powerful tool that can help you process emotions and cultivate forgiveness. This exercise guides you through a mental imagery practice to release resentment and
              promote healing.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>Sit or lie down in a quiet space where you won't be disturbed. Close your eyes and take a few deep breaths to center yourself.</Text>

            <Text style={styles.stepTitle}>🌟 Step 2: Visualize the Person or Situation</Text>
            <Text style={styles.stepText}>Bring to mind the person or situation that you wish to forgive. Imagine it vividly, acknowledging the emotions that arise without judgment.</Text>

            <Text style={styles.stepTitle}>💬 Step 3: Express Your Feelings</Text>
            <Text style={styles.stepText}>In your mind, communicate your feelings to the person involved. Express your hurt, anger, or disappointment honestly and openly.</Text>

            <Text style={styles.stepTitle}>🤲 Step 4: Cultivate Empathy</Text>
            <Text style={styles.stepText}>
              Try to understand the perspective of the other person. Consider the factors that may have contributed to their behavior, fostering empathy and compassion.
            </Text>

            <Text style={styles.stepTitle}>🕊️ Step 5: Release and Forgive</Text>
            <Text style={styles.stepText}>
              Visualize yourself letting go of the negative emotions tied to the situation. Imagine a sense of relief and peace washing over you as you embrace forgiveness.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 6: Reflect on the Experience</Text>
            <Text style={styles.stepText}>After the visualization, take a moment to reflect on how you feel. Consider writing down any insights or changes in your emotions.</Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/4GQxYzG9r6k' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
