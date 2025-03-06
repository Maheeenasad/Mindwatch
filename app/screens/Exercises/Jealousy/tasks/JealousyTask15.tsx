import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask15'>;

export default function JealousyTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Social Media Detox</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              A social media detox helps reduce the negative impact of digital platforms on your mental health. This task focuses on helping you disconnect from social media, reflect on your habits,
              and regain balance.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Identify Your Social Media Habits</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Take a moment to reflect on your social media usage. How much time do you spend daily on platforms like Instagram, Facebook, or
              Twitter? Write down your observations.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌱 Step 2: Set Clear Goals for Your Detox</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Define what you hope to achieve during this detox. Is it to reduce anxiety, gain more focus, or reconnect with real-life
              relationships? Write down at least one goal.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Step 3: Design a Social Media-Free Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Remove apps from your phone or log out of your social media accounts. Create a space that encourages real-life connections and
              replace screen time with hobbies.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘‍♂️ Step 4: Focus on Mindfulness and Presence</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Practice mindfulness during conversations, meals, or walks. Be present and avoid checking your phone. Write down your reflections
              at the end of each day.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌻 Final Thought</Text>
            <Text style={styles.stepText}>
              The detox isn't just about stepping away from screens; it's about reclaiming control over your time and mental space. Use this opportunity for self-care and mindfulness.
            </Text>
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
