import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask14'>;

export default function FrustrationTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Walking</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Mindful Walking" integrates mindfulness into the simple act of walking, promoting awareness of the present moment and enhancing mental clarity. This practice can reduce stress, improve
              mood, and contribute to overall well-being.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Preparation</Text>
            <Text style={styles.stepText}>
              - **Duration**: 2 minutes{'\n'}- **Activity**: Choose a safe and comfortable environment for your walk, such as a park or a quiet neighborhood. Wear comfortable clothing and shoes to
              ensure ease of movement.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Initiate Mindful Walking</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Begin walking at a natural pace. Focus your attention on the sensation of your feet touching the ground, the movement of your legs, and
              the rhythm of your breath. If your mind wanders, gently bring your focus back to these physical sensations. This practice helps anchor you in the present moment. [Source: Mindful.org - A
              Guided Walking Meditation for Daily Life](https://www.mindful.org/daily-mindful-walking-practice/)
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              - **Duration**: 3 minutes{'\n'}- **Activity**: As you walk, become aware of your surroundings. Notice the colors, textures, and shapes you see; the sounds you hear; the scents you smell;
              and the feeling of the air on your skin. Engaging your senses fully enhances the mindfulness experience. [Source: Mindfulness.com - Mindful Walking: Stay Grounded by Walking
              Mindfully](https://mindfulness.com/mindful-living/mindful-walking)
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful walking into your routine can transform a simple activity into a powerful mindfulness practice, fostering a deeper connection with yourself and your environment.
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
