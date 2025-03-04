import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask5'>;

export default function IrritationTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Music Therapy</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Music therapy utilizes the therapeutic qualities of music to help children manage emotions, including irritation. Engaging in musical activities can enhance emotional expression, improve
              mood, and provide a constructive outlet for feelings.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Introduce the Concept of Music Therapy</Text>
            <Text style={styles.stepText}>
              - **Activity**: Explain to the child that music can influence our emotions and that engaging with music can help manage feelings like irritation. Discuss how different types of music can
              evoke various emotions.
            </Text>

            <Text style={styles.stepTitle}>🎵 Step 2: Explore Different Musical Instruments</Text>
            <Text style={styles.stepText}>
              - **Activity**: Provide a variety of simple instruments such as drums, tambourines, or maracas. Encourage the child to play these instruments, exploring different rhythms and volumes to
              express their current emotions. This hands-on exploration can help them channel their feelings constructively.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Sing Along to Favorite Songs</Text>
            <Text style={styles.stepText}>
              - **Activity**: Identify songs that the child enjoys and encourage them to sing along. Singing can be a powerful emotional release and can elevate mood. Discuss the lyrics and how the
              music makes them feel, fostering emotional awareness.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Create a Personalized Playlist</Text>
            <Text style={styles.stepText}>
              - **Activity**: Collaborate with the child to create a playlist of songs that help them feel calm or happy. This personalized playlist can serve as a tool for them to use whenever they
              feel irritated, promoting self-regulation.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Engage in Music and Movement</Text>
            <Text style={styles.stepText}>
              - **Activity**: Combine music with physical movement by encouraging the child to dance or move to the rhythm of the music. This combination can help release built-up energy associated
              with irritation and improve overall mood.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating music therapy into a child's routine offers a creative and enjoyable approach to managing irritation. Through active engagement with music, children can develop better
              emotional awareness and find healthy outlets for their emotions.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/BD7BYfKjJ2w' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
