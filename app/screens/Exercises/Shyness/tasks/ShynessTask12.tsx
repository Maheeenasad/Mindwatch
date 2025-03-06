import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask12'>;

export default function ShynessTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Speaking Up in Meetings</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25-35 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Speaking Up in Meetings" exercise is designed to help adults overcome shyness and build confidence in contributing to discussions during meetings. By following these steps,
              individuals can enhance their communication skills and become more active participants.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Prepare in Advance</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Action:</Text> Before the meeting, review the agenda and identify topics where you can contribute. Prepare your thoughts and potential questions to
              boost confidence.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 2: Set a Goal to Speak</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Aim to share at least one comment or question during the meeting. Starting small can help build confidence over time.
            </Text>

            <Text style={styles.stepTitle}>🕵️‍♀️ Step 3: Practice Active Listening</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Focus on what others are saying during the meeting. Active listening can provide natural opportunities to interject with relevant
              points or questions.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Ask Questions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> If you're hesitant to share opinions, start by asking clarifying questions. This demonstrates engagement and can ease you into
              more active participation.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Reflect and Seek Feedback</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After the meeting, reflect on your participation. Consider seeking feedback from trusted colleagues to identify areas for
              improvement and celebrate progress.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/GIlFC3yDHDE' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
