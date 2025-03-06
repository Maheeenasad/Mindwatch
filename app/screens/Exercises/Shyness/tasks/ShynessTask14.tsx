import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask14'>;

export default function ShynessTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Social Gathering Participation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~45-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Social Gathering Participation" exercise is designed to help adults overcome shyness by actively engaging in social events. This exercise focuses on building confidence and
              improving social skills through gradual exposure and strategic planning.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Choose an Appropriate Event</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Action:</Text> Select a social gathering that aligns with your interests, such as a community meetup, workshop, or casual party. Starting with
              smaller events can make the experience more manageable.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 2: Set Achievable Goals</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Define specific objectives for the event, such as initiating a conversation with at least two new people or participating in a
              group activity. Setting clear goals provides direction and motivation.
            </Text>

            <Text style={styles.stepTitle}>🕵️‍♀️ Step 3: Utilize Active Listening</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> During interactions, focus on active listening by maintaining eye contact, nodding, and providing verbal affirmations. This not
              only shows engagement but also reduces self-consciousness.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Practice Open Body Language</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Adopt open body language by uncrossing your arms, facing others, and smiling. Positive body language can make you appear more
              approachable and enhance social interactions.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Reflect and Reward Yourself</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After the event, reflect on your experiences, acknowledging any progress made. Reward yourself for stepping out of your comfort
              zone, reinforcing positive behavior.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/FPcYrm_XR2A' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
