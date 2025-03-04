import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask4'>;

export default function JealousyTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mirror Affirmations</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>Mirror affirmations are a powerful tool to boost children's self-esteem and reduce feelings of jealousy by reinforcing positive self-beliefs.</Text>

            <Text style={styles.stepTitle}>🪞 Step 1: Introduction to Affirmations</Text>
            <Text style={styles.stepText}>
              - **Activity**: Explain to the children that affirmations are positive statements we say to ourselves to build confidence and self-worth. Discuss how believing in our own strengths can
              make us feel better and less jealous of others.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 2: Creating Personal Affirmations</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage each child to think of positive qualities about themselves. Assist them in crafting simple affirmations such as "I am kind," "I am strong," or "I am a good
              friend." Write these affirmations on sticky notes or index cards.
            </Text>

            <Text style={styles.stepTitle}>🪞 Step 3: Practicing in Front of the Mirror</Text>
            <Text style={styles.stepText}>
              - **Activity**: One at a time, have each child stand in front of a mirror, look into their own eyes, and repeat their affirmations aloud. Encourage them to say each affirmation with
              confidence and believe in the words they are speaking.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Decorating Affirmation Mirrors</Text>
            <Text style={styles.stepText}>
              - **Activity**: Provide small handheld mirrors and art supplies like stickers, markers, and glitter. Let the children decorate their mirrors, making them personal and special. This
              creative process reinforces the positive experience associated with affirmations.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly practicing mirror affirmations can help children internalize positive beliefs about themselves, reducing jealousy and promoting emotional well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/TjuaBJg7zWw' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
