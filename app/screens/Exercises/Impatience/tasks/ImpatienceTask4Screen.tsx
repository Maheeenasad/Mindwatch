import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask4'>;

export default function ImpatienceTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful breathing is a simple yet powerful technique that helps children develop patience, focus, and emotional regulation. By paying attention to their breath, children can learn to
              anchor themselves in the present moment, reducing feelings of impatience and anxiety.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 1: Introduce Mindful Breathing</Text>
            <Text style={styles.stepText}>
              - **Activity**: Explain to the child that mindful breathing involves paying close attention to each breath as it enters and leaves the body. It's a way to help our minds feel calm and
              focused.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Practice Deep Belly Breathing</Text>
            <Text style={styles.stepText}>
              - **Activity**: Have the child sit or lie down comfortably. Ask them to place one hand on their belly and the other on their chest. Instruct them to take a slow, deep breath in through
              the nose, filling the belly with air and making it rise, while the chest remains relatively still. Then, have them slowly exhale through the nose, feeling the belly fall. Repeat this for
              several breaths.
            </Text>

            <Text style={styles.stepTitle}>🕯️ Step 3: Smell the Flower, Blow Out the Candle</Text>
            <Text style={styles.stepText}>
              - **Activity**: Ask the child to imagine holding a flower in one hand and a candle in the other. Instruct them to inhale deeply through the nose as if smelling the flower, then exhale
              slowly through the mouth as if gently blowing out the candle. Repeat this exercise to promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🐉 Step 4: Dragon Fire Breaths</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage the child to sit comfortably and take a deep breath in through the nose. Then, have them exhale forcefully through the mouth, imagining they are a dragon
              breathing out fire. This exercise can help release tension and is both fun and engaging.
            </Text>

            <Text style={styles.stepTitle}>🎈 Step 5: Bubble Breathing</Text>
            <Text style={styles.stepText}>
              - **Activity**: Provide the child with bubble solution and a wand. Encourage them to take a deep breath in and then blow out slowly to create bubbles. This activity promotes controlled
              breathing and patience, as blowing too hard or too softly won't produce bubbles.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 6: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After practicing these exercises, discuss with the child how they felt during each activity. Ask questions like, "Which breathing exercise did you enjoy the most?" or
              "How did your body feel after practicing mindful breathing?"
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of mindful breathing can help children manage their emotions, improve concentration, and develop greater patience. Incorporating these exercises into daily routines can
              provide children with valuable tools for coping with stress and enhancing overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/xkHaUI5kAyA' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
