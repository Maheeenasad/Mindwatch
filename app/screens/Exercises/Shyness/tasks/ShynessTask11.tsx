import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask11'>;

export default function ShynessTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Shyness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Networking Icebreakers</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-40 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Networking Icebreakers" exercise is designed to help adults overcome shyness by engaging in activities that facilitate comfortable and enjoyable introductions during networking
              events. These icebreakers aim to ease social interactions, promote confidence, and build meaningful connections.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Understand the Purpose of Icebreakers</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion:</Text> Recognize that icebreakers are tools to warm up conversations, reduce social anxiety, and create a friendly atmosphere, making
              it easier to connect with others.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 2: Participate in a Simple Icebreaker Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Engage in the "Two Truths and a Lie" game, where each participant shares two true statements and one false statement about
              themselves. Others guess which statement is the lie, fostering interaction and learning about each other.
            </Text>

            <Text style={styles.stepTitle}>🕵️‍♀️ Step 3: Engage in a Group Icebreaker</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Participate in "Human Bingo," where attendees receive bingo cards with traits or experiences (e.g., "Has traveled to Asia," "Plays
              a musical instrument"). Mingle to find individuals matching these descriptions and mark their names on the card, encouraging networking.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Practice Personalized Icebreakers</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Develop and practice your own icebreaker questions or topics that you feel comfortable discussing, such as hobbies, recent
              travels, or favorite books. This preparation can boost confidence in initiating conversations.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Reflect and Apply</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After participating in icebreaker activities, reflect on which methods made you feel most comfortable and connected. Apply these
              insights to future networking situations to enhance your social interactions.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/kxuGsq6as6A' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
