import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask14'>;

export default function ImpatienceTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Observing Nature</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Immersing yourself in nature can enhance mindfulness and reduce impatience. This exercise guides you through observing natural surroundings to cultivate a deeper sense of presence and
              calm.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 1: Select a Natural Setting</Text>
            <Text style={styles.stepText}>
              - **Activity**: Choose a natural environment such as a park, forest, or garden where you can sit or walk undisturbed. Ensure it's a place where you feel safe and comfortable.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 2: Ground Yourself</Text>
            <Text style={styles.stepText}>
              - **Activity**: Upon arrival, take a few deep breaths to center yourself. Feel the ground beneath you, whether you're sitting or standing, and become aware of your connection to the
              earth.
            </Text>

            <Text style={styles.stepTitle}>👀 Step 3: Observe Your Surroundings</Text>
            <Text style={styles.stepText}>
              - **Activity**: Slowly look around, taking in the details of your environment. Notice the colors, shapes, and movements. Pay attention to the interplay of light and shadow, and observe
              any wildlife or plant life present.
            </Text>

            <Text style={styles.stepTitle}>👂 Step 4: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              - **Activity**: Close your eyes and focus on the sounds around you—the rustling of leaves, bird calls, or the wind. Feel the texture of the ground or a nearby object, inhale the scents
              of nature, and notice the temperature and breeze on your skin.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After your observation, take a moment to reflect. How did focusing on nature affect your thoughts and feelings? Did you notice a shift in your level of impatience or
              stress?
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly observing nature can deepen your mindfulness practice and foster patience. Embracing the natural world's rhythms reminds us to slow down and appreciate the present moment.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/7nsmuPT7Zfw' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
