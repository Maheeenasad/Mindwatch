import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask9'>;

export default function IrritationTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Controlled Deep Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Controlled deep breathing is a simple yet powerful technique that helps manage irritation and stress by activating the body's relaxation response. For teenagers, practicing these
              exercises can enhance emotional regulation and promote a sense of calm.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Sit or lie down in a comfortable position. Ensure your back is straight, shoulders relaxed, and hands resting on your lap or by
              your sides.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Practice Diaphragmatic Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Place one hand on your chest and the other on your abdomen. Inhale deeply through your nose, allowing your abdomen to rise while
              keeping your chest relatively still. Exhale slowly through your mouth. Repeat this process for 5-10 breaths.
            </Text>

            <Text style={styles.stepTitle}>🔲 Step 3: Try Box Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Inhale through your nose for a count of four. Hold your breath for a count of four. Exhale through your mouth for a count of four.
              Hold your breath again for a count of four. Repeat this cycle for several rounds.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Engage in Alternate Nostril Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Use your right thumb to close your right nostril. Inhale deeply through your left nostril. Close your left nostril with your right
              ring finger, then release your right nostril and exhale through it. Inhale through your right nostril, close it, and exhale through your left nostril. Continue this pattern for several
              breaths.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Conclude with Mindful Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Return to normal breathing. Focus your attention on the sensation of air entering and leaving your nostrils. If your mind wanders,
              gently bring your focus back to your breath. Continue this mindful breathing for 2-3 minutes.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating controlled deep breathing into your daily routine can significantly reduce feelings of irritation and enhance overall well-being. These techniques are versatile and can be
              practiced anywhere, anytime you need to regain calm and focus.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/tEmt1Znux58' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
