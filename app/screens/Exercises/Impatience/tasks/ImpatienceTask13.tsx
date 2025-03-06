import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask13'>;

export default function ImpatienceTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Long-form Reading</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~1-2 hours</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in long-form reading can enhance focus, deepen understanding, and cultivate patience. This exercise guides you through the process of immersing yourself in extended reading
              sessions to improve mindfulness and reduce impatience.
            </Text>

            <Text style={styles.stepTitle}>📚 Step 1: Choose a Long-Form Material</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Select a book, in-depth article, or comprehensive report that interests you. Ensure the material is substantial enough to require
              sustained attention and offers a deep dive into the subject matter.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 2: Create a Comfortable Reading Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Find a quiet, comfortable space free from distractions. Arrange seating and lighting to support extended reading, and keep
              necessary items like a bookmark or notepad nearby.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 3: Set a Reading Schedule</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Allocate specific time slots for reading sessions, aiming for at least 30 minutes per session. Consistency helps build the habit
              and trains your mind to focus for longer periods.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Practice Active Reading</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Engage with the material by taking notes, highlighting key points, or summarizing sections. This active involvement enhances
              comprehension and retention.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 5: Reflect and Discuss</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After completing a reading session, reflect on the content and its implications. Discussing the material with others or writing
              about it can deepen understanding and provide new perspectives.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating long-form reading into your routine can significantly improve concentration, knowledge, and patience. Embracing this practice allows you to appreciate the depth and
              richness of well-crafted narratives and complex topics.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/vc6Dp7nbMhU' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
