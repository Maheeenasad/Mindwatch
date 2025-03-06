import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask10'>;

export default function PainTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Aromatherapy with Essential Oils</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Aromatherapy involves using essential oils extracted from plants to promote physical and mental well-being.{'\n'}
              This exercise will guide you through using aromatherapy to help manage pain and enhance relaxation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1:{'\n'}Choose Your Essential Oil</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Lavender Oil</Text>: Known for its calming properties, it can help reduce pain and anxiety.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Peppermint Oil</Text>: Contains menthol, which has a cooling effect and can soothe muscle pain.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Eucalyptus Oil</Text>: Has anti-inflammatory properties that may relieve muscle and joint pain.{'\n'}
            </Text>

            <Text style={styles.stepTitle}>🌡️ Step 2:{'\n'}Dilute the Essential Oil</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Essential oils are potent and should be diluted before use to prevent skin irritation.{'\n'}- Mix 3-5 drops of your chosen
              essential oil with a tablespoon of a carrier oil (e.g., coconut, jojoba, or almond oil).{'\n'}
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3:{'\n'}Application Methods</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Topical Application</Text>:{'\n'}- Gently massage the diluted oil onto the area where you're experiencing pain, such as the neck, shoulders, or
              back.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Inhalation</Text>:{'\n'}- Add a few drops of the diluted oil to a tissue or cotton ball and inhale deeply.{'\n'}- Alternatively, use a
              diffuser to disperse the aroma in your room.{'\n'}
            </Text>

            <Text style={styles.stepTitle}>🧖‍♀️ Step 4:{'\n'}Relax and Breathe</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Find a comfortable position, close your eyes, and take slow, deep breaths.{'\n'}- Focus on the scent and allow your body to relax,
              helping to alleviate pain and tension.{'\n'}
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - Perform a patch test by applying a small amount of diluted oil to your skin and waiting 24 hours to check for any adverse reactions.{'\n'}- Avoid using essential oils near sensitive
              areas such as the eyes or mouth.{'\n'}- Consult with a healthcare professional before using essential oils, especially if you have any underlying health conditions or are taking
              medication.{'\n'}
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating aromatherapy into your routine can be a natural way to manage pain and promote relaxation.{'\n'}
              Always use essential oils responsibly to ensure a safe and effective experience.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/tcnqd6iupo8' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
