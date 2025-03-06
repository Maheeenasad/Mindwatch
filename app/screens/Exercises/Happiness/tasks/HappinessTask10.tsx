import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask10'>;

export default function HappinessTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask6.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Journaling Happy Moments</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min daily</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Journaling positive experiences can enhance well-being, reduce stress, and promote mindfulness. This exercise encourages you to reflect on and document moments that bring joy, fostering
              a positive outlook on life.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Choose Your Journaling Medium</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Decide whether you'll use a physical notebook or a digital
              platform for your journaling. Choose a medium that feels comfortable and accessible to you.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Reflect on Your Day</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes daily{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Each evening, take a moment to reflect on your day.
              Identify at least one positive experience or something you're grateful for, no matter how small.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Write Down Your Happy Moments</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes daily{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Write a brief description of your identified happy
              moment. Include details about the experience and how it made you feel. This practice reinforces positive emotions and helps you recognize joy in everyday life.
            </Text>

            <Text style={styles.stepTitle}>📆 Step 4: Review and Reflect Weekly</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 15 minutes weekly{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> At the end of each week, review your journal
              entries. Reflect on the positive experiences you've documented and observe any patterns or recurring themes. This reflection can enhance self-awareness and gratitude.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Consistently journaling happy moments can shift your focus towards positivity, improve mood, and build resilience against stress. Embrace this practice to cultivate a more joyful and
              mindful life.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/dj3JHHgRo48' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
