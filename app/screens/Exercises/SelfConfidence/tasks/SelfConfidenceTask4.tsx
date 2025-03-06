import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask4'>;

export default function SelfConfidenceTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Role-Playing Success</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-25 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Role-Playing Success" is an interactive activity designed to enhance children's self-confidence by allowing them to practice and embody successful behaviors in various scenarios.
              Through role-playing, children can develop problem-solving skills, improve communication, and build resilience.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 1: Choose a Scenario</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Collaborate with the child to select a scenario they might encounter, such as giving a presentation, resolving a conflict with
              a friend, or trying a new activity. Choosing relevant situations makes the role-play more meaningful.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Define Roles</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Assign roles for the scenario. The child can play themselves, while a parent, teacher, or peer can act as the other party
              involved. Defining roles helps set clear expectations for the role-play.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Act Out the Scenario</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Encourage the child to act out the scenario, expressing their thoughts and feelings openly. This practice allows them to navigate
              the situation in a safe environment, building confidence in their ability to handle similar real-life situations.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Reflect and Discuss</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After the role-play, discuss what went well and what could be improved. Ask questions like, “How did you feel during the
              role-play?” and “What would you do differently next time?” Reflecting helps reinforce learning and boosts self-awareness.
            </Text>

            <Text style={styles.stepTitle}>🔁 Step 5: Replay with Adjustments</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Based on the discussion, replay the scenario, incorporating any adjustments. Repetition with improvements reinforces confidence
              and skill development.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 6: Apply Skills in Real Life</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Encourage the child to apply the practiced skills in real-life situations. Celebrate their successes and discuss any challenges
              they faced, reinforcing their confidence in handling various scenarios.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/yeW_PnOeMyU' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
