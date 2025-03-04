import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask14'>;

export default function ForgivenessTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Rewriting the Story</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 mins</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Our personal narratives shape how we perceive and interact with the world. This exercise guides you to reflect on a past hurtful experience and transform your perspective by rewriting
              the story, fostering forgiveness and personal growth.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Identify the Hurtful Experience</Text>
            <Text style={styles.stepText}>
              Reflect on a specific incident where you felt wronged or hurt. Briefly write down the details of this event, focusing on your feelings and reactions at the time.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Analyze the Original Narrative</Text>
            <Text style={styles.stepText}>
              Examine the story you've written. Consider the following questions:
              {'\n'}- How did this event affect you emotionally and mentally?
              {'\n'}- What beliefs or assumptions did you form about yourself, others, or the world because of this event?
              {'\n'}- Are there any recurring patterns or themes in this narrative?
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Reframe the Narrative</Text>
            <Text style={styles.stepText}>
              Now, rewrite the story from a different perspective. Aim to incorporate empathy, understanding, and forgiveness. Consider these points:
              {'\n'}- What might have been the other person's perspective or circumstances during the event?
              {'\n'}- How has this experience contributed to your personal growth or resilience?
              {'\n'}- Can you identify any positive outcomes or lessons learned from this event?
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 4: Reflect on the New Narrative</Text>
            <Text style={styles.stepText}>
              Compare the original and rewritten stories. Reflect on the following:
              {'\n'}- How does the new narrative make you feel compared to the original?
              {'\n'}- Has your perspective on the event or the individuals involved shifted?
              {'\n'}- Do you notice any changes in your feelings of resentment, anger, or hurt?
            </Text>

            <Text style={styles.stepTitle}>💡 Step 5: Integrate the Insights</Text>
            <Text style={styles.stepText}>
              Consider how you can apply the insights gained from this exercise to your daily life:
              {'\n'}- How can you adopt a more empathetic and forgiving mindset in future interactions?
              {'\n'}- Are there other past experiences that could benefit from this reframing approach?
              {'\n'}- How can this new perspective enhance your overall well-being and relationships?
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/t8hRd6X886I' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
