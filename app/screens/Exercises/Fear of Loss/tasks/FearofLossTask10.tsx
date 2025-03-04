import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask10'>;

export default function FearOfLossTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Letting Go Meditation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Letting Go Meditation" is a practice designed to help individuals release attachments, fears, and anxieties associated with loss. This exercise facilitates emotional healing by
              promoting acceptance and inner peace.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Create a Calm Environment</Text>
            <Text style={styles.stepText}>
              Find a quiet, comfortable space where you won't be disturbed. Sit or lie down in a relaxed position. Consider dimming the lights and minimizing external distractions.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              Close your eyes and bring attention to your breathing. Take slow, deep breaths, inhaling through your nose and exhaling through your mouth. Allow each breath to anchor you in the present
              moment.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Acknowledge Your Feelings</Text>
            <Text style={styles.stepText}>
              Gently bring to mind the loss or fear you're experiencing. Observe any emotions that arise without judgment. Recognize these feelings as natural responses to your situation.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 4: Visualize Letting Go</Text>
            <Text style={styles.stepText}>
              Imagine placing your fears and anxieties into a balloon. Visualize releasing the balloon into the sky, watching it drift away until it disappears. This symbolizes the act of letting go.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect and Journal</Text>
            <Text style={styles.stepText}>
              After the meditation, take a few moments to reflect on your experience. Consider writing down any insights or feelings that emerged during the practice. Journaling can reinforce the
              process of letting go.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of letting go meditation can aid in processing grief and reducing anxiety related to loss. Embracing this practice encourages acceptance and fosters emotional
              resilience.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/2DXqMBXmP8Q' }} // The Powerful Release of Letting Go! Guided Meditation
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
