import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask7'>;

export default function FearOfLossTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Expressive Journaling</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Expressive Journaling" is a therapeutic exercise aimed at helping teenagers process feelings of loss by articulating their emotions through writing. This activity encourages
              self-expression and can lead to greater emotional clarity and healing.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Your Materials</Text>
            <Text style={styles.stepText}>
              You'll need:
              {'\n'}- A notebook or journal
              {'\n'}- A pen or pencil
              {'\n'}- A comfortable, quiet space
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Set the Scene</Text>
            <Text style={styles.stepText}>
              Find a quiet place where you won't be disturbed. Ensure you're comfortable, whether sitting at a desk or lounging in a cozy chair. Consider playing soft background music to create a
              calming atmosphere.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 3: Start Writing</Text>
            <Text style={styles.stepText}>
              Begin by writing about your recent experiences with loss. Don't worry about grammar or spelling; focus on letting your thoughts and feelings flow onto the paper. You might start with
              prompts like:
              {'\n'}- "Today, I'm feeling..."
              {'\n'}- "I miss..."
              {'\n'}- "I'm struggling with..."
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Write Continuously</Text>
            <Text style={styles.stepText}>
              Write continuously for at least 10-15 minutes. If you run out of things to say, write about that. The goal is to keep the pen moving and allow your subconscious thoughts to emerge.
            </Text>

            <Text style={styles.stepTitle}>🗒️ Step 5: Reflect on What You've Written</Text>
            <Text style={styles.stepText}>
              After writing, take a few moments to read over what you've written. Reflect on any patterns or insights that emerge. This reflection can help you understand your emotions better and
              identify areas where you might need additional support.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Expressive journaling is a personal and private way to process complex emotions associated with loss. Regular practice can lead to improved emotional well-being and resilience. Remember,
              it's okay to seek support from trusted friends, family members, or professionals as you navigate your grief journey.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/o9M4idB2PII' }} // Process your feelings in writing 20 grief journal ideas
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
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
    backgroundColor: '#F0F8FF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#003366',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600',
  },
  stepsContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22,
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
