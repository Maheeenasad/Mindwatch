import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask6'>;

export default function ShynessTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Shyness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Initiating Small Talk</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Initiating Small Talk" exercise is designed to help teenagers overcome shyness by practicing the art of starting and maintaining casual conversations. This activity aims to enhance
              communication skills, build confidence, and foster better social interactions.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Understand the Importance of Small Talk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion:</Text> Talk with your teenager about the role of small talk in daily life. Explain how casual conversations can lead to meaningful
              connections and help in various social settings.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Learn Common Conversation Starters</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Brainstorming:</Text> Together, come up with a list of simple and open-ended questions that can initiate small talk, such as "What do you enjoy
              doing in your free time?" or "Have you seen any good movies lately?"
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Role-Play Scenarios</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Practice:</Text> Engage in role-playing exercises where one person starts a conversation using the prepared starters, and the other responds.
              Switch roles to ensure both get ample practice.
            </Text>

            <Text style={styles.stepTitle}>🤗 Step 4: Develop Active Listening Skills</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Engagement:</Text> Emphasize the importance of active listening by maintaining eye contact, nodding, and providing feedback during conversations.
              This not only shows interest but also encourages the speaker to share more.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Practice in Real-Life Settings</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Application:</Text> Encourage your teenager to apply these small talk techniques in real-life situations, such as at school or social gatherings,
              to build confidence and improve their social skills.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/IRG-YubP1rw' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
