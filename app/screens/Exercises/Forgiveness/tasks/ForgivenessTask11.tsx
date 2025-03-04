import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask11'>;

export default function ForgivenessTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Forgiveness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Self-Compassion Reflection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 mins</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Developing self-compassion involves treating yourself with the same kindness and understanding as you would offer to a friend. This exercise guides you through a reflective process to
              enhance self-compassion, promoting emotional well-being and resilience.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Reflect on a Challenging Experience</Text>
            <Text style={styles.stepText}>Think about a recent situation that was difficult or caused you emotional pain. Briefly describe the event, focusing on your feelings and reactions.</Text>

            <Text style={styles.stepTitle}>💭 Step 2: Recognize Common Humanity</Text>
            <Text style={styles.stepText}>
              Acknowledge that experiencing difficulties is a universal part of being human. Reflect on how others might have faced similar situations, reminding yourself that you are not alone.
            </Text>

            <Text style={styles.stepTitle}>❤️ Step 3: Practice Self-Kindness</Text>
            <Text style={styles.stepText}>Consider what you would say to a friend in a similar situation. Write a compassionate message to yourself, offering words of comfort and support.</Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Engage in a Self-Compassion Meditation</Text>
            <Text style={styles.stepText}>
              Participate in a guided meditation focused on fostering self-compassion. This practice can help you connect with your inner self and cultivate a nurturing mindset.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/iswl0BNtSyU' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
