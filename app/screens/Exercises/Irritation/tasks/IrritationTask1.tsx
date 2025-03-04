import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask1'>;

export default function IrritationTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Irritation.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Bubble Wrap Popping</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging children in bubble wrap popping can be a fun and therapeutic activity to help manage irritation and improve fine motor skills. This exercise provides a sensory experience that
              can aid in stress relief and emotional regulation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              - **Activity**: Obtain a sheet of bubble wrap, preferably with medium to large-sized bubbles. Ensure the area is safe and free from hazards to allow the child to engage freely in the
              activity.
            </Text>

            <Text style={styles.stepTitle}>👂 Step 2: Introduce the Activity</Text>
            <Text style={styles.stepText}>
              - **Activity**: Explain to the child that they will be popping the bubbles on the sheet. Demonstrate how to press the bubbles to create a popping sound, emphasizing the fun and sensory
              aspects of the activity.
            </Text>

            <Text style={styles.stepTitle}>👐 Step 3: Encourage Exploration</Text>
            <Text style={styles.stepText}>
              - **Activity**: Allow the child to explore the bubble wrap independently. Encourage them to use different fingers or even their whole hand to pop the bubbles, promoting fine motor skill
              development and sensory exploration.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 4: Incorporate Challenges</Text>
            <Text style={styles.stepText}>
              - **Activity**: Introduce simple challenges, such as popping all the bubbles in a specific area within a set time or using only one hand. This adds a playful element and can help improve
              focus and coordination.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Discuss the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After the activity, engage the child in a brief discussion about how they felt during the bubble popping. Ask if it was enjoyable and if it helped them feel more relaxed
              or less irritated. This reflection can enhance self-awareness and emotional understanding.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Bubble wrap popping is a simple yet effective activity that combines sensory stimulation with motor skill development. It offers children a fun way to manage feelings of irritation and
              provides an opportunity for mindful engagement.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/drQ9nSJLfBQ' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
