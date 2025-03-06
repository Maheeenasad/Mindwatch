import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask11'>;

export default function IrritationTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Irritation.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Meditation for Anger</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Meditation is a powerful tool for managing anger and promoting emotional well-being. By practicing mindfulness and focused breathing, individuals can learn to observe their emotions
              without judgment and respond to situations with greater calm and clarity.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Sit or lie down in a comfortable position. Ensure your back is straight yet relaxed, and your hands rest gently on your lap or by
              your sides.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Focus on Your Breath</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Close your eyes and bring attention to your breathing. Inhale deeply through your nose for a count of four, hold for a count of
              four, and exhale slowly through your mouth for a count of four. Repeat this box breathing technique several times to center your mind.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Observe Your Thoughts and Emotions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> As you continue to breathe deeply, notice any thoughts or emotions that arise, especially feelings of anger. Acknowledge them
              without judgment, allowing them to come and go like passing clouds.
            </Text>

            <Text style={styles.stepTitle}>❤️ Step 4: Practice Loving-Kindness Meditation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Silently repeat phrases such as "May I be happy," "May I be free from anger," and "May I be at peace." Gradually extend these
              wishes to others, including those you may feel anger towards, fostering empathy and understanding.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 5: Set a Regular Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Incorporate this meditation practice into your daily routine, dedicating time each day to cultivate mindfulness and manage anger
              effectively.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Consistent meditation practice can lead to greater emotional regulation, reduced anger, and improved overall mental health. Embrace this journey towards inner peace and resilience.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/wkse4PPxkk4' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
