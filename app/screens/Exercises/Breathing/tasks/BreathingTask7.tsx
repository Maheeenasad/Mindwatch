import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BreathingTask7'>;

export default function BreathingTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/BreathingTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Alternate Nostril Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~5 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Alternate Nostril Breathing, known as Nadi Shodhana in yoga practice, is a calming technique that can help teenagers manage stress and enhance mental clarity. By breathing through one
              nostril at a time, this exercise aims to balance the body's energy channels.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🟦 Steps to Practice Alternate Nostril Breathing</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Find a Comfortable Position:</Text> Sit in a relaxed posture with your spine straight and shoulders relaxed.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Hand Placement:</Text> Use your right thumb to gently close your right nostril.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Inhale:</Text> Breathe in slowly through your left nostril.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Switch:</Text> Close your left nostril using your right ring finger, then release your right nostril.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Exhale:</Text> Breathe out gently through your right nostril.{'\n'}
              6. <Text style={{ fontWeight: 'bold' }}>Inhale Right:</Text> Now, inhale through your right nostril.{'\n'}
              7. <Text style={{ fontWeight: 'bold' }}>Switch Again:</Text> Close your right nostril with your right thumb, release your left nostril.{'\n'}
              8. <Text style={{ fontWeight: 'bold' }}>Exhale Left:</Text> Exhale through your left nostril.{'\n'}
              9. <Text style={{ fontWeight: 'bold' }}>Repeat:</Text> This completes one cycle. Continue for 5-10 cycles, focusing on your breath.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Consistency:</Text> Incorporate this practice into your daily routine to experience its full benefits.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Environment:</Text> Choose a quiet space free from distractions to enhance concentration.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Comfort:</Text>{' '}
              If you feel lightheaded at any point, pause the practice and return to normal breathing.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Benefits of Alternate Nostril Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reduces Stress:</Text> Helps calm the mind and reduce anxiety.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Improves Focus:</Text> Enhances
              concentration and mental clarity.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Balances Energy:</Text> Promotes equilibrium between the left and right hemispheres of the brain.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/8VwufJrUhic' }} // Yoga Breathing | Alternate Nostril Breathing
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
