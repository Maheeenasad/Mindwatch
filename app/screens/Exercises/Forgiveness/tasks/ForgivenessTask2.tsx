import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask2'>;

export default function ForgivenessTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Storytelling of Kindness</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Sharing stories of kindness can help children understand the importance of empathy and forgiveness. This exercise encourages children to create and share their own stories, fostering a
              deeper appreciation for compassionate actions.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 1: Introduce the Concept of Kindness</Text>
            <Text style={styles.stepText}>Begin by discussing what kindness means. Ask the child to share examples of kind acts they have experienced or observed.</Text>

            <Text style={styles.stepTitle}>📝 Step 2: Create a Kindness Story</Text>
            <Text style={styles.stepText}>
              Encourage the child to think of a time when they showed kindness or when someone was kind to them. Guide them to create a short story based on this experience, focusing on the feelings
              and outcomes involved.
            </Text>

            <Text style={styles.stepTitle}>🎤 Step 3: Share the Story</Text>
            <Text style={styles.stepText}>
              Have the child share their story with family members or friends. This sharing reinforces the positive impact of kindness and allows for discussions about empathy and forgiveness.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After sharing, discuss how the act of kindness made them feel and how it affected others. Reflecting on these feelings can strengthen their understanding of empathy and the importance of
              forgiving others.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Storytelling is a powerful tool to instill values of kindness and forgiveness in children. By creating and sharing their own stories, children can internalize these virtues and apply
              them in their daily lives.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/kAo4-2UzgPo' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
