import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask13'>;

export default function FrustrationTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Breathwork for Stress</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Breathwork for Stress" involves using specific breathing techniques to activate the body's relaxation response, thereby reducing stress and promoting mental clarity. Regular practice
              can enhance emotional well-being and resilience.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Diaphragmatic (Belly) Breathing</Text>
            <Text style={styles.stepText}>
              - **Duration**: 3 minutes{'\n'}- **Activity**: Sit or lie down in a comfortable position. Place one hand on your chest and the other on your abdomen. Inhale deeply through your nose,
              ensuring your diaphragm (not your chest) inflates with enough air to create a stretch in the lungs. Exhale slowly through your mouth. This technique increases oxygen intake and promotes
              relaxation. [Source: WebMD - Breathing Techniques for Stress Relief](https://www.webmd.com/balance/stress-management/stress-relief-breathing-techniques)
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Box Breathing</Text>
            <Text style={styles.stepText}>
              - **Duration**: 4 minutes{'\n'}- **Activity**: Inhale through your nose for a count of four. Hold your breath for another count of four. Exhale slowly through your mouth for a count of
              four. Hold your breath again for a count of four. Repeat this cycle for the duration. This method helps in calming the nervous system and improving focus. [Source: British Heart
              Foundation - Breathing Exercises](https://www.bhf.org.uk/informationsupport/heart-matters-magazine/wellbeing/breathing-exercises)
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: 4-7-8 Breathing</Text>
            <Text style={styles.stepText}>
              - **Duration**: 3 minutes{'\n'}- **Activity**: Inhale quietly through your nose for a count of four. Hold your breath for a count of seven. Exhale completely through your mouth, making a
              whoosh sound, for a count of eight. Repeat the cycle up to four times. This technique is known to reduce anxiety and help manage cravings. [Source: Healthline - 10 Breathing Techniques
              for Stress Relief](https://www.healthline.com/health/breathing-exercise)
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating these breathwork techniques into your daily routine can significantly reduce stress levels and enhance overall well-being. Consistency is key to experiencing the full
              benefits of these practices.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/K7qP3bxEHwk' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
