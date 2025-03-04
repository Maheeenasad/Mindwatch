import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask8'>;

export default function JealousyTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Self-Worth Exercises</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>Engaging in self-worth exercises helps teenagers recognize their intrinsic value, fostering self-esteem and reducing feelings of jealousy.</Text>

            <Text style={styles.stepTitle}>📝 Step 1: Positive Affirmation Creation</Text>
            <Text style={styles.stepText}>
              - **Activity**: Guide teenagers to write down positive affirmations about themselves, focusing on their strengths and qualities. Repeating these affirmations daily can reinforce
              self-worth.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 2: Vision Board Development</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage teens to create a vision board that represents their goals and aspirations. This visual representation can boost motivation and self-confidence.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Mindfulness Meditation</Text>
            <Text style={styles.stepText}>
              - **Activity**: Introduce mindfulness meditation practices to help teens become more aware of their thoughts and feelings, promoting self-acceptance and reducing negative self-talk.
            </Text>

            <Text style={styles.stepTitle}>📚 Step 4: Goal Setting</Text>
            <Text style={styles.stepText}>
              - **Activity**: Assist teenagers in setting realistic and achievable goals. Accomplishing these goals can enhance their sense of competence and self-worth.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular engagement in self-worth exercises can help teenagers build a strong sense of self, reducing negative emotions like jealousy and enhancing overall well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/3rQQskSgrwE' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
