import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask8'>;

export default function ShynessTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Joining a Club or Group</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Joining a Club or Group" exercise is designed to help teenagers overcome shyness by encouraging active participation in extracurricular activities. Engaging in clubs or groups that
              align with personal interests can foster a sense of belonging, enhance social skills, and boost self-confidence.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Identify Interests and Passions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Self-Reflection:</Text> Encourage your teenager to reflect on their hobbies and interests. Whether it's art, sports, music, or technology,
              identifying passions is the first step toward finding a suitable club or group.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 2: Research Available Clubs or Groups</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Exploration:</Text> Assist your teenager in researching clubs or groups at school or within the community that align with their interests. This
              could include school clubs, community organizations, or online communities.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 3: Attend an Introductory Meeting or Session</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Participation:</Text> Encourage your teenager to attend an initial meeting or session of a chosen club. This allows them to observe the
              environment, meet members, and assess their comfort level.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Engage and Contribute</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Active Involvement:</Text> Motivate your teenager to actively participate in club activities. Contributing ideas, volunteering for tasks, or
              collaborating on projects can enhance their sense of belonging and reduce feelings of shyness.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion:</Text> After participating, discuss the experience with your teenager. Reflecting on positive interactions and acknowledging challenges
              can help them navigate future social situations more confidently.
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
