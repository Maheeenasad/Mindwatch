import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask9'>;

export default function SelfConfidenceTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Trying Something New</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~45-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Trying Something New" activity encourages teenagers to step out of their comfort zones by engaging in unfamiliar experiences. This practice fosters adaptability, resilience, and
              self-confidence by demonstrating their ability to tackle new challenges.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Identify a New Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Choose an activity you've never tried before but have an interest in. This could be learning a musical instrument, trying a new
              sport, cooking a new recipe, or engaging in a creative hobby like painting or writing.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Research and Plan</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Gather information about the chosen activity. Understand the basics, any required materials, and beginner tips. Planning helps in
              setting realistic expectations and reduces anxiety about the unknown.
            </Text>

            <Text style={styles.stepTitle}>🚀 Step 3: Engage in the Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Dedicate time to actively participate in the new experience. Embrace any mistakes as part of the learning process. Remember, the
              goal is to explore and learn, not to achieve perfection on the first try.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After completing the activity, reflect on your feelings. Consider what you enjoyed, what was challenging, and how you handled
              those challenges. Recognize the courage it took to try something new and how it contributes to building your confidence.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 5: Set Future Goals</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Routine:</Text> Decide whether you'd like to continue with the new activity or try something else. Setting goals for future new experiences keeps
              the momentum of personal growth and confidence building.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/YbhDc-qeKLk' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
