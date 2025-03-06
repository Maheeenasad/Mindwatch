import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask10'>;

export default function FrustrationTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Visualization</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Guided Visualization" exercise utilizes the power of imagination to promote relaxation and manage frustration. By creating calming mental images, teenagers can redirect their focus
              from stressors to peaceful scenarios, aiding in emotional regulation.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🛠️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 2 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Sit or lie down in a quiet, comfortable place where you
              won't be disturbed. Ensure your body is relaxed, and take a few deep breaths to center yourself.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘 Step 2: Begin the Visualization</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Close your eyes and imagine a serene place, such as a
              beach or forest. Engage all your senses: feel the warmth of the sun, hear the gentle waves, and smell the fresh air. Allow yourself to fully immerse in this calming environment.{'\n'}
              <Text style={{ color: 'blue' }}>[Source: Newport Academy](https://www.newportacademy.com/resources/mental-health/positive-visualization/)</Text>
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 3: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 3 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Gently bring your awareness back to the present moment.
              Reflect on how the visualization made you feel and how you can use this technique in future situations to manage frustration.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Guided visualization is a powerful tool that can help shift focus from negative emotions to calming imagery, promoting relaxation and emotional balance. Regular practice can enhance your
              ability to manage stress and frustration effectively.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/g4iHKY2p5bY' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
