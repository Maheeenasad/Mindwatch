import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask7'>;

export default function JealousyTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Meditation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>Mindful meditation helps teenagers become aware of their thoughts and emotions, promoting emotional regulation and reducing feelings of jealousy.</Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Understanding Mindfulness</Text>
            <Text style={styles.stepText}>
              - **Activity**: Introduce the concept of mindfulness to teenagers, explaining how being present in the moment can help manage emotions and reduce stress.
            </Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Breathing Exercises</Text>
            <Text style={styles.stepText}>- **Activity**: Guide teens through deep breathing exercises, encouraging them to focus on their breath to anchor themselves in the present moment.</Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Body Scan Meditation</Text>
            <Text style={styles.stepText}>- **Activity**: Lead a body scan meditation, asking teens to pay attention to different parts of their body, promoting relaxation and bodily awareness.</Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflective Journaling</Text>
            <Text style={styles.stepText}>- **Activity**: After meditation, encourage teens to journal their experiences, noting any thoughts or emotions that arose during the practice.</Text>

            <Text style={styles.stepTitle}>🤝 Step 5: Group Discussion</Text>
            <Text style={styles.stepText}>- **Activity**: Facilitate a group discussion where teens can share their experiences and insights from the meditation and journaling exercises.</Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of mindful meditation can help teenagers develop better emotional regulation, reducing negative emotions like jealousy and enhancing overall well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/rZJIsuHITq0' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
