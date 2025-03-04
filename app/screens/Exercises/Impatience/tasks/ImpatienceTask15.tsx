import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask15'>;

export default function ImpatienceTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Building Something from Scratch</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~1-2 hours</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in hands-on creation can enhance patience, boost creativity, and provide a sense of accomplishment. This exercise guides you through building something from scratch to cultivate
              mindfulness and reduce impatience.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Choose a Project</Text>
            <Text style={styles.stepText}>
              - **Activity**: Select a simple project that interests you, such as building a birdhouse, crafting a piece of pottery, or assembling a model. Ensure it's something that aligns with your
              skills and resources.
            </Text>

            <Text style={styles.stepTitle}>📋 Step 2: Plan Your Steps</Text>
            <Text style={styles.stepText}>
              - **Activity**: Break down the project into manageable steps. Create a list of materials needed and outline each phase of the construction process. This planning fosters organization and
              reduces potential frustration.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Embrace the Process</Text>
            <Text style={styles.stepText}>
              - **Activity**: As you work on the project, focus on each step without rushing. Pay attention to the textures, sounds, and sensations involved. This mindfulness can transform the
              activity into a meditative practice.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Handle Challenges Calmly</Text>
            <Text style={styles.stepText}>
              - **Activity**: If you encounter difficulties, take a deep breath and approach the problem methodically. View challenges as opportunities to learn and develop resilience.
            </Text>

            <Text style={styles.stepTitle}>🏆 Step 5: Reflect on Your Achievement</Text>
            <Text style={styles.stepText}>
              - **Activity**: Upon completing the project, take time to appreciate your work. Reflect on the patience and effort invested, and acknowledge the skills you've developed or enhanced.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Building something from scratch not only results in a tangible product but also cultivates patience, mindfulness, and a deeper connection to the present moment. Embracing the creative
              process can lead to personal growth and satisfaction.
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
