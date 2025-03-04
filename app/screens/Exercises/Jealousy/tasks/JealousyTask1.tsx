import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask1'>;

export default function JealousyTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Jealousy.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Sharing is Caring</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-25 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Learning to share is a fundamental aspect of building healthy relationships and fostering empathy in children. Engaging in activities that promote sharing can help mitigate feelings of
              jealousy and encourage cooperative behavior.
            </Text>

            <Text style={styles.stepTitle}>🧩 Step 1: Collaborative Puzzle Building</Text>
            <Text style={styles.stepText}>
              - **Activity**: Provide a jigsaw puzzle and encourage children to work together to complete it. Emphasize the importance of sharing pieces and collaborating to achieve a common goal.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 2: Group Art Project</Text>
            <Text style={styles.stepText}>
              - **Activity**: Set up a large canvas or paper and supply various art materials. Guide the children to create a collective artwork, sharing tools and ideas throughout the process.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 3: Storytelling Circle</Text>
            <Text style={styles.stepText}>
              - **Activity**: Initiate a storytelling session where each child contributes a part of the story. This activity encourages listening, sharing ideas, and building a narrative together.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Sharing Personal Items</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage children to bring a favorite toy or book and share it with their peers for a short period. Discuss how sharing can lead to new friendships and experiences.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating sharing activities into daily routines can significantly reduce feelings of jealousy and promote a sense of community among children. These exercises not only teach the
              value of generosity but also enhance social skills and emotional intelligence.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/GL4ySEN_T5w' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
