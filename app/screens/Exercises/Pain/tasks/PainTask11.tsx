import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask11'>;

export default function PainTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Pain.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindfulness Meditation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindfulness meditation involves focusing your attention on the present moment, acknowledging thoughts, sensations, and feelings without judgment.{'\n'}
              This practice can help manage pain by altering your perception and response to it.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Sit or lie down in a comfortable position.{'\n'}
              Ensure your back is straight yet relaxed, and your hands rest gently on your lap or by your sides.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Close your eyes and direct your attention to your breathing.{'\n'}
              Notice the sensation of air entering and leaving your nostrils or the rise and fall of your chest.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Body Scan</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Gradually shift your attention through different parts of your body, starting from your toes and moving up to your head.{'\n'}
              Observe any sensations, areas of tension, or discomfort without trying to change them.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Acknowledge Thoughts and Emotions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: As thoughts or emotions arise, acknowledge them without judgment{'\n'}
              and gently redirect your focus back to your breath or body sensations.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 5: Practice Regularly</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Aim to practice mindfulness meditation daily for 15-20 minutes{'\n'}
              to build resilience against pain and enhance overall well-being.
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - If you experience increased discomfort during meditation, adjust your position or take a short break.{'\n'}- Consult with a healthcare professional before starting any new meditation
              {'\n'}
              practice, especially if you have underlying health conditions.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindfulness meditation into your routine can be a powerful tool for managing pain and improving quality of life.{'\n'}
              Consistency and patience are key to experiencing its full benefits.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/QCNXi_0lsCk' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
