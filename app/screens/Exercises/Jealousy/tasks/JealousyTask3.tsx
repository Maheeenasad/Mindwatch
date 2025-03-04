import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask3'>;

export default function JealousyTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Storytelling on Friendship</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25-35 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>Storytelling is a powerful tool to help children understand and value friendship, which can reduce feelings of jealousy and promote empathy.</Text>

            <Text style={styles.stepTitle}>📖 Step 1: Read a Friendship Story</Text>
            <Text style={styles.stepText}>- **Activity**: Select a story that highlights the importance of friendship. For example, "The Little Book Of Friendship" is an excellent choice.</Text>

            <Text style={styles.stepTitle}>🗣️ Step 2: Group Discussion</Text>
            <Text style={styles.stepText}>
              - **Activity**: After reading, engage the children in a discussion about the story. Ask questions like: - What did you like about the story? - How did the characters show friendship? -
              Have you ever experienced something similar?
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Role-Playing</Text>
            <Text style={styles.stepText}>
              - **Activity**: Divide the children into small groups and assign them scenes from the story to act out. This helps them internalize the lessons on friendship.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Create Their Own Friendship Stories</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage the children to write or draw their own stories about friendship. They can share these stories with the group, fostering a sense of community and understanding.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Through storytelling, children can explore the dynamics of friendship, learn to appreciate their friends, and develop empathy, which helps in reducing feelings of jealousy.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/D7jYa4Nitkk' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
