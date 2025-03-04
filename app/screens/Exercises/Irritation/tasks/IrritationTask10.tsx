import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask10'>;

export default function IrritationTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Calming Sounds</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Listening to calming sounds is an effective method for teenagers to manage feelings of irritation and stress. Engaging with soothing auditory stimuli can activate the parasympathetic
              nervous system, promoting relaxation and emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 1: Select Calming Audio</Text>
            <Text style={styles.stepText}>
              - **Activity**: Choose audio that you find soothing, such as nature sounds, instrumental music, or specific tracks designed to reduce stress. For example, the song "Weightless" by
              Marconi Union has been scientifically proven to reduce anxiety by up to 65% by lowering blood pressure and heart rate.
            </Text>

            <Text style={styles.stepTitle}>🔊 Step 2: Create a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              - **Activity**: Find a quiet space where you won't be disturbed. Use headphones or a quality speaker to enhance the listening experience, ensuring the volume is at a comfortable level.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Practice Mindful Listening</Text>
            <Text style={styles.stepText}>
              - **Activity**: Sit or lie down in a comfortable position. Close your eyes and focus entirely on the sounds, observing any thoughts or sensations that arise without judgment. This
              practice can help anchor you in the present moment and alleviate stress.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 4: Set a Regular Routine</Text>
            <Text style={styles.stepText}>
              - **Activity**: Incorporate listening sessions into your daily routine, such as before bedtime or during study breaks, to maintain consistent stress relief benefits.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Integrating calming sounds into your daily life can be a simple yet powerful tool for managing irritation and enhancing overall mental health. By dedicating time to this practice, you
              can cultivate a more relaxed and focused mind.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/FpusWhao1yU' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
