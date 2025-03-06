import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask13'>;

export default function JealousyTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided visualization helps individuals mentally explore positive experiences and feelings to counter jealousy. By visualizing a desired future or peaceful moments, individuals can
              cultivate inner peace, emotional control, and a more positive outlook on life.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘‍♀️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Start by finding a quiet, comfortable space where you won’t be disturbed. Sit or lie down in a relaxed position and close your
              eyes. Take a few deep breaths to calm your mind and body.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌅 Step 2: Visualize a Peaceful Scene</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Imagine yourself in a serene and peaceful place. It could be a beach, a forest, or a mountain top. Focus on the details: the
              sounds, the smells, the colors, and the textures. Allow yourself to feel the calmness and tranquility of this environment.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}✨ Step 3: Picture Your Desired Future</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Now, visualize yourself achieving your goals and feeling content. Picture your success, happiness, and the pride you will feel.
              Focus on how it will feel to have your desires fulfilled, and let those positive emotions fill you up.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Step 4: Release Negative Emotions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> As you continue visualizing your positive future, gently release any negative emotions, such as jealousy or insecurity. Imagine
              these emotions leaving your body and being replaced with feelings of peace, joy, and gratitude.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌈 Final Thought</Text>
            <Text style={styles.stepText}>
              Visualization is a powerful tool for transforming negative emotions like jealousy into positive energy. With regular practice, it can help you manage emotional responses and foster a
              mindset focused on personal growth and well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/6p_yaNFSYao' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
