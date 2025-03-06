import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask15'>;

export default function ShynessTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Body Language Awareness</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Body Language Awareness" exercise is designed to help adults overcome shyness by enhancing their understanding and control of non-verbal communication. This exercise focuses on
              recognizing and practicing positive body language to improve social interactions.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Self-Assessment of Current Body Language</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Action:</Text> Reflect on your typical body language during social interactions. Consider aspects like posture, eye contact, facial expressions,
              and gestures. Identify any habits that may convey shyness or discomfort.
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 2: Learn Positive Body Language Techniques</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Research and learn about positive body language cues that convey confidence and openness, such as standing upright, maintaining
              eye contact, and using open gestures.
            </Text>

            <Text style={styles.stepTitle}>🕵️‍♀️ Step 3: Mirror Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Stand in front of a mirror and practice adopting positive body language. Observe how these changes affect your overall demeanor
              and presence.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Apply in Real-Life Scenarios</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exercise:</Text> Implement the positive body language techniques in daily interactions. Start with low-stakes situations, like greeting a neighbor,
              and gradually apply them in more challenging social settings.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Reflect and Adjust</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After practicing, reflect on how the changes in your body language affected your interactions. Note any improvements in your
              confidence and the responses of others. Adjust your body language as needed to enhance communication.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/1sfM-xx7tHI' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
