import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask11'>;

export default function FearOfLossTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Rewriting Your Story</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Rewriting Your Story" is a narrative therapy exercise aimed at helping individuals reframe their experiences of loss. By reconstructing your personal narrative, you can gain a new
              perspective, promote healing, and empower yourself to move forward.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Reflect on Your Current Narrative</Text>
            <Text style={styles.stepText}>
              Take some time to write down your current story regarding the loss you've experienced. Include your thoughts, feelings, and beliefs about the event and its impact on your life.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Identify Limiting Beliefs</Text>
            <Text style={styles.stepText}>
              Review your narrative and highlight any limiting beliefs or negative patterns. These might include self-blame, feelings of helplessness, or thoughts of unworthiness.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Reframe the Narrative</Text>
            <Text style={styles.stepText}>
              Rewrite your story by focusing on your strengths, resilience, and the lessons learned from your experience. Emphasize personal growth and the ways you've adapted or overcome challenges.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Share Your New Story</Text>
            <Text style={styles.stepText}>
              Consider sharing your revised narrative with a trusted friend, family member, or therapist. Verbalizing your story can reinforce your new perspective and provide additional support.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Rewriting your story is a powerful tool in processing loss. By shifting your perspective, you can transform your experience into an opportunity for growth and self-discovery.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/O_MQr4lHm0c' }} // How changing your story can change your life | Lori Gottlieb | TED
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
