import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BreathingTask11'>;

export default function BreathingTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/BreathingTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Breathing Meditation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Breathing Meditation is a mindfulness practice that focuses on the breath to cultivate mental clarity and reduce stress. This exercise can help adults enhance their emotional well-being
              and improve concentration.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🟦 Steps to Practice Breathing Meditation</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Choose a Quiet Environment:</Text> Find a peaceful space where you won't be disturbed during your meditation session.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Assume a Comfortable Posture:</Text> Sit on a chair with your feet flat on the ground or cross-legged on a cushion. Keep your back straight yet
              relaxed, and rest your hands on your lap or knees.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Close Your Eyes:</Text> Gently close your eyes to direct your attention inward and minimize external distractions.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Focus on Your Breath:</Text> Bring your attention to the sensation of breathing. Notice the air entering through your nostrils, filling your
              lungs, and the gentle rise and fall of your chest or abdomen.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Observe Natural Breathing:</Text> Allow your breath to flow naturally. There's no need to control its rhythm; simply observe each inhale and
              exhale.{'\n'}
              6. <Text style={{ fontWeight: 'bold' }}>Acknowledge Wandering Thoughts:</Text> It's normal for the mind to wander. When you notice your thoughts drifting, gently redirect your focus back
              to your breath without judgment.{'\n'}
              7. <Text style={{ fontWeight: 'bold' }}>Continue for 10 Minutes:</Text> Aim to maintain this mindful awareness of your breath for about 10 minutes. You can gradually increase the
              duration as you become more comfortable with the practice.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Consistency:</Text> Establish a regular meditation routine, practicing at the same time each day to build habit and deepen your practice.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Comfort:</Text> Ensure you're physically comfortable to prevent distractions. Use cushions or a chair as needed to support your posture.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Gentleness:</Text> Approach the practice with a gentle attitude. It's okay if your mind wanders; calmly bring your focus back to your breath each
              time.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Benefits of Breathing Meditation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Stress Reduction:</Text> Regular practice can lower stress levels by promoting relaxation and reducing the production of stress hormones.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Enhanced Emotional Health:</Text> Mindfulness meditation has been linked to improved mood and a reduction in symptoms of depression and anxiety.
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Improved Focus:</Text> By training your attention on the breath, you can enhance your concentration and cognitive function in daily
              activities.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/he-tQOnDCWw' }} // Mindful Meditation: 5-Minute Deep Breathing Mindful Relaxation
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
