import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask5'>;

export default function ForgivenessTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Positive Affirmations</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Positive affirmations are powerful statements that can help children build self-esteem, resilience, and a positive mindset. This activity introduces children to affirmations, guiding
              them to create and use their own to foster forgiveness and emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Understand Affirmations</Text>
            <Text style={styles.stepText}>
              Explain to the child that affirmations are positive statements we say to ourselves to encourage and uplift our spirits. They help us focus on our strengths and promote a healthy mindset.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Create Personal Affirmations</Text>
            <Text style={styles.stepText}>
              Guide the child to come up with their own affirmations. Encourage them to think about qualities they like in themselves or positive traits they wish to develop. Examples include:
            </Text>
            <Text style={styles.bulletPoint}>• "I am kind and caring."</Text>
            <Text style={styles.bulletPoint}>• "I forgive others and let go of grudges."</Text>
            <Text style={styles.bulletPoint}>• "I am strong and resilient."</Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Practice Saying Affirmations</Text>
            <Text style={styles.stepText}>
              Encourage the child to say their affirmations aloud each day, perhaps in front of a mirror. This practice reinforces positive beliefs and can be particularly empowering when facing
              challenges.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Affirmation Art</Text>
            <Text style={styles.stepText}>
              Have the child create colorful posters or drawings of their affirmations to display in their room. This visual reminder reinforces positive thinking and serves as daily motivation.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular use of positive affirmations can help children develop a forgiving and optimistic outlook. By focusing on their strengths and the good in others, they cultivate empathy and
              emotional resilience.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/1FMGG84mL9U' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
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
