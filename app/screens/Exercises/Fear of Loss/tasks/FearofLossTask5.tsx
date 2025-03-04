import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask5'>;

export default function FearOfLossTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLoss.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gratitude Letters</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Gratitude Letters" is a therapeutic exercise aimed at helping teenagers cope with feelings of loss by focusing on the positive relationships in their lives. This activity encourages
              teens to express appreciation, thereby enhancing their emotional well-being and strengthening social bonds.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              Collect the following items:
              {'\n'}- Paper or a notebook
              {'\n'}- Pen or pencil
              {'\n'}- Optional: Envelopes and decorative materials like stickers or colored pens
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Reflect on Positive Relationships</Text>
            <Text style={styles.stepText}>
              Find a quiet space and take a few moments to think about people who have had a positive impact on your life. Consider family members, friends, teachers, or mentors who have supported
              you.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 3: Write the Gratitude Letter</Text>
            <Text style={styles.stepText}>
              Choose one person from your reflections and write a letter expressing your gratitude. Be specific about what they did and how it affected you. For example, "I appreciate how you always
              listened to me during tough times; it made me feel valued and understood."
            </Text>

            <Text style={styles.stepTitle}>📬 Step 4: Deliver the Letter</Text>
            <Text style={styles.stepText}>
              If possible, deliver the letter in person to observe their reaction and strengthen your connection. If that's not feasible, consider mailing or emailing it.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After delivering the letter, take some time to reflect on how the process made you feel. Did it change your perspective on your relationships or your feelings of loss?
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Engaging in the "Gratitude Letters" activity can help shift focus from loss to appreciation, fostering a sense of connection and emotional resilience.</Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/oHv6vTKD6lg' }} // An Experiment in Gratitude | The Science of Happiness
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
