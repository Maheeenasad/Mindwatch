import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask5'>;

export default function ShynessTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Acting in Mini-Sketches</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Acting in Mini-Sketches" exercise is designed to help children overcome shyness by engaging them in short, improvised acting scenarios. This activity encourages creative expression,
              enhances communication skills, and builds confidence in social interactions.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Explain the Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Introduction:</Text> Discuss with your child the concept of acting out short scenes or "mini-sketches." Explain that this is a fun way to explore
              different characters and situations, which can help them feel more comfortable expressing themselves.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Create Simple Scenarios</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Brainstorming:</Text> Work together to come up with simple, everyday scenarios that can be acted out, such as ordering food at a restaurant, asking
              for directions, or meeting a new friend. Keep the scenarios light-hearted and relatable.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Assign Roles and Act Out</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Role-Playing:</Text> Assign roles for each scenario and take turns acting them out. Encourage your child to express their character's emotions and
              reactions. This practice helps them explore different perspectives and enhances empathy.
            </Text>

            <Text style={styles.stepTitle}>🤗 Step 4: Encourage Creativity and Improvisation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Improvise:</Text> Allow your child the freedom to add their own twists to the scenarios. Encouraging improvisation fosters creativity and helps
              them think on their feet, reducing anxiety about social interactions.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect and Discuss</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Feedback:</Text> After each sketch, discuss what went well and what could be improved. Praise their efforts and highlight specific moments where
              they showed confidence or creativity. This reflection reinforces positive behavior and builds self-esteem.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/4E1G0UN-BeM' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
