import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask2'>;

export default function ShynessTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Storytelling Practice</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-25 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Storytelling Practice" exercise aims to help children overcome shyness by encouraging them to express themselves creatively. Engaging in storytelling can boost confidence, enhance
              communication skills, and provide a safe space for self-expression.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 1: Choose a Story Theme</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Selection:</Text> Encourage the child to select a theme or topic they are passionate about, such as animals, adventures, or fantasy worlds.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Create the Story</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Development:</Text> Guide the child in crafting a simple story with a beginning, middle, and end. Introduce characters, settings, and a basic plot.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Practice Telling the Story</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Rehearsal:</Text> Have the child practice narrating their story aloud, focusing on clear speech and expressive delivery.
            </Text>

            <Text style={styles.stepTitle}>👨‍👩‍👧‍👦 Step 4: Share the Story with Family</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Presentation:</Text> Arrange a family storytelling session where the child can share their story, fostering a supportive environment.
            </Text>

            <Text style={styles.stepTitle}>🤗 Step 5: Positive Reinforcement</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Encouragement:</Text> Provide positive feedback and celebrate the child's efforts to boost their confidence and encourage further expression.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/Slt1ysgA-xw' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
