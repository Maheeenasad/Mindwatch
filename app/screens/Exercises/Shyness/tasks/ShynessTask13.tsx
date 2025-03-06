import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask13'>;

export default function ShynessTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Public Introduction Practice</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-40 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Public Introduction Practice" exercise is designed to help adults overcome shyness by enhancing their ability to introduce themselves confidently in public settings. This exercise
              focuses on building self-assurance and improving public speaking skills through structured practice.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Craft Your Introduction</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Action:</Text> Develop a brief (1-2 minute) self-introduction that includes your name, profession, and an interesting personal anecdote or hobby.
              Ensure it reflects your personality and is engaging.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 2: Practice Vocal Warm-Ups</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Engage in vocal warm-up exercises to improve articulation and projection. For example, perform cheek circles by drawing circles on
              the inside of each cheek with the tip of your tongue.
            </Text>

            <Text style={styles.stepTitle}>🕵️‍♀️ Step 3: Record and Review</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Record yourself delivering your introduction using a mirror and a recording device. Observe your body language and listen to your
              tone and pacing.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Seek Constructive Feedback</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Present your introduction to a trusted friend or family member and request feedback on clarity, engagement, and delivery. Use
              their insights to refine your performance.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Implement Relaxation Techniques</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> Before practicing, engage in relaxation techniques such as deep breathing or visualization to reduce anxiety and promote
              calmness.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/E8kGHu01g0s' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
