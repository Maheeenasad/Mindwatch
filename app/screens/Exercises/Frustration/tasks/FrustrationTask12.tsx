import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask12'>;

export default function FrustrationTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>5-Minute Grounding Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "5-Minute Grounding Exercise" is a quick and effective technique designed to anchor you in the present moment, reducing feelings of anxiety and frustration. By focusing on your
              immediate surroundings and bodily sensations, you can divert attention from distressing thoughts and promote calmness.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - **Duration**: 1 minute{'\n'}- **Activity**: Sit or stand in a comfortable position with your feet flat on the ground. Ensure your back is straight yet relaxed, and let your hands rest
              naturally by your sides or on your lap. Close your eyes if it feels comfortable.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              - **Duration**: 3 minutes{'\n'}- **Activity**: Utilize the 5-4-3-2-1 grounding technique to connect with your environment: - **5**: Acknowledge five things you can see around you. -
              **4**: Identify four things you can touch. - **3**: Notice three things you can hear. - **2**: Recognize two things you can smell. - **1**: Become aware of one thing you can taste. This
              method helps shift your focus to the present moment. [Source: Calm - 5-4-3-2-1 Grounding Technique](https://www.calm.com/blog/5-4-3-2-1-a-simple-exercise-to-calm-the-mind)
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Deep Breathing</Text>
            <Text style={styles.stepText}>
              - **Duration**: 1 minute{'\n'}- **Activity**: Take slow, deep breaths. Inhale deeply through your nose, hold for a moment, and then exhale slowly through your mouth. Repeat this process
              several times, allowing your body to relax with each exhale.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Practicing this grounding exercise regularly can enhance your ability to manage stress and frustration by bringing your attention to the present moment. It's a simple yet powerful tool
              to incorporate into your daily routine.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/VS_mdtkcXzQ' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
