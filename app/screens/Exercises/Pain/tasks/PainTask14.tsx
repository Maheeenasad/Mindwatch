import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask14'>;

export default function PainTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gentle Walk in Nature</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in a gentle walk amidst nature can serve as a therapeutic activity,{'\n'}
              offering both physical and mental health benefits. Such walks can alleviate stress,{'\n'}
              improve mood, and aid in pain management.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Choose a Suitable Location</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Identify a nearby park, nature trail,{'\n'}
              or any green space that is safe and accessible for a gentle walk.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 2: Prepare Mentally and Physically</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Wear comfortable clothing and appropriate footwear.{'\n'}
              Before starting, take a few deep breaths to center yourself and set a calm pace.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 3: Engage Your Senses</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> As you walk, pay attention to the sights,{'\n'}
              sounds, and scents around you. Observing the natural environment can enhance{'\n'}
              mindfulness and distract from pain sensations.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Reflect and Journal</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After your walk, take a moment to reflect on how you feel.{'\n'}
              Consider jotting down any observations or emotions experienced during the walk{'\n'}
              to track your progress over time.
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - Choose a path that is even and free from obstacles to prevent falls.{'\n'}- Stay hydrated and avoid walking during extreme weather conditions.{'\n'}- Listen to your body; if you
              experience discomfort, take a rest or shorten the walk.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating gentle nature walks into your routine can be a valuable component{'\n'}
              of pain management, promoting both physical activity and mental relaxation.{'\n'}
              Remember to approach each walk with mindfulness and gratitude for the natural world around you.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/4syPbwuVebk' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
