import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask12'>;

export default function IrritationTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Progressive Muscle Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Progressive Muscle Relaxation (PMR) is a technique that involves systematically tensing and then relaxing different muscle groups in the body. This practice can help reduce physical
              tension associated with irritation and promote a state of calm.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Sit or lie down in a quiet, comfortable place where you won't be disturbed. Ensure your body is fully supported, and loosen any
              tight clothing.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Focus on Your Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Close your eyes and take slow, deep breaths. Inhale deeply through your nose, hold for a moment, and then exhale slowly through
              your mouth. Repeat this breathing pattern a few times to center yourself.
            </Text>

            <Text style={styles.stepTitle}>💪 Step 3: Tense and Relax Muscle Groups</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Starting from your feet and working up to your head, tense each muscle group for about 5 seconds, then release the tension and
              relax for 10-15 seconds. Notice the contrast between tension and relaxation.{'\n\n'}- <Text style={{ fontWeight: 'bold' }}>Feet:</Text> Curl your toes downward, then relax.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Calves:</Text> Tighten your calf muscles by pointing your toes upward, then relax.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Thighs:</Text> Squeeze
              your thigh muscles, then relax.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Abdomen:</Text> Tighten your stomach muscles, then relax.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Hands:</Text> Clench your fists, then relax.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Arms:</Text> Bend your elbows and tense your biceps, then
              relax.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Shoulders:</Text> Shrug your shoulders up toward your ears, then relax.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Face:</Text> Tense
              your facial muscles by squeezing your eyes shut and clenching your jaw, then relax.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 4: Enjoy the Relaxation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After completing the muscle groups, take a few moments to enjoy the sensation of relaxation throughout your body. Continue to
              breathe slowly and deeply, appreciating the calm state you've achieved.
            </Text>

            <Text style={styles.stepTitle}>🕰️ Step 5: Practice Regularly</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Incorporate PMR into your daily routine, especially during times of increased stress or irritation. Regular practice can enhance
              your ability to manage stress and maintain relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Progressive Muscle Relaxation is a simple yet effective technique to help manage physical tension and emotional stress. With regular practice, it can become a valuable tool in promoting
              overall well-being and resilience against daily stressors.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/1nZEdqcGVzo' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
