import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask15'>;

export default function PainTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Deep Breathing with Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Deep breathing combined with visualization is a relaxation technique that can help manage chronic pain{'\n'}
              by reducing stress and promoting a sense of calm. This practice involves focusing on your breath{'\n'}
              while imagining soothing images, which can distract from pain and enhance overall well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Sit or lie down in a comfortable position, ensuring{'\n'}
              your back is straight but relaxed. Close your eyes to minimize distractions.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Practice Deep Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Place one hand on your abdomen and the other on your chest.{'\n'}
              Inhale deeply through your nose, allowing your abdomen to rise while keeping your chest relatively still.{'\n'}
              Exhale slowly through your mouth. Repeat this process for several breaths.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 3: Incorporate Visualization</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> While maintaining deep, rhythmic breathing, visualize a peaceful scene,{'\n'}
              such as a serene beach or a quiet forest. Engage your senses by imagining the sights, sounds,{'\n'}
              and scents of this place. This mental imagery can help divert attention from pain and promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Maintain the Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Continue the deep breathing and visualization for 10-15 minutes.{'\n'}
              If your mind wanders, gently redirect your focus back to your breath and the calming image.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 5: Conclude the Session</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Gradually bring your awareness back to the present moment.{'\n'}
              Open your eyes slowly and take a moment to notice how you feel.
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - If you experience dizziness or discomfort during deep breathing, return to your normal breathing pattern.{'\n'}- Ensure you're in a safe, quiet environment to prevent disturbances
              during the practice.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of deep breathing with visualization can be a valuable tool in managing chronic pain.{'\n'}
              By dedicating a few minutes each day to this technique, you may experience reduced stress{'\n'}
              and an enhanced sense of well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/M5tAzKxHgjM' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
