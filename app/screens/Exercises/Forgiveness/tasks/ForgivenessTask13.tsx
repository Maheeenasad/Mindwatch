import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask13'>;

export default function ForgivenessTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Releasing Negative Emotions</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25 mins</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Holding onto negative emotions can hinder personal growth and well-being. This exercise provides a structured approach to acknowledge, process, and release these emotions, fostering a
              healthier emotional state.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Acknowledge Your Emotions</Text>
            <Text style={styles.stepText}>
              Begin by identifying and naming the negative emotions you're experiencing. Recognize these feelings without judgment, understanding that acknowledging them is the first step toward
              release.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 2: Controlled Breathing Exercise</Text>
            <Text style={styles.stepText}>
              Engage in a controlled breathing exercise to center yourself. Inhale through your nose for a count of three, hold for a count of two, and exhale through your mouth for a count of four.
              Repeat this cycle five times.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Journaling</Text>
            <Text style={styles.stepText}>
              Write freely about your negative emotions, expressing your thoughts and feelings without censorship. This practice can help you process and understand your emotions better.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 4: Guided Meditation</Text>
            <Text style={styles.stepText}>
              Participate in a guided meditation designed to help release negative emotions. This practice can assist in letting go of emotional burdens and promoting inner peace.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 5: Reflect and Integrate</Text>
            <Text style={styles.stepText}>
              After completing the above steps, take a moment to reflect on any changes in your emotional state. Consider how releasing these negative emotions can positively impact your life moving
              forward.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/LehuKo-pLEM' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
