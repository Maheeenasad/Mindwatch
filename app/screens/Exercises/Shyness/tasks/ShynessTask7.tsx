import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask7'>;

export default function ShynessTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Social Role-Playing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-40 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Social Role-Playing" exercise is designed to help teenagers overcome shyness by engaging in role-playing scenarios that mimic real-life social interactions. This activity aims to
              enhance communication skills, build confidence, and improve the ability to navigate various social situations.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Discuss the Purpose of Role-Playing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Introduction:</Text> Explain to your teenager that role-playing is a technique used to practice and improve social skills in a safe and supportive
              environment. It allows them to explore different responses and behaviors without real-world consequences.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Identify Challenging Social Situations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Brainstorming:</Text> Collaborate to identify specific social situations that your teenager finds challenging, such as joining a group
              conversation, declining a request, or expressing disagreement. Prioritize scenarios that are relevant and applicable to their daily life.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Develop Role-Playing Scenarios</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Scenario Creation:</Text> Create detailed scenarios based on the identified challenges. Define the setting, the roles involved, and the desired
              outcome. For example, practicing how to introduce oneself at a social gathering or how to handle peer pressure situations.
            </Text>

            <Text style={styles.stepTitle}>🤗 Step 4: Engage in Role-Playing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Practice:</Text> Take turns acting out the scenarios, with one person playing the role of the teenager and the other acting as the peer or adult.
              Encourage the use of appropriate body language, tone of voice, and active listening skills during the role-play.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect and Provide Feedback</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Debriefing:</Text> After each role-playing session, discuss what went well and areas for improvement. Provide constructive feedback and encourage
              self-reflection to help your teenager recognize their progress and identify strategies for future interactions.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/RMUv1haZLoM' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
