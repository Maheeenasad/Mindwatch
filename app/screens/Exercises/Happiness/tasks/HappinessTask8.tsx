import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask8'>;

export default function HappinessTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Acts of Kindness Challenge</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~1 week</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in acts of kindness has been shown to boost mood, increase feelings of connectedness, and enhance overall well-being. This challenge encourages you to perform simple, thoughtful
              actions that can make a positive impact on others and yourself.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Plan Your Acts of Kindness</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 15 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Brainstorm a list of kind acts you can perform over the
              next week. These can be small gestures like complimenting someone, helping a family member with chores, or writing a thank-you note to a teacher.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 2: Schedule Your Kind Acts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 15 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Assign each act of kindness to a specific day of the week.
              Having a plan can help ensure you follow through with your intentions.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Perform and Reflect</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> Varies daily{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Carry out your planned act of kindness each day.
              Afterward, take a few minutes to reflect on how it made you feel and how it might have impacted the recipient.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Share Your Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> At the end of the week, consider sharing your experiences
              with friends or family. Discussing the positive effects of kindness can inspire others to participate as well.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating acts of kindness into your routine not only benefits others but also enhances your own happiness and sense of purpose. Remember, no act of kindness is too small.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/7OzOGdfoUoQ' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
