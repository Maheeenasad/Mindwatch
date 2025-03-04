import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask9'>;

export default function FearOfLossTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLoss.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cognitive Reframing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Cognitive Reframing" is a therapeutic exercise aimed at helping adults manage feelings of loss by identifying and altering negative thought patterns. This technique encourages a more
              balanced and constructive perspective on challenging situations.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              Begin by acknowledging thoughts related to your loss that evoke strong negative emotions. Write down these thoughts to bring awareness to recurring patterns.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Examine the Evidence</Text>
            <Text style={styles.stepText}>
              Challenge each negative thought by assessing its validity. Ask yourself questions like: "What evidence supports this thought?" and "Is there evidence that contradicts it?" This critical
              evaluation helps in distinguishing facts from assumptions.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 3: Reframe the Thought</Text>
            <Text style={styles.stepText}>
              Transform the original negative thought into a more balanced statement. For example, replace "I'll never recover from this loss" with "This is a difficult time, but I have the strength
              and resources to heal over time."
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Record Your Reflections</Text>
            <Text style={styles.stepText}>
              Document the original negative thoughts alongside their reframed counterparts. Regularly reviewing these notes can reinforce positive thinking patterns and aid in emotional recovery.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Cognitive reframing is a powerful tool for managing grief and loss. By consciously shifting your perspective, you can navigate challenging emotions more effectively. Remember, seeking
              support from friends, family, or professionals is a sign of strength and can further facilitate the healing process.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/58RytIerkmc' }} // CBT and Reframing Thoughts With Cognitive Restructuring
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
