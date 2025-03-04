import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask6'>;

export default function FearOfLossTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Reflection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Mindful Reflection" is a therapeutic exercise designed to help teenagers cope with feelings of loss by fostering self-awareness and emotional regulation. This activity encourages teens
              to observe their thoughts and emotions without judgment, promoting a healthier processing of grief.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>Choose a comfortable, quiet environment where you won't be disturbed. This could be a cozy corner in your home or a peaceful spot outdoors.</Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Practice Mindful Breathing</Text>
            <Text style={styles.stepText}>
              Sit or lie down in a comfortable position. Close your eyes and take slow, deep breaths. Focus your attention on the sensation of breathing, noticing the rise and fall of your chest with
              each inhale and exhale.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 3: Observe Your Thoughts and Emotions</Text>
            <Text style={styles.stepText}>
              As you continue to breathe mindfully, allow your thoughts and emotions to surface naturally. Observe them without trying to change or judge them. Acknowledge feelings of sadness, anger,
              or confusion as they arise, and let them pass like clouds in the sky.
            </Text>

            <Text style={styles.stepTitle}>🖋️ Step 4: Reflect Through Journaling</Text>
            <Text style={styles.stepText}>
              After your mindfulness session, take a few minutes to write down your observations. Reflect on the emotions and thoughts that emerged. Journaling can help externalize your feelings and
              provide clarity.
            </Text>

            <Text style={styles.stepTitle}>🌿 Step 5: Engage in a Grounding Activity</Text>
            <Text style={styles.stepText}>
              To conclude, engage in a simple grounding activity, such as taking a short walk, stretching, or listening to calming music. This helps reinforce a sense of presence and stability.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of "Mindful Reflection" can enhance emotional resilience and provide a constructive outlet for processing grief. Remember, it's okay to seek support from trusted
              individuals or professionals if needed.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/v-l0Tj0PdfM' }} // Guided Mindfulness Meditation for Grief and Sadness (10 Minutes)
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
