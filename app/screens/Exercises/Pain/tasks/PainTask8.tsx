import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask8'>;

export default function PainTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Yoga for Pain Relief</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-40 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Yoga is a holistic practice that combines physical postures, breathing exercises, and mindfulness to promote overall well-being. For teenagers experiencing pain, yoga can be an effective
              tool to alleviate discomfort and improve flexibility, strength, and relaxation. This exercise introduces a series of beginner-friendly yoga poses aimed at relieving common areas of
              tension and pain.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Create a Comfortable Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Find a quiet, comfortable space where you can practice yoga without interruptions. Use a yoga mat or a soft surface to cushion
              your movements. Ensure you have enough room to move freely and wear comfortable clothing that allows for a full range of motion.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Begin with Deep Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Sit or stand comfortably with your spine straight. Close your eyes and take slow, deep breaths. Inhale deeply through your nose,
              allowing your abdomen to expand, and then exhale slowly through your mouth. Repeat this breathing pattern for a few minutes to center your mind and prepare your body for the practice.
            </Text>

            <Text style={styles.stepTitle}>🧍‍♀️ Step 3: Practice Yoga Poses</Text>
            <Text style={styles.stepText}>
              <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Perform the following yoga poses, holding each for 30 seconds to 1 minute, depending on your comfort level. Focus on your breath and
              move gently, without forcing any position.
              <Text style={{ fontWeight: 'bold' }}>{'\n'}Cat/Cow Stretch</Text>: Begin on your hands and knees in a tabletop position. Inhale, arching your back and lifting your head (Cow Pose).
              Exhale, rounding your spine and tucking your chin (Cat Pose). Repeat this flow to warm up the spine.
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Child's Pose</Text>: From the tabletop position, sit back on your heels and extend your arms forward, lowering your forehead to the mat. This pose
              gently stretches the lower back and hips.
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Downward Facing Dog</Text>: From the tabletop position, lift your hips upward, straightening your legs and forming an inverted V-shape. This pose
              stretches the hamstrings, calves, and back.
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Standing Forward Bend</Text>: Stand tall, then hinge at your hips to fold forward, reaching toward your toes. Keep your knees slightly bent if
              needed. This pose stretches the hamstrings and relieves tension in the back.
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Seated Forward Bend</Text>: Sit with your legs extended straight in front of you. Inhale, lengthen your spine, and exhale as you reach forward toward
              your feet. This pose stretches the hamstrings and lower back.
              {'\n'}
              <Text style={{ fontWeight: 'bold' }}>Supine Twist</Text>: Lie on your back with your knees bent. Gently lower your knees to one side while keeping your shoulders on the mat. This pose
              stretches the spine and helps release tension in the back.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Conclude with Relaxation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Lie on your back in a comfortable position, arms resting by your sides, and legs extended. Close your eyes and focus on your
              breath, allowing your body to relax completely. Stay in this relaxation pose for 5-10 minutes, observing any sensations of calmness or relief from tension.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After completing the yoga session, take a moment to reflect on how your body feels. Notice any changes in areas of tension or
              discomfort. Consider incorporating yoga into your regular routine to manage pain and promote overall well-being.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of yoga can enhance flexibility, strength, and mental clarity, contributing to effective pain management and improved quality of life. Remember to listen to your body
              and practice within your comfort zone, gradually increasing intensity as you become more comfortable with the poses.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/v7AYKMP6rOE' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
