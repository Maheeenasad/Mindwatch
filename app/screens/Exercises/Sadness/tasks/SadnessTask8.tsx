import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SadnessTask8'>;

export default function SadnessTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SadnessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Listening to Uplifting Podcasts</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with uplifting podcasts can provide teenagers with positive narratives, motivational insights, and a sense of connection, thereby alleviating feelings of sadness and promoting
              mental well-being. This activity encourages teens to explore and incorporate inspiring podcasts into their daily routines.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Understand the Benefits of Uplifting Content</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion</Text>: Recognize how consuming positive and motivational content can influence mood, provide new perspectives, and enhance overall
              mental health.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Explore Suitable Podcasts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Research and identify podcasts that resonate with your interests and offer uplifting messages. Consider genres like personal
              development, storytelling, or interviews with inspiring individuals.
            </Text>

            <Text style={styles.stepTitle}>🎧 Step 3: Select an Episode</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Choose a specific episode that appeals to you, perhaps one that addresses topics you're curious about or challenges you're facing.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflect on the Content</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After listening, take a few minutes to reflect on the key messages. Consider how the insights can be applied to your own life and
              how they influence your current mindset.
            </Text>

            <Text style={styles.stepTitle}>📆 Step 5: Incorporate into Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Schedule regular times to listen to uplifting podcasts, such as during commutes, workouts, or before bed, to maintain a consistent
              positive influence on your mood.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/l-XUP4Nyg-w' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
