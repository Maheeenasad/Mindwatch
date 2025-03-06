import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SadnessTask11'>;

export default function SadnessTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Sadness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Meditation for Emotional Balance</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Meditation is a powerful tool for achieving emotional balance, reducing stress, and enhancing overall well-being. This exercise guides you through a meditation practice designed to help
              you connect with your emotions and cultivate inner peace.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Prepare Your Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Find a quiet and comfortable place where you won't be disturbed. Sit in a comfortable position, either on a chair with your feet
              flat on the ground or on the floor with a cushion. Ensure your back is straight yet relaxed.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Close your eyes and bring your attention to your breath. Notice the sensation of air entering and leaving your nostrils. Allow
              your breath to flow naturally without trying to control it.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Observe Your Thoughts and Emotions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: As you continue to focus on your breath, observe any thoughts or emotions that arise. Acknowledge them without judgment and gently
              bring your focus back to your breath. This practice helps in recognizing and accepting your emotional state.
            </Text>

            <Text style={styles.stepTitle}>❤️ Step 4: Practice Loving-Kindness</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After a few minutes of mindful breathing, shift your focus to cultivating feelings of love and kindness. You can silently repeat
              affirmations like "May I be happy, may I be healthy, may I be at peace." Extend these wishes to others in your life to foster a sense of connection and compassion.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Conclude the Meditation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Slowly bring your awareness back to your surroundings. Wiggle your fingers and toes, and when you're ready, open your eyes. Take a
              moment to notice how you feel after the meditation.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/Ir30rv6fprk' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
