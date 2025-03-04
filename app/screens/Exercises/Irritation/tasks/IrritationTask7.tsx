import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask7'>;

export default function IrritationTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Stretching</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful stretching combines gentle physical movements with focused attention, helping teenagers manage irritation by promoting relaxation and body awareness. This practice encourages the
              release of physical tension and fosters a calm mind.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 1: Create a Calm Environment</Text>
            <Text style={styles.stepText}>
              - **Activity**: Find a quiet space where you won't be disturbed. Wear comfortable clothing that allows free movement. Consider playing soft, calming music to enhance relaxation.
            </Text>

            <Text style={styles.stepTitle}>🦶 Step 2: Begin with Deep Breathing</Text>
            <Text style={styles.stepText}>
              - **Activity**: Stand or sit comfortably. Close your eyes and take slow, deep breaths, inhaling through your nose and exhaling through your mouth. Focus on the sensation of your breath
              entering and leaving your body.
            </Text>

            <Text style={styles.stepTitle}>🧍 Step 3: Perform Gentle Neck Stretches</Text>
            <Text style={styles.stepText}>
              - **Activity**: Slowly tilt your head to the right, bringing your ear toward your shoulder. Hold for a few breaths, feeling the stretch on the left side of your neck. Repeat on the other
              side. Ensure movements are slow and deliberate, maintaining awareness of sensations.
            </Text>

            <Text style={styles.stepTitle}>🙆 Step 4: Shoulder Rolls</Text>
            <Text style={styles.stepText}>
              - **Activity**: Lift your shoulders toward your ears and then roll them back and down in a circular motion. Repeat this movement several times, synchronizing with your breath. Notice any
              release of tension in the shoulder area.
            </Text>

            <Text style={styles.stepTitle}>🧎 Step 5: Forward Bend</Text>
            <Text style={styles.stepText}>
              - **Activity**: Stand with feet hip-width apart. Gently bend forward at the hips, allowing your upper body to hang toward the floor. Keep your knees slightly bent. Hold this position for
              a few breaths, feeling the stretch in your hamstrings and lower back. Slowly rise back to standing.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 6: Seated Butterfly Stretch</Text>
            <Text style={styles.stepText}>
              - **Activity**: Sit on the floor with the soles of your feet touching and knees bent outward. Hold your feet with your hands and gently press your knees toward the floor. Maintain an
              upright posture and breathe deeply, feeling the stretch in your inner thighs.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating mindful stretching into your routine can help alleviate physical tension and promote mental clarity. By connecting movement with breath, you cultivate a harmonious
              relationship between body and mind, aiding in the management of irritation and stress.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/7kgZnJqzNaU' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
