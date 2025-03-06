import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask13'>;

export default function SelfConfidenceTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Goal Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Goal Visualization" exercise is designed to enhance self-confidence by guiding individuals through the process of vividly imagining their goals and the steps necessary to achieve
              them. Visualization is a powerful technique that can boost motivation, improve focus, and reinforce belief in one's abilities.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Define Your Goal</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Clarification:</Text> Identify a specific, achievable goal you wish to accomplish. Ensure it's measurable and time-bound. For example, "I want to
              complete a 5K run within the next three months."
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Outline the Steps</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Planning:</Text> Break down your goal into manageable steps. This might include researching training programs, setting a weekly running schedule,
              and joining a local running group.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 3: Create a Mental Image</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Visualization:</Text> Find a quiet space, close your eyes, and imagine yourself successfully achieving your goal. Engage all your senses: see the
              finish line, hear the crowd cheering, feel the ground beneath your feet, and experience the emotions of accomplishment.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Practice Regularly</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Consistency:</Text> Dedicate time daily to visualize your goal. Regular practice reinforces your commitment and enhances self-belief.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Affirm Your Abilities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Affirmation:</Text> Develop positive statements that reinforce your capability to achieve the goal, such as "I am a dedicated runner making
              progress every day."
            </Text>

            <Text style={styles.stepTitle}>📓 Step 6: Reflect and Adjust</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> Regularly assess your progress, celebrate milestones, and adjust your plan as necessary to stay aligned with your goal.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/e-xl32w5Rz0' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
