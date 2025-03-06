import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask12'>;

export default function PainTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Acupressure Points for Pain</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Acupressure is a traditional Chinese medicine technique that involves applying pressure to specific points on the body{'\n'}
              to promote relaxation and alleviate pain. This exercise will guide you through using acupressure to manage pain effectively.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify Key Acupressure Points</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>LI-4 (Hegu)</Text>: Located between the base of your thumb and index finger on the back of your hand.{'\n'}
              Applying pressure here can help relieve general pain and headaches.{'\n'}- <Text style={{ fontWeight: 'bold' }}>LV-3 (Tai Chong)</Text>: Found on the top of your foot, in the webbing
              between your big toe and second toe.{'\n'}
              This point is believed to alleviate pain and reduce stress.{'\n'}- <Text style={{ fontWeight: 'bold' }}>ST-36 (Zusanli)</Text>: Located on the front of your lower leg, about four
              finger-widths below the kneecap,{'\n'}
              one finger-width lateral to the shinbone. Stimulating this point may help with knee, hip, and leg pain.
            </Text>

            <Text style={styles.stepTitle}>🌡️ Step 2: Apply Pressure</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Using your thumb or index finger, apply firm but comfortable pressure to each acupressure point.{'\n'}- Maintain the pressure for
              1-2 minutes while taking slow, deep breaths.{'\n'}- Repeat on the corresponding point on the other side of your body.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Incorporate Deep Breathing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: As you apply pressure, focus on your breath.{'\n'}
              Inhale deeply through your nose, allowing your abdomen to rise, and exhale slowly through your mouth.{'\n'}- This combination of acupressure and deep breathing can enhance relaxation and
              pain relief.
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - Avoid applying pressure to open wounds, swollen areas, or varicose veins.{'\n'}- If you experience sharp pain during acupressure, discontinue the practice and consult a healthcare
              professional.{'\n'}- Pregnant individuals should consult with a healthcare provider before practicing acupressure, as some points may induce labor.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of acupressure can be a valuable addition to your pain management routine.{'\n'}
              Always listen to your body and apply pressure mindfully to ensure a safe and effective experience.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/mnHAiMjVslQ' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
