import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask14'>;

export default function LonelinessTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Reflecting on Social Strengths</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Reflecting on your social strengths can enhance self-awareness and improve interpersonal relationships, thereby reducing feelings of loneliness. This exercise involves identifying and
              leveraging your inherent social skills.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Identify Your Social Strengths</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Take 10-15 minutes to list your top 3-5 social strengths. These could include active listening, empathy, humor, or the ability to
              resolve conflicts. Reflect on past interactions where these strengths were evident.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔍 Step 2: Seek External Feedback</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Reach out to 3-5 trusted individuals from different areas of your life (e.g., family, friends, colleagues) and ask them to share
              instances when they observed you at your social best. This external perspective can provide valuable insights.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧠 Step 3: Analyze and Reflect</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Compare your self-identified strengths with the feedback received. Note any common themes or surprising observations. Reflect on
              how these strengths have positively impacted your relationships.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Step 4: Develop an Action Plan</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose one social strength you'd like to enhance further. Set specific, achievable goals to practice this strength in your daily
              interactions. For example, if active listening is a strength, aim to practice it consciously in your next conversation.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📆 Step 5: Implement and Reflect</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Over the next week, intentionally apply your action plan in social situations. Keep a journal to document your experiences, noting
              any improvements in your interactions and feelings of connectedness.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              By recognizing and cultivating your social strengths, you can build more meaningful connections and alleviate feelings of loneliness. Continuous self-reflection and proactive engagement
              are key to nurturing these strengths.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/FeKCyhFWzfM' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
