import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask14'>;

export default function SelfConfidenceTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Stepping Outside Comfort Zone</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Stepping Outside Comfort Zone" exercise is designed to enhance self-confidence by encouraging individuals to engage in activities that challenge their usual routines and push their
              boundaries. Embracing discomfort can lead to personal growth, increased resilience, and a broader perspective on one's capabilities.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Your Comfort Zone</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> Take a moment to reflect on your daily routines and habits. Identify areas where you feel most comfortable and seldom venture
              beyond. This could be social situations, work tasks, or personal activities.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 2: Set a Challenging Yet Achievable Goal</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Goal Setting:</Text> Choose an activity that slightly pushes your boundaries. Ensure it's realistic and attainable to prevent overwhelming
              yourself. For example, if you're shy, set a goal to initiate a conversation with a colleague you don't usually talk to.
            </Text>

            <Text style={styles.stepTitle}>🚀 Step 3: Take the First Step</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Action:</Text> Commit to your chosen activity. Remember, the objective is to experience growth by embracing discomfort. Approach the situation with
              an open mind and a willingness to learn.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Manage Discomfort</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Coping Strategies:</Text> Acknowledge any feelings of discomfort or anxiety. Practice deep breathing, positive self-talk, or visualization
              techniques to manage these emotions effectively.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After completing the activity, reflect on the experience. Consider the following questions:
              {'\n'} - How did you feel before, during, and after the activity?
              {'\n'} - What did you learn about yourself?
              {'\n'} - How can this experience inform future challenges?
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 6: Repeat and Expand</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Continuous Growth:</Text> Regularly engage in activities that challenge your comfort zone. Gradually increase the difficulty to foster continuous
              personal growth and bolster self-confidence.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/n5HHh7ONvaI' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
