import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AngerTask12'>;

export default function AngerTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/AngerTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Muscle Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Muscle Relaxation (PMR) is a technique that involves systematically tensing and then relaxing different muscle groups throughout the body. This practice can help reduce
              physical tension associated with anger and promote a sense of calm.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>Sit or lie down in a quiet environment where you won't be disturbed. Ensure your clothing is loose, and remove your shoes to maximize comfort.</Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Focus on Your Breathing</Text>
            <Text style={styles.stepText}>
              Close your eyes and take a few deep breaths. Inhale deeply through your nose, hold for a moment, and then exhale slowly through your mouth. This helps center your mind and prepares your
              body for relaxation.
            </Text>

            <Text style={styles.stepTitle}>💪 Step 3: Tense and Relax Muscle Groups</Text>
            <Text style={styles.stepText}>
              Starting from your feet and working up to your head, tense each muscle group for about 5 seconds, then release for 10-15 seconds. Pay attention to the contrast between tension and
              relaxation. The sequence is as follows:{'\n'}
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Feet:</Text> Curl your toes downward.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Calves:</Text> Tighten your calf muscles.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Thighs:</Text> Squeeze your thigh muscles.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Buttocks:</Text> Clench your gluteal muscles.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Stomach:</Text> Tighten your abdominal muscles.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Chest:</Text> Take a deep breath and hold it.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Hands:</Text> Clench your fists.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Arms:</Text> Flex your biceps.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Shoulders:</Text> Shrug them towards your ears.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Neck:</Text> Gently tilt your head back.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Face:</Text> Scrunch your facial muscles.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 4: Maintain Regular Practice</Text>
            <Text style={styles.stepText}>
              Consistency is key. Aim to practice PMR daily, especially during moments of anger or stress. Regular practice enhances your ability to recognize and release muscle tension, leading to
              better anger management.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              By incorporating Progressive Muscle Relaxation into your routine, you can develop greater awareness of your body's tension patterns and learn to release them effectively, fostering a
              calmer and more controlled response to anger-inducing situations.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/ClqPtWzozXs' }} // Reduce Stress through Progressive Muscle Relaxation
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
