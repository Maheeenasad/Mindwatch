import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'BreathingTask12'>;

export default function BreathingTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/BreathingTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Relaxation Breathing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~12 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Relaxation Breathing is a powerful technique designed to release physical tension and promote a deep state of relaxation. This exercise helps in reducing anxiety, improving
              sleep, and fostering an overall sense of calmness.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🟦 Steps to Practice Progressive Relaxation Breathing</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Find a Comfortable Position:</Text> Sit in a chair or lie down in a quiet, dimly lit space where you won’t be disturbed.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Take a Deep Breath:</Text> Inhale deeply through your nose, feeling your lungs expand, then slowly exhale through your mouth.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Focus on Muscle Groups:</Text> Start with your feet. As you inhale, tense the muscles in your feet for about 5 seconds. Then, as you exhale,
              release all tension.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Move Upward:</Text> Continue this process, moving up to your legs, thighs, abdomen, chest, arms, shoulders, and finally, your face.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Synchronize with Breath:</Text> Each time you inhale, tense a muscle group. As you exhale, consciously let go of all tension.{'\n'}
              6. <Text style={{ fontWeight: 'bold' }}>Perform a Full-Body Scan:</Text> Once you've worked through each muscle group, take a few deep breaths and notice how relaxed your body feels.
              {'\n'}
              7. <Text style={{ fontWeight: 'bold' }}>End with Deep Breathing:</Text> Spend a couple of minutes taking slow, deep breaths, allowing yourself to fully immerse in the state of
              relaxation.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Tips for Effective Practice</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Practice Before Bed:</Text> This technique is highly effective in preparing the body and mind for restful sleep.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Stay Mindful:</Text> Pay attention to the sensations in your body as you release tension.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Use Guided Audio:</Text> If you're new to progressive relaxation, listening to a guided session can help.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Benefits of Progressive Relaxation Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reduces Physical Tension:</Text> Helps in relieving muscle tightness caused by stress.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Enhances Sleep Quality:</Text> Prepares the body for deep, restorative sleep.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Lowers Anxiety and Stress:</Text> Calms the nervous system and promotes relaxation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/suzElyDrM6g' }} // Guided Progressive Muscle Relaxation
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
