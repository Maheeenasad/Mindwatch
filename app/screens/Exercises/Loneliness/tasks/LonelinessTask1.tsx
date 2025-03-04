import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask1'>;

export default function LonelinessTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Loneliness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Talking to a Stuffed Friend</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in imaginative play with stuffed animals can help children express their feelings and alleviate loneliness. This activity encourages children to interact with their plush
              friends, fostering emotional development and companionship.
            </Text>

            <Text style={styles.stepTitle}>🧸 Step 1: Introduce the Stuffed Friend</Text>
            <Text style={styles.stepText}>
              - **Activity**: Ask your child to choose their favorite stuffed animal and introduce it as their new friend. Encourage them to name their stuffed friend and describe its personality
              traits.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 2: Share Feelings</Text>
            <Text style={styles.stepText}>
              - **Activity**: Invite your child to have a conversation with their stuffed friend. They can share their thoughts, feelings, or even narrate events from their day. This practice helps
              children articulate emotions and feel heard.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Role-Playing Scenarios</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage your child to role-play different scenarios with their stuffed friend, such as going on an adventure or attending a tea party. This imaginative play fosters
              creativity and reduces feelings of isolation.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 4: Storytime Together</Text>
            <Text style={styles.stepText}>
              - **Activity**: Have your child read a story to their stuffed friend or create a new story together. This activity enhances bonding and provides comfort through shared experiences.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Interacting with stuffed animals offers children a safe space to express themselves, nurturing emotional well-being and combating loneliness. Encouraging such activities can lead to
              improved social skills and a sense of companionship.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/Kqe0aRshd7c' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
