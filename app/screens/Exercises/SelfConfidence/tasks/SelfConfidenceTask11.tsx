import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask11'>;

export default function SelfConfidenceTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidence.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Daily Affirmation Practice</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes daily</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Daily Affirmation Practice" is designed to help adults enhance their self-confidence by incorporating positive affirmations into their daily routine. Affirmations are positive
              statements that can help challenge and overcome self-sabotaging and negative thoughts. When practiced regularly, they can lead to a more positive mindset and improved self-esteem.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Your Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Reflect on areas where you feel a lack of confidence or where negative thoughts frequently arise. Create a list of positive
              affirmations that counter these negative beliefs. For example:
              {'\n'} - "I am capable and strong."
              {'\n'} - "I believe in my abilities."
              {'\n'} - "I deserve success and happiness."
              {'\n'} - "I am confident in my decisions."
              {'\n'} - "I embrace challenges as opportunities for growth."
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 2: Set a Daily Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Routine:</Text> Dedicate a specific time each day to practice your affirmations. This could be in the morning to set a positive tone for the day or
              in the evening as a reflection. Consistency is key to making affirmations effective.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Practice Your Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Stand in front of a mirror, take a deep breath, and recite each affirmation aloud with conviction. Maintain eye contact with
              yourself to reinforce the message. Repeat each affirmation 3-5 times.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Visualize and Internalize</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Visualization:</Text> As you say your affirmations, visualize yourself embodying these positive statements. Imagine scenarios where you display
              confidence and achieve your goals. This mental imagery reinforces the affirmations and makes them more impactful.
            </Text>

            <Text style={styles.stepTitle}>📓 Step 5: Reflect and Adjust</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> At the end of each week, take a few minutes to reflect on any changes in your mindset or behavior. Note any improvements in
              self-confidence or areas where you still face challenges. Adjust your affirmations as needed to address new goals or persistent negative thoughts.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/efZFARmGyMs' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
