import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask3'>;

export default function ShynessTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Playground Socializing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Playground Socializing" exercise is designed to help children overcome shyness by encouraging them to engage in social activities in a playground setting. This exercise aims to
              build confidence, improve social skills, and foster new friendships.
            </Text>

            <Text style={styles.stepTitle}>🏃‍♂️ Step 1: Observe and Identify</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Observation:</Text> Take your child to a local playground and encourage them to observe other children playing. Ask them to identify games or
              activities they find interesting.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 2: Teach Simple Icebreakers</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Introduction:</Text> Teach your child simple phrases to initiate interaction, such as "Can I play with you?" or "What game are you playing?" This
              helps them approach other children confidently.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Encourage Participation in Group Activities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Engagement:</Text> Encourage your child to join group games like tag, hopscotch, or basketball. Participating in group activities helps develop
              teamwork and social skills.
            </Text>

            <Text style={styles.stepTitle}>🧸 Step 4: Bring a Favorite Toy or Game</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Sharing:</Text> Suggest your child bring a favorite toy or game to the playground. This can serve as a conversation starter and encourage other
              children to join in the play.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 5: Positive Reinforcement</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Acknowledgment:</Text> After the playground visit, discuss the experience with your child. Praise their efforts to interact and highlight any
              positive outcomes to reinforce their confidence.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/Myf2CUx9E60' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
