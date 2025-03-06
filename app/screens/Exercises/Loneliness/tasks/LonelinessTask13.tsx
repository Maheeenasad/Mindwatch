import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask13'>;

export default function LonelinessTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Meditation for Connection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided meditation can help cultivate a sense of connection to oneself and others, thereby alleviating feelings of loneliness. This practice encourages mindfulness and fosters a deeper
              understanding of our interconnectedness.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘 Step 1: Prepare Your Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose a quiet, comfortable space where you won't be disturbed. Ensure you're seated comfortably, either on a chair or on the
              floor with a cushion.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎧 Step 2: Select a Guided Meditation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose a guided meditation that focuses on fostering connection. For example, the "Guided Meditation for a Deep Soul Connection"
              is a 10-minute session designed to help you connect deeply with yourself and the universe.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🕯️ Step 3: Begin the Meditation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Play the selected guided meditation. Close your eyes, take deep breaths, and follow the instructions provided, allowing yourself
              to fully engage with the experience.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After completing the meditation, take a few moments to reflect on how you feel. Consider journaling any thoughts or emotions that
              arose during the practice.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📅 Step 5: Incorporate into Your Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Aim to incorporate guided meditations into your regular routine, whether daily or weekly, to continually nurture a sense of
              connection and well-being.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of guided meditations focusing on connection can enhance your sense of belonging and reduce feelings of loneliness. Embracing this practice can lead to a more connected
              and fulfilling life.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/QfPUzAt2GrU' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
