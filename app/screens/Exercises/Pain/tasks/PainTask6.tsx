import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask6'>;

export default function PainTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Pain.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Muscle Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Muscle Relaxation (PMR) is a technique that helps reduce stress and alleviate pain by systematically tensing and then relaxing different muscle groups. This exercise guides
              you through a PMR session tailored for teenagers.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Prepare a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Find a quiet, comfortable space where you won't be disturbed. Sit or lie down in a relaxed position, ensuring your body is
              well-supported.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Begin with Deep Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Close your eyes and take slow, deep breaths. Inhale deeply through your nose, hold for a moment, and then exhale slowly through
              your mouth. Repeat this breathing pattern a few times to promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🦶 Step 3: Tense and Relax Muscle Groups</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Starting from your feet and working up to your head, tense each muscle group for 5 seconds, then release and relax for 10 seconds.
              Notice the contrast between tension and relaxation. Here's a sequence to follow:{'\n'}- <Text style={{ fontWeight: 'bold' }}>Feet</Text>: Curl your toes downward. {'\n'}-
              <Text style={{ fontWeight: 'bold' }}>Calves</Text>: Point your toes upward, flexing your calves. {'\n'}- <Text style={{ fontWeight: 'bold' }}>Thighs</Text>: Tighten your thigh muscles.{' '}
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Buttocks</Text>: Squeeze your gluteal muscles. {'\n'}- <Text style={{ fontWeight: 'bold' }}>Stomach</Text>: Contract your abdominal muscles.
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Hands</Text>: Clench your fists. {'\n'}- <Text style={{ fontWeight: 'bold' }}>Arms</Text>: Flex your biceps by bending your elbows. {'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Shoulders</Text>: Shrug your shoulders up toward your ears. {'\n'}- <Text style={{ fontWeight: 'bold' }}>Neck</Text>: Gently press your head back
              against the surface. {'\n'}- <Text style={{ fontWeight: 'bold' }}>Face</Text>: Scrunch your facial muscles by squeezing your eyes shut and wrinkling your nose.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Maintain Relaxation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After completing the muscle groups, take a moment to enjoy the state of relaxation. Continue deep breathing and observe any
              sensations of calmness or relief from tension.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Consider how your body feels after the exercise. Reflect on any differences in muscle tension and overall relaxation. Recognize
              how PMR can be a useful tool in managing stress and discomfort.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of Progressive Muscle Relaxation can enhance your ability to manage stress and alleviate pain. Incorporate this technique into your routine to promote physical and
              mental well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/aF4H0oAiDSQ' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
