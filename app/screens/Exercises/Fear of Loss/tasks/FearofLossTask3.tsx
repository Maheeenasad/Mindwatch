import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask3'>;

export default function FearOfLossTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Hug Therapy</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Hug Therapy is a comforting activity that utilizes the power of touch to provide emotional support to children experiencing grief. This exercise encourages the release of oxytocin, known
              as the "bonding hormone," which can alleviate stress and promote feelings of safety and connection.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Create a Safe Space</Text>
            <Text style={styles.stepText}>Find a quiet, comfortable area where the child feels secure. Ensure this space is free from distractions to allow for focused interaction.</Text>

            <Text style={styles.stepTitle}>🤗 Step 2: Introduce the Hug Jar Activity</Text>
            <Text style={styles.stepText}>
              Introduce the concept of a "Hug Jar," where the child can draw a hug whenever they feel the need for comfort. This activity provides a tangible way for children to seek and receive
              affection, reinforcing their sense of security.
            </Text>

            <Text style={styles.stepTitle}>👐 Step 3: Practice the Butterfly Hug Technique</Text>
            <Text style={styles.stepText}>
              Teach the child the Butterfly Hug, a self-soothing method where they cross their arms over their chest and gently tap their shoulders alternately. This technique can help them manage
              feelings of anxiety and sadness.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Encourage Open Dialogue</Text>
            <Text style={styles.stepText}>
              While engaging in these activities, encourage the child to express their feelings. Open conversations about their emotions can help them process their grief more effectively.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating Hug Therapy into a child's routine can provide immense comfort during times of loss. These simple yet powerful gestures of affection can help them feel supported and
              understood as they navigate their grief journey.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/yveU1xJ9BG8' }} // Brief Grief Activity: Hug
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
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
    backgroundColor: '#F0F8FF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#003366',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600',
  },
  stepsContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22,
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
