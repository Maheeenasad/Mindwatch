import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask10'>;

export default function SelfConfidenceTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Volunteering to Help Others</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~60-90 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Volunteering to Help Others" activity encourages teenagers to engage in community service, fostering empathy, social responsibility, and self-confidence. By contributing to the
              well-being of others, teens can gain a sense of accomplishment and personal growth.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 1: Identify Volunteer Opportunities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Research local organizations or causes that resonate with you. Consider areas such as environmental conservation, animal
              welfare, education, or healthcare. In Lahore, opportunities are available with organizations like the Rising Sun Education & Welfare Society and the Pakistan Children's Heart Foundation.
            </Text>

            <Text style={styles.stepTitle}>📞 Step 2: Reach Out and Commit</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Contact the chosen organization to inquire about volunteer opportunities. Discuss how you can contribute, the time commitment
              required, and any necessary training or orientation sessions.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Engage in Volunteer Activities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Participate actively in the volunteer tasks assigned. Approach your responsibilities with enthusiasm and a willingness to learn.
              Collaborate with fellow volunteers and staff members to maximize your impact.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Reflect on Your Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> After completing your volunteer session, take time to reflect on your experience. Consider the following questions:
              {'\n'} - How did volunteering make you feel?
              {'\n'} - What challenges did you encounter, and how did you address them?
              {'\n'} - How did your efforts contribute to the community or cause?
              {'\n'} - In what ways did this experience influence your self-confidence and personal growth?
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Plan for Continued Involvement</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Routine:</Text> Based on your reflection, decide how you would like to continue your volunteer journey. This could involve committing to regular
              volunteer sessions, exploring different causes, or encouraging peers to join you in community service.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/4Ybrwm51oas' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
