import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask4'>;

export default function PainTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Imagery Story</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided imagery is a relaxation technique that uses mental visualization to improve mood and well-being. It can help children manage pain by diverting attention and promoting relaxation.
              This activity introduces a simple guided imagery exercise tailored for children.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Create a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Set up a quiet, comfortable space where your child can sit or lie down without distractions. Dim the lights and ensure the area is
              peaceful.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 2: Introduce Deep Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Encourage your child to close their eyes and take slow, deep breaths. Instruct them to inhale deeply through the nose, hold for a
              moment, and then exhale slowly through the mouth. Repeat this breathing pattern 3-5 times to promote relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 3: Begin the Guided Imagery</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Narrate a calming story that engages your child's imagination. For example: - "Imagine you're walking through a beautiful, serene
              forest. The sun is shining gently through the trees, and you can hear the soft rustling of leaves. As you walk, you feel a gentle breeze on your face and the soft ground beneath your
              feet. You come across a clear, sparkling stream and decide to sit by its edge, feeling completely at peace and comfortable."
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Engage the Senses</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Encourage your child to visualize and describe what they see, hear, feel, and smell in their imagined environment. This sensory
              engagement enhances the vividness of the imagery and deepens relaxation.
            </Text>

            <Text style={styles.stepTitle}>🕊️ Step 5: Gradual Return to Awareness</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After spending several minutes in the guided imagery, gently guide your child to become aware of their surroundings. Suggest they
              wiggle their fingers and toes, take a deep breath, and slowly open their eyes when ready.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Regular practice of guided imagery can empower children to manage pain and stress effectively, promoting overall well-being and resilience.</Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/ADHZgWxLAWU' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
