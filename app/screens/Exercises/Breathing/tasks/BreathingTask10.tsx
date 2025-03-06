import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BreathingTask10'>;

export default function BreathingTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/BreathingTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Coherent Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Coherent Breathing is a technique that involves breathing at a steady pace to balance the autonomic nervous system. This practice can help adults reduce stress, improve focus, and
              enhance overall well-being.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🟦 Steps to Practice Coherent Breathing</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Assume a Comfortable Position:</Text> Sit upright with your feet flat on the floor and hands resting on your thighs, or lie down comfortably.
              {'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Close Your Eyes:</Text> Gently close your eyes to reduce external distractions.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Inhale Slowly:</Text> Breathe in through your nose for a count of 5 seconds, allowing your abdomen to expand.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Exhale Slowly:</Text> Breathe out through your nose for a count of 5 seconds, letting your abdomen contract.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Establish a Steady Rhythm:</Text> Continue this pattern, maintaining a consistent 5-second inhale and 5-second exhale.{'\n'}
              6. <Text style={{ fontWeight: 'bold' }}>Focus on Your Breathing:</Text> Concentrate on the sensation of air entering and leaving your nostrils and the movement of your abdomen.{'\n'}
              7. <Text style={{ fontWeight: 'bold' }}>Continue for 10 Minutes:</Text> Maintain this breathing pattern for 10 minutes. If your mind wanders, gently redirect your attention to your
              breath.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Regularity:</Text> Incorporate coherent breathing into your daily routine, such as in the morning or before sleep, to experience cumulative
              benefits.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Use a Timer:</Text> Setting a timer can help you keep track of your practice without distraction.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Stay Relaxed:</Text> Keep your shoulders and jaw relaxed throughout the exercise to prevent unnecessary tension.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Benefits of Coherent Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Stress Reduction:</Text> Activates the parasympathetic nervous system, promoting relaxation and reducing stress.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Enhanced Focus:</Text> Improves concentration and mental clarity by increasing oxygen flow to the brain.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Autonomic Balance:</Text> Helps regulate heart rate and blood pressure, contributing to overall cardiovascular health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/LM63TRj-UcM' }} // Coherent Breathing Exercise
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
