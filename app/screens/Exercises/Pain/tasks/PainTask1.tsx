import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask1'>;

export default function PainTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Pain.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Breathing Exercise for Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Deep breathing exercises can help children manage pain by promoting relaxation and reducing stress. This activity teaches a simple breathing technique to help alleviate discomfort.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Have your child sit or lie down in a comfortable position. Ensure the environment is quiet and free from distractions.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Introduce Belly Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Explain to your child that they will be practicing "belly breathing." This involves taking deep breaths that fill the belly, not
              just the chest.
            </Text>

            <Text style={styles.stepTitle}>🐻 Step 3: Practice "Good Morning Bear" Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Guide your child to imagine they are a bear waking up from a restful sleep. Instruct them to: - Sit comfortably with a straight
              back. - Inhale deeply through the nose, filling the belly with air, while raising their arms slowly overhead. - Exhale slowly through the mouth, lowering their arms back down. - Repeat
              this process 5-7 times, maintaining a slow and steady rhythm.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After completing the breathing exercise, ask your child how they feel. Discuss any changes in their discomfort or mood.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of deep breathing exercises like the "Good Morning Bear" can empower children to manage pain and stress effectively, promoting overall well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/AJOuW-5opl4' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
