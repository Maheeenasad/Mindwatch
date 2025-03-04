import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask11'>;

export default function ImpatienceTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Impatience.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Walking</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful walking is a practice that combines the physical benefits of walking with the mental benefits of mindfulness. It helps cultivate patience, awareness, and a deeper connection to
              the present moment. This exercise guides you through the steps of practicing mindful walking to enhance your well-being.
            </Text>

            <Text style={styles.stepTitle}>🛤️ Step 1: Choose a Suitable Location</Text>
            <Text style={styles.stepText}>
              - **Activity**: Find a quiet and safe place where you can walk undisturbed. This could be a park, a quiet neighborhood, or even a spacious indoor area. Ensure the path allows you to walk
              back and forth comfortably.
            </Text>

            <Text style={styles.stepTitle}>👟 Step 2: Adopt a Comfortable Posture</Text>
            <Text style={styles.stepText}>
              - **Activity**: Stand upright with your feet hip-width apart. Keep your knees slightly bent, arms relaxed by your sides, and shoulders relaxed. Maintain a soft gaze or gently close your
              eyes to minimize visual distractions.
            </Text>

            <Text style={styles.stepTitle}>🚶 Step 3: Begin Walking Slowly</Text>
            <Text style={styles.stepText}>
              - **Activity**: Start walking at a slow, deliberate pace. Pay attention to the sensation of your feet touching the ground, the movement of your legs, and the shifting of your weight with
              each step.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Anchor Your Attention</Text>
            <Text style={styles.stepText}>
              - **Activity**: Focus your attention on a specific aspect of walking, such as the contact of your feet with the ground or the rhythm of your breath. When your mind wanders, gently bring
              it back to this focal point.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 5: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              - **Activity**: As you walk, notice the sights, sounds, and smells around you. Observe the feeling of the air on your skin and the textures beneath your feet. Engaging your senses
              anchors you in the present moment.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 6: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After your walk, take a moment to reflect on how you feel. Notice any changes in your mood, physical sensations, or mental clarity. Consider how this practice of mindful
              walking can be integrated into your daily routine to promote patience and mindfulness.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful walking into your life can enhance your ability to stay present, reduce stress, and cultivate patience. It's a simple yet powerful practice that can transform
              everyday activities into opportunities for mindfulness and well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/ElHCp33OIOo' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
