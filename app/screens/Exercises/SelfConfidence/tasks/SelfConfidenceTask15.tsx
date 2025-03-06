import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask15'>;

export default function SelfConfidenceTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Inspirational Talks</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Listening to Inspirational Talks" exercise aims to bolster self-confidence by exposing individuals to motivational speeches and stories. Engaging with such content can provide new
              perspectives, ignite motivation, and reinforce belief in one's abilities.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 1: Select an Inspirational Talk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Choice:</Text> Choose a motivational speech or talk that resonates with you. This could be a TED Talk, a commencement speech, or a personal story
              of overcoming adversity.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Active Listening</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Engagement:</Text> Listen attentively to the chosen talk. Note key messages, quotes, or ideas that stand out to you.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Reflect on the Content</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> Consider how the speaker's experiences or messages relate to your own life. Reflect on any insights gained and how they can be
              applied to boost your self-confidence.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Share Your Insights</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion:</Text> Share the talk and your reflections with friends, family, or a support group. Engaging in discussions can deepen understanding
              and reinforce learning.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Implement the Lessons</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Application:</Text> Identify actionable steps from the talk that you can incorporate into your daily routine to enhance self-confidence.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/FEF9FF53Gyk' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
