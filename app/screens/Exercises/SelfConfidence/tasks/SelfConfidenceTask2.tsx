import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask2'>;

export default function SelfConfidenceTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mirror Affirmations</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mirror affirmations involve children standing before a mirror and reciting positive statements about themselves. This practice enhances self-awareness, boosts self-esteem, and fosters a
              positive self-image.
            </Text>

            <Text style={styles.stepTitle}>🪞 Step 1: Set Up the Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Choose a quiet space with a mirror at the child's eye level. Ensure the area is free from distractions to create a comfortable
              environment for self-reflection.
            </Text>

            <Text style={styles.stepTitle}>🗒️ Step 2: Create Personalized Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Collaborate with the child to develop a list of positive affirmations that resonate with them. Examples include "I am kind," "I am
              capable," or "I am a good friend." Tailoring affirmations to the child's experiences makes them more impactful.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Practice Reciting Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Encourage the child to stand in front of the mirror, look into their own eyes, and recite each affirmation aloud. Repeating each
              statement 3-5 times can reinforce the positive message.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Incorporate Creative Elements</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> To enhance engagement, consider integrating creative elements such as drawing or decorating the affirmations. This can make the
              practice more enjoyable and personalized.
            </Text>

            <Text style={styles.stepTitle}>🗓️ Step 5: Establish a Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Encourage making mirror affirmations a daily habit, perhaps each morning or before bedtime. Consistency helps reinforce positive
              self-perception over time.
            </Text>

            <Text style={styles.stepTitle}>💬 Step 6: Reflect and Discuss</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After practicing, engage the child in a conversation about their feelings during the exercise. Questions like "How did saying
              these affirmations make you feel?" or "Which affirmation is your favorite?" can provide insight into their self-perception and reinforce the positive messages.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/mafHwxerOGY' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
