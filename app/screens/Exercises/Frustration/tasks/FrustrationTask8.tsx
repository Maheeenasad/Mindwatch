import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask8'>;

export default function FrustrationTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Music Therapy for Anger</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Music Therapy for Anger" exercise leverages the therapeutic power of music to help teenagers manage and process feelings of anger. Engaging with music can provide an emotional
              outlet, promote relaxation, and enhance self-awareness.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Identify Your Emotions Through Music</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Create a playlist of songs that reflect your current emotions. Listen to each track and note how it resonates with your feelings. This
              practice can help in acknowledging and understanding your anger. [Source: Positive Psychology](https://positivepsychology.com/music-therapy-activities-tools/)
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Lyric Analysis and Reflection</Text>
            <Text style={styles.stepText}>
              1. **Choose a song with expressive lyrics** that relate to your feelings of anger or frustration.{'\n'}2. **Reflect on the lyrics**, considering how they mirror your own experiences and
              emotions. This can provide insight into your feelings and promote emotional processing. [Source: Imagine Fort
              Collins](https://www.ftcollinsimagine.com/mental-health-blog/music-therapy-activities-for-teens/)
            </Text>

            <Text style={styles.stepTitle}>🥁 Step 3: Rhythmic Expression</Text>
            <Text style={styles.stepText}>
              1. **Engage in drumming or tapping exercises** to physically release tension associated with anger.{'\n'}2. **Use household items** like a desk or your lap to create rhythms that match
              your current emotional state. This activity can serve as a constructive outlet for anger. [Source: Columbia Blogs](https://blogs.cuit.columbia.edu/are2126/category/techniques/)
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Relaxation Through Music</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Listen to calming music or binaural beats designed to reduce anger and promote relaxation. Focus on your breathing and allow the music to
              soothe your mind. [Source: YouTube](https://www.youtube.com/watch?v=Omaq3CGHKAA)
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating music into your coping strategies can provide a healthy and effective way to manage anger. Through active engagement with music, you can explore your emotions, find
              relaxation, and develop greater emotional resilience.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/Omaq3CGHKAA' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
