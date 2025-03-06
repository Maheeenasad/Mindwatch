import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BreathingTask5'>;

export default function BreathingTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/BreathingTask1.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Box Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Box Breathing, also known as square breathing, is a powerful technique that helps teenagers manage stress and enhance focus. By regulating your breathing pattern, you can achieve a state
              of calm and clarity.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🟦 Steps to Practice Box Breathing</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Find a Comfortable Position:</Text> Sit upright in a chair with your feet flat on the ground and hands resting on your lap.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Inhale:</Text> Breathe in slowly through your nose for a count of four, filling your lungs completely.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Hold:</Text> Retain your breath for a count of four.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Exhale:</Text> Release the breath gently through your mouth for a count of four, emptying your lungs.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Hold:</Text> Pause and hold your breath for another count of four before the next inhale.{'\n'}
              6. <Text style={{ fontWeight: 'bold' }}>Repeat:</Text> Continue this cycle for several minutes, maintaining a steady and relaxed rhythm.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Consistency:</Text> Practice box breathing daily to build resilience against stress.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Visualization:</Text> Imagine tracing the sides of a square with each phase of the breath to enhance concentration.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Adjust Counts:</Text> If a four-count feels challenging, modify the count to three or two seconds per phase until comfortable.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Benefits of Box Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reduces Anxiety:</Text> Calms the nervous system, helping to alleviate feelings of stress and anxiety.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Enhances Focus:</Text> Improves concentration and mental clarity, aiding in academic and personal tasks.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Promotes Mindfulness:</Text> Encourages present-moment awareness, fostering emotional regulation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/ZfMA0YA1IVA' }} // Box Breathing Practice
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
