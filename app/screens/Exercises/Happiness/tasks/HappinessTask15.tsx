import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask15'>;

export default function HappinessTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask6.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Creative Writing Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-30 minutes daily</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in creative writing can enhance self-expression, boost imagination, and improve mental well-being. This exercise encourages you to explore your thoughts and emotions through the
              written word.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Free Writing</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Write continuously without worrying about grammar, spelling, or punctuation. Let your thoughts flow freely onto the paper or screen,
              exploring any topic that comes to mind.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Story Prompt</Text>
            <Text style={styles.stepText}>
              - **Duration**: 15 minutes{'\n'}- **Activity**: Choose a prompt such as "Write about a time you overcame a challenge" and craft a short story or narrative based on it. This helps in
              structuring your thoughts and enhancing creativity.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Reflect and Revise</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Review what you've written, reflecting on the emotions and ideas expressed. Consider any revisions or expansions to deepen the narrative or
              clarify your thoughts.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular creative writing can serve as a therapeutic outlet, allowing you to process experiences and express yourself authentically. Embrace this practice to nurture your mental and
              emotional health.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/4XmcNcCkp_Y' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
