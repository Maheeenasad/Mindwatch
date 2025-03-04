import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask9'>;

export default function LonelinessTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Calling a Friend or Family</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Reaching out to friends or family members through a phone call can significantly reduce feelings of loneliness and strengthen your support network. This exercise encourages you to
              connect with loved ones, fostering a sense of belonging and emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>📞 Step 1: Choose Someone to Call</Text>
            <Text style={styles.stepText}>
              - **Activity**: Think of a friend or family member you haven't spoken to in a while or someone you miss. Consider individuals who have been supportive or with whom you've shared positive
              experiences.
            </Text>

            <Text style={styles.stepTitle}>🗓️ Step 2: Schedule a Convenient Time</Text>
            <Text style={styles.stepText}>
              - **Activity**: Reach out via text or message to find a suitable time for both of you to have a meaningful conversation. Scheduling ensures that both parties are available and can engage
              fully.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Engage in Open Conversation</Text>
            <Text style={styles.stepText}>
              - **Activity**: During the call, share your thoughts and feelings openly. Ask about their well-being, recent activities, and any challenges they might be facing. Active listening and
              empathy can deepen your connection.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 4: Set Regular Catch-Ups</Text>
            <Text style={styles.stepText}>
              - **Activity**: If the conversation is enjoyable, propose setting up regular calls or meetups. Consistent communication helps maintain strong relationships and provides ongoing support.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After the call, take a moment to reflect on how it made you feel. Recognize the positive emotions that come from connecting with loved ones and consider making such calls
              a regular practice.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly reaching out to friends and family can enhance your emotional well-being and create a robust support system. These connections remind you that you're not alone and that others
              care about your experiences and feelings.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/gmjs1bOkHcw' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
