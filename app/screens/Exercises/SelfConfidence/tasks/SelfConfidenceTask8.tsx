import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask8'>;

export default function SelfConfidenceTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Positive Self-Talk</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Positive Self-Talk" activity is designed to help teenagers recognize and transform negative internal dialogues into encouraging and supportive self-communication. By practicing
              positive self-talk, individuals can enhance their self-esteem, resilience, and overall mental well-being.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Identify Negative Self-Talk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Reflect on recent situations where you felt stressed or overwhelmed. Write down any negative thoughts or self-criticisms you
              experienced during those moments.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Reframe Negative Thoughts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Review the negative thoughts you've identified and challenge their validity. Replace them with positive, constructive statements.
              For example, change "I can't do this" to "I can learn and improve with practice."
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Create Positive Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Develop a list of positive affirmations that resonate with you, such as "I am capable," "I am worthy," or "I handle challenges
              with grace." Write them down and place them where you'll see them daily.
            </Text>

            <Text style={styles.stepTitle}>🪞 Step 4: Practice Mirror Talk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Stand in front of a mirror and recite your positive affirmations aloud. Observe your posture and facial expressions, ensuring they
              align with the confidence you're cultivating.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Implement Daily Positive Self-Talk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Routine:</Text> Incorporate positive self-talk into your daily routine, especially during challenging situations. Consistent practice will help
              reinforce a positive mindset and boost self-confidence.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/71_NkXgAK1g' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
