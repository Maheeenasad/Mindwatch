import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask7'>;

export default function PainTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Writing About Feelings</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Writing about your feelings can help you understand and manage your emotions, which is beneficial for your overall well-being. This exercise will guide you through a process of
              expressive writing to explore your thoughts and feelings.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Set Up Your Writing Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Find a quiet and comfortable place where you can write without interruptions. Gather your writing materials, such as a notebook
              and pen, or set up your computer if you prefer typing.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 2: Allocate Time for Writing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Decide on a specific amount of time for your writing session, typically 15-20 minutes. Set a timer to help you focus solely on
              writing during this period.
            </Text>

            <Text style={styles.stepTitle}>🖊️ Step 3: Write Continuously</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Begin writing about your current thoughts and feelings. Don't worry about grammar, spelling, or punctuation. The goal is to
              express yourself freely without self-censorship.
            </Text>

            <Text style={styles.stepTitle}>💭 Step 4: Reflect on Your Writing</Text>
            <Text style={styles.stepText}>
              - **Activity**: After your writing session, take a few moments to read over what you've written. Reflect on any insights or patterns you notice in your thoughts and feelings.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Discuss Your Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: If you feel comfortable, share your reflections with a trusted friend, family member, or therapist. Discussing your experience can
              provide additional perspectives and support.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Regularly writing about your feelings can enhance self-awareness and emotional regulation, contributing to better pain management and mental health.</Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/7CcZ7gyFXv0' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
