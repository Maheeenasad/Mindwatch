import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask8'>;

export default function ImpatienceTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Assembling a Model</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Assembling a model is an engaging activity that promotes patience, attention to detail, and perseverance. This exercise guides you through the process of building a model, helping you
              develop these essential skills.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Choose Your Model</Text>
            <Text style={styles.stepText}>
              - **Activity**: Select a model kit that interests you, such as a car, airplane, or building. Ensure the difficulty level matches your experience to keep the challenge enjoyable.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 2: Read the Instructions Thoroughly</Text>
            <Text style={styles.stepText}>
              - **Activity**: Before starting, carefully read through the entire instruction manual. Understanding the steps beforehand will help prevent mistakes and reduce frustration.
            </Text>

            <Text style={styles.stepTitle}>🧩 Step 3: Organize Your Pieces</Text>
            <Text style={styles.stepText}>
              - **Activity**: Lay out all the pieces and tools you'll need. Organizing your workspace ensures a smoother assembly process and minimizes the chances of losing parts.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Assemble Step by Step</Text>
            <Text style={styles.stepText}>
              - **Activity**: Follow the instructions step by step, taking your time with each part. If you encounter difficulties, pause and reassess rather than rushing, which fosters patience.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 5: Add Finishing Touches</Text>
            <Text style={styles.stepText}>
              - **Activity**: Once assembled, you can paint or decorate your model as desired. This creative aspect enhances attention to detail and personalizes your project.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 6: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After completing the model, reflect on the process. How did practicing patience impact your experience? How can you apply this patience to other areas of your life?
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in model assembly not only results in a tangible creation but also strengthens patience and perseverance. These qualities are valuable in overcoming challenges and achieving
              long-term goals.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/7XX6ZYIFS5U' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
