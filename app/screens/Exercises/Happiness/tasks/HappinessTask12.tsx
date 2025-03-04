import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask12'>;

export default function HappinessTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Meditation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-20 minutes daily</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful meditation is a practice that involves focusing your mind on the present moment, acknowledging and accepting your thoughts, feelings, and bodily sensations without judgment.
              Regular practice can reduce stress, enhance emotional well-being, and improve overall mental health.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - **Duration**: 2 minutes{'\n'}- **Activity**: Sit on a chair or the floor with a straight, relaxed back. Ensure you're comfortable to maintain this posture for the duration of the
              meditation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5-10 minutes{'\n'}- **Activity**: Close your eyes and direct your attention to your breathing. Notice the sensation of air entering and leaving your nostrils or the rise
              and fall of your chest. When your mind drifts, gently redirect your focus back to your breath.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Body Scan</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Shift your attention systematically through different parts of your body, starting from your toes up to your head. Observe any sensations
              without trying to change them, promoting relaxation and bodily awareness.
            </Text>

            <Text style={styles.stepTitle}>🕊️ Step 4: Reflect and Journal</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: After meditating, take a moment to reflect on your experience. Jot down any thoughts or feelings that arose during the practice. This
              reflection can enhance self-awareness and track your mindfulness journey.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful meditation into your daily routine can lead to profound improvements in mental clarity, emotional stability, and overall happiness. Embrace this practice with
              patience and kindness towards yourself.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/ZToicYcHIOU' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
