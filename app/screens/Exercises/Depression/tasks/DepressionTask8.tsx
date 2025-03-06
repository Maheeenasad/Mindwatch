import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'DepressionTask8'>;

export default function DepressionTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/DepressionTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Stretching & Yoga</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Incorporating stretching and yoga into your routine can significantly improve mental health by reducing stress and alleviating symptoms of depression. These practices promote relaxation,
              enhance flexibility, and foster a mind-body connection.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Set Up a Comfortable Space</Text>
            <Text style={styles.stepText}>Find a quiet area where you can move freely. Use a yoga mat or a soft surface to ensure comfort during exercises.</Text>

            <Text style={styles.stepTitle}>🕰️ Step 2: Allocate Time for Practice</Text>
            <Text style={styles.stepText}>Dedicate approximately 20 minutes daily for your stretching and yoga routine. Consistency enhances the benefits of these practices.</Text>

            <Text style={styles.stepTitle}>🌬️ Step 3: Begin with Deep Breathing</Text>
            <Text style={styles.stepText}>
              Start by sitting comfortably. Close your eyes and take deep breaths, inhaling through your nose and exhaling through your mouth. This helps center your mind and prepares your body for
              movement.
            </Text>

            <Text style={styles.stepTitle}>🧍‍♀️ Step 4: Perform Gentle Stretches</Text>
            <Text style={styles.stepText}>
              Engage in gentle stretches to warm up your muscles. Focus on areas where you feel tension, such as the neck, shoulders, and back. Hold each stretch for a few breaths, allowing your body
              to relax into the position.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Practice Yoga Poses</Text>
            <Text style={styles.stepText}>Incorporate yoga poses known to reduce stress and improve mood. Here are a few to consider:</Text>
            <Text style={styles.bulletPoint}>
              • <Text style={{ fontWeight: 'bold' }}>Child's Pose (Balasana):</Text> Kneel on the floor, sit back on your heels, and stretch your arms forward, lowering your chest toward the ground.
              This pose promotes relaxation and calms the mind.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={{ fontWeight: 'bold' }}>Seated Forward Bend (Paschimottanasana):</Text> Sit with your legs extended, and gently reach toward your toes, folding forward. This stretch
              soothes anxiety and reduces fatigue.
            </Text>
            <Text style={styles.bulletPoint}>
              • <Text style={{ fontWeight: 'bold' }}>Legs Up the Wall (Viparita Karani):</Text> Lie on your back with your legs extended up against a wall. This restorative pose helps alleviate
              symptoms of depression and calms the nervous system.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 6: Cool Down and Reflect</Text>
            <Text style={styles.stepText}>
              Conclude your session with a few minutes of lying down in Savasana (Corpse Pose), allowing your body to absorb the benefits of the practice. Reflect on how you feel and acknowledge any
              positive changes in your mood or physical state.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular engagement in stretching and yoga can be a valuable tool in managing depression and enhancing overall well-being. Listen to your body, move at your own pace, and embrace this
              time as an act of self-care.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/UsK8L3VA3VU' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    marginLeft: 10,
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
