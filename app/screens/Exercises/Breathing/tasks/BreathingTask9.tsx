import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BreathingTask9'>;

export default function BreathingTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/BreathingTask1.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Resonant Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Resonant Breathing, also known as Coherent Breathing, is a practice that involves breathing at a rate of approximately 5 breaths per minute. This technique can help adults reduce stress,
              enhance mental clarity, and promote overall well-being.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🟦 Steps to Practice Resonant Breathing</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Find a Comfortable Position:</Text> Sit upright in a chair with your feet flat on the floor and hands resting on your lap, or lie down
              comfortably.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Close Your Eyes:</Text> Gently close your eyes to minimize external distractions.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Inhale Slowly:</Text> Breathe in through your nose for a count of 5 seconds, allowing your abdomen to rise as your lungs fill with air.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Exhale Gently:</Text> Breathe out through your nose for a count of 5 seconds, letting your abdomen fall as you release the air.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Establish a Rhythm:</Text> Continue this pattern of inhaling and exhaling, each for 5 seconds, maintaining a steady and relaxed rhythm.{'\n'}
              6. <Text style={{ fontWeight: 'bold' }}>Focus on Your Breath:</Text> Pay attention to the sensation of air entering and leaving your nostrils, and the gentle rise and fall of your
              abdomen.{'\n'}
              7. <Text style={{ fontWeight: 'bold' }}>Practice for 10 Minutes:</Text> Aim to maintain this breathing pattern for 10 minutes. If your mind wanders, gently redirect your focus back to
              your breath.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Consistency:</Text> Incorporate resonant breathing into your daily routine, perhaps in the morning or before bedtime, to experience cumulative
              benefits.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Use a Timer:</Text> Set a timer to help keep track of your practice duration without needing to check a clock.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Stay Relaxed:</Text> Keep your shoulders and jaw relaxed throughout the exercise to prevent tension.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Benefits of Resonant Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reduces Stress:</Text> Activates the parasympathetic nervous system, promoting relaxation and reducing stress levels.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Improves Mental Clarity:</Text> Enhances focus and cognitive function by increasing oxygen flow to the brain.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Balances Autonomic Nervous System:</Text> Helps regulate heart rate and blood pressure, contributing to overall cardiovascular health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/MXJGihmIkko' }} // Resonant Breathing Exercise
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
