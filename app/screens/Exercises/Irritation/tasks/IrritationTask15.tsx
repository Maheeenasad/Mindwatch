import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask15'>;

export default function IrritationTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Instrumental Music</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Listening to instrumental music can be a powerful tool for relaxation and stress relief. The absence of lyrics allows the mind to wander freely, promoting a meditative state that can
              help alleviate feelings of irritation.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 1: Select a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              - **Activity**: Find a quiet and comfortable space where you can sit or lie down without interruptions. This setting will enhance your ability to fully immerse yourself in the music.
            </Text>

            <Text style={styles.stepTitle}>🔊 Step 2: Choose Appropriate Music</Text>
            <Text style={styles.stepText}>
              - **Activity**: Opt for instrumental tracks known for their calming effects, such as classical pieces, ambient sounds, or nature-inspired compositions. These genres are effective in
              reducing stress and promoting relaxation.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Practice Deep Breathing</Text>
            <Text style={styles.stepText}>
              - **Activity**: As you listen, focus on your breathing. Inhale deeply through your nose, hold for a few seconds, and exhale slowly through your mouth. This technique can enhance the
              relaxation response induced by the music.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Visualize a Peaceful Scene</Text>
            <Text style={styles.stepText}>
              - **Activity**: Allow the music to guide your imagination to a serene place—a quiet beach, a lush forest, or a tranquil meadow. Visualization can amplify the stress-relieving benefits of
              the exercise.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating instrumental music into your daily routine can serve as a simple yet effective strategy to manage irritation and enhance overall well-being. Regular practice can lead to
              improved mood and mental clarity.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/tck7E11SdR8' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
