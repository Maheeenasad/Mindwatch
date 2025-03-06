import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask14'>;

export default function JealousyTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Personal Growth Reflection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Personal growth reflection encourages individuals to examine their progress, strengths, and challenges in a way that promotes self-awareness and emotional growth. This exercise helps
              reduce jealousy by focusing on personal development, achievements, and the journey towards becoming the best version of oneself.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Reflect on Your Personal Achievements</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Take a few moments to reflect on your personal achievements, big or small. Think about milestones you've reached, whether in your
              career, relationships, or personal goals. Write down at least three accomplishments that you're proud of.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌱 Step 2: Identify Areas for Growth</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Think about areas in your life where you'd like to improve or grow. This could be anything from learning new skills, improving
              relationships, or focusing on emotional resilience. Write down one area you'd like to grow in and consider the steps you can take to make progress.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Step 3: Acknowledge Your Strengths</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Reflect on your strengths and unique qualities. What makes you special? Acknowledge the talents, skills, or personal qualities
              that you have, and recognize how these contribute to your success and happiness. Write them down.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘‍♂️ Step 4: Set Intentions for the Future</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Set an intention for your personal growth. This could be a long-term goal or a short-term focus, such as improving
              self-compassion, taking risks, or practicing gratitude. Write down how you will move forward with your intentions and why they are meaningful to you.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌻 Final Thought</Text>
            <Text style={styles.stepText}>
              Personal growth is a continuous journey, and it's important to celebrate progress, no matter how small. By focusing on your achievements, strengths, and growth areas, you can shift your
              energy away from jealousy and towards self-improvement and fulfillment.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/4G4Thm8SsE8' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
