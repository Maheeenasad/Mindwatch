import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask12'>;

export default function SelfConfidenceTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Networking Challenge</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Networking Challenge" is designed to help adults enhance their self-confidence by engaging in intentional networking activities. Building a robust professional network can open
              doors to new opportunities, provide support, and boost self-assurance in various settings.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 1: Identify Networking Opportunities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Research upcoming events, workshops, or seminars in your field or areas of interest. Platforms like LinkedIn, local community
              boards, or industry-specific forums can provide information on such events.
            </Text>

            <Text style={styles.stepTitle}>📞 Step 2: Attend a Networking Event</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Register for and attend the chosen event. Set a goal to initiate conversations with at least three new individuals. Prepare a
              brief self-introduction and some open-ended questions to facilitate dialogue.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Follow Up</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After the event, reach out to the individuals you met. Connect on professional networking platforms or send a personalized email
              expressing your interest in staying in touch.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> Consider the following questions:
              {'\n'} - How did you feel before, during, and after the event?
              {'\n'} - What challenges did you encounter, and how did you address them?
              {'\n'} - How did this experience influence your self-confidence and networking skills?
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Plan for Continued Networking</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Routine:</Text> Based on your reflection, set a goal to attend networking events regularly. This could involve joining professional associations,
              attending workshops, or participating in online forums to continue building your network.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/M5bASAr8Jg0' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
