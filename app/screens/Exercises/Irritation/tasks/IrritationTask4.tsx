import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask4'>;

export default function IrritationTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided breathing is a calming technique that helps children manage irritation and stress by focusing on their breath. This exercise promotes mindfulness, reduces anxiety, and enhances
              emotional regulation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Explain the Importance of Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Discuss with the child how deep breathing can help calm the mind and body. Explain that focusing on their breath can reduce
              feelings of irritation and help them feel more relaxed.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Practice Belly Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Have the child sit or lie down comfortably. Instruct them to place one hand on their belly and the other on their chest. Guide
              them to take a deep breath in through the nose, filling the belly with air, and then slowly exhale through the mouth. Repeat this process several times, encouraging them to notice the
              rise and fall of their belly.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Introduce "Smell the Flower, Blow Out the Candle"</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Ask the child to imagine holding a flower in one hand and a candle in the other. Instruct them to inhale deeply through the nose
              as if smelling the flower, then exhale slowly through the mouth as if blowing out the candle. This visualization can make the breathing exercise more engaging.
            </Text>

            <Text style={styles.stepTitle}>🖐️ Step 4: Teach "Take-Five Breathing"</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Have the child hold one hand up like a starfish. Using the index finger of the other hand, guide them to trace up and down each
              finger. Instruct them to breathe in while tracing up and breathe out while tracing down. This tactile method helps maintain focus on the breath.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After practicing the breathing exercises, discuss with the child how they felt during the process. Ask if they noticed any changes
              in their mood or physical sensations, reinforcing the connection between breathing and emotional state.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating guided breathing exercises into daily routines can empower children with tools to manage irritation and stress. These techniques promote mindfulness, enhance
              self-awareness, and contribute to overall emotional well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/RiMb2Bw4Ae8' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
