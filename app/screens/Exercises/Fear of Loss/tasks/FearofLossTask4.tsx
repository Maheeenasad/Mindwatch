import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask4'>;

export default function FearOfLossTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Story of Strength</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Story of Strength" is a therapeutic activity designed to help children process feelings of loss by identifying and reflecting on personal strengths and resilience. Through storytelling,
              children can explore their inner resources and gain confidence in their ability to navigate challenging emotions.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              Collect the following items:
              {'\n'}- Blank paper or a notebook
              {'\n'}- Pens, pencils, or markers
              {'\n'}- Optional: Decorative items like stickers or glitter
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Create a Comfortable Environment</Text>
            <Text style={styles.stepText}>Find a quiet and cozy space where the child feels safe to express themselves. Ensure the area is free from distractions.</Text>

            <Text style={styles.stepTitle}>📝 Step 3: Introduce the Activity</Text>
            <Text style={styles.stepText}>
              Explain to the child that they will be creating a "Story of Strength," focusing on times when they faced challenges and how they overcame them. This can help them recognize their own
              resilience.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 4: Story Creation</Text>
            <Text style={styles.stepText}>
              Encourage the child to write or draw a story about a time they felt strong or overcame a difficult situation. This could be a real-life event or an imaginative tale where they are the
              hero.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Share and Reflect</Text>
            <Text style={styles.stepText}>
              After completing their story, invite the child to share it with you. Discuss the strengths they demonstrated and how those qualities can help them cope with current feelings of loss.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in the "Story of Strength" activity allows children to identify and celebrate their resilience. Recognizing their inner strengths can empower them to navigate grief and loss
              with greater confidence.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/dgoe77lYLp4' }} // Brief Grief Activity: Tree of Life
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
