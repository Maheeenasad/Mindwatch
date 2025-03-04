import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask3'>;

export default function FrustrationTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Deep Breathing with Balloons</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Deep Breathing with Balloons is a calming exercise that teaches children to manage frustration and anxiety through controlled breathing. By visualizing inflating a balloon, children can
              learn to regulate their breath, promoting relaxation and emotional balance.
            </Text>

            <Text style={styles.stepTitle}>🎈 Step 1: Introduction to Balloon Breathing</Text>
            <Text style={styles.stepText}>
              Explain to the child that they will learn a special way to breathe, imagining their belly as a big balloon. When they breathe in, the balloon fills up; when they breathe out, it
              deflates. This technique helps in calming down when feeling upset or frustrated.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 2: Demonstrate Deep Breathing</Text>
            <Text style={styles.stepText}>
              Sit comfortably with the child. Place your hands on your belly and take a slow, deep breath in through your nose, allowing your belly to rise like inflating a balloon. Then, exhale
              slowly through your mouth, letting the belly fall. Encourage the child to mimic your actions.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 3: Visualization Exercise</Text>
            <Text style={styles.stepText}>
              Ask the child to close their eyes and imagine their favorite colored balloon in their belly. As they inhale, the balloon inflates; as they exhale, it deflates. This visualization makes
              the breathing exercise more engaging and effective.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Practice Together</Text>
            <Text style={styles.stepText}>
              Practice the balloon breathing exercise together for a few minutes. Inhale deeply for a count of four, hold for a count of two, and exhale slowly for a count of six. Repeat this cycle
              5-7 times, maintaining a calm and encouraging environment.
            </Text>

            <Text style={styles.stepTitle}>💬 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After practicing, discuss with the child how they feel. Do they notice any changes in their mood or body? Encourage them to use this breathing technique whenever they feel frustrated or
              anxious.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Teaching children deep breathing techniques like Balloon Breathing equips them with a valuable tool for self-regulation. Regular practice can enhance their ability to manage emotions and
              reduce stress, contributing to overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/2PcCmxEW5WA' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
