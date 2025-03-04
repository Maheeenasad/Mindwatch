import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask10'>;

export default function ForgivenessTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Acts of Kindness Challenge</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~1 week</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in acts of kindness not only benefits others but also enhances our own emotional well-being. This challenge encourages teenagers to perform daily acts of kindness over a week,
              fostering empathy, compassion, and a forgiving mindset.
            </Text>

            <Text style={styles.stepTitle}>🗓️ Step 1: Plan Your Acts of Kindness</Text>
            <Text style={styles.stepText}>Identify simple, meaningful acts you can perform each day. Examples include:</Text>
            <Text style={styles.bulletPoint}>• Complimenting a classmate or family member.</Text>
            <Text style={styles.bulletPoint}>• Helping a friend with their homework.</Text>
            <Text style={styles.bulletPoint}>• Writing a thank-you note to a teacher.</Text>
            <Text style={styles.bulletPoint}>• Picking up litter in your community.</Text>
            <Text style={styles.bulletPoint}>• Holding the door open for someone.</Text>
            <Text style={styles.bulletPoint}>• Sending an encouraging message to a friend.</Text>
            <Text style={styles.bulletPoint}>• Offering to help with household chores without being asked.</Text>

            <Text style={styles.stepTitle}>📝 Step 2: Keep a Kindness Journal</Text>
            <Text style={styles.stepText}>Each day, document the act of kindness you performed and reflect on:</Text>
            <Text style={styles.bulletPoint}>• How did it make you feel?</Text>
            <Text style={styles.bulletPoint}>• How did the recipient respond?</Text>
            <Text style={styles.bulletPoint}>• What did you learn from the experience?</Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Reflect on the Week</Text>
            <Text style={styles.stepText}>At the end of the week, review your journal entries and consider:</Text>
            <Text style={styles.bulletPoint}>• How has practicing kindness impacted your mood and outlook?</Text>
            <Text style={styles.bulletPoint}>• Have you noticed any changes in your relationships?</Text>
            <Text style={styles.bulletPoint}>• How can you continue to incorporate kindness into your daily life?</Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Consistently practicing acts of kindness can lead to increased empathy, improved relationships, and a more positive mindset, all of which contribute to personal growth and a forgiving
              attitude.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/26Yw4JUwP9c' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
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
