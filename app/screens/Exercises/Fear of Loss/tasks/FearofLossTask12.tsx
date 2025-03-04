import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask12'>;

export default function FearOfLossTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Connection Strengthening</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Connection Strengthening" is an exercise designed to enhance your social bonds, which can be particularly beneficial when dealing with the fear of loss. Strong social connections are
              linked to improved emotional well-being and resilience.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Identify Key Relationships</Text>
            <Text style={styles.stepText}>Reflect on the important relationships in your life. Consider family members, friends, or colleagues who provide support and positivity.</Text>

            <Text style={styles.stepTitle}>📞 Step 2: Reach Out</Text>
            <Text style={styles.stepText}>
              Contact one or more of these individuals. This could be through a phone call, video chat, or in-person meeting. Express your appreciation for their presence in your life.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Engage in Active Listening</Text>
            <Text style={styles.stepText}>
              During your interaction, practice active listening. Focus fully on what the other person is saying without planning your response. This fosters deeper understanding and connection.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Plan a Shared Activity</Text>
            <Text style={styles.stepText}>
              Schedule a future activity together, such as a walk, a meal, or a hobby you both enjoy. Shared experiences can strengthen bonds and create positive memories.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After your interaction, take a moment to reflect. How did connecting with this person make you feel? How might regular engagement with your social network alleviate fears of loss?
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Nurturing social connections is a vital component of emotional health. Regularly engaging with loved ones can build resilience and provide support during challenging times.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/L7YToPRI1Vo' }} // Enhance Mind Body Connection. 10 Minute Practice to Warm Up
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
