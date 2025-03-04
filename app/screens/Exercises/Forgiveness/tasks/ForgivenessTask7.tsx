import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask7'>;

export default function ForgivenessTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Guided Meditation on Forgiveness</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Guided meditation is a practice that helps individuals focus their minds and achieve a state of relaxation. This exercise introduces teenagers to a guided meditation focused on
              forgiveness, promoting emotional healing and well-being.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              Encourage the teenager to sit or lie down in a quiet, comfortable place where they won't be disturbed. They can close their eyes to minimize distractions and focus inward.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Focus on Breathing</Text>
            <Text style={styles.stepText}>
              Guide them to take slow, deep breaths, inhaling through the nose and exhaling through the mouth. Focusing on the breath helps calm the mind and prepare for meditation.
            </Text>

            <Text style={styles.stepTitle}>💭 Step 3: Visualize Forgiveness</Text>
            <Text style={styles.stepText}>
              Ask them to bring to mind someone they feel has wronged them or a situation where they need to forgive themselves. Encourage them to visualize releasing any negative emotions associated
              with this person or event, allowing feelings of forgiveness and peace to enter.
            </Text>

            <Text style={styles.stepTitle}>🔁 Step 4: Repeat a Forgiveness Affirmation</Text>
            <Text style={styles.stepText}>
              Suggest silently repeating a phrase like, "I forgive and release," or "I choose peace over resentment," to reinforce the intention of forgiveness during the meditation.
            </Text>

            <Text style={styles.stepTitle}>🕊️ Step 5: Reflect and Conclude</Text>
            <Text style={styles.stepText}>
              After the meditation, encourage them to take a moment to notice how they feel. They might want to journal about their experience or simply acknowledge any changes in their emotions.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of guided meditation on forgiveness can help teenagers manage stress, release negative emotions, and cultivate a more forgiving and peaceful mindset.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/KW2ak-Tb7BM' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
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
