import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask9'>;

export default function ShynessTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Expressing Opinions Confidently</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Expressing Opinions Confidently" exercise is designed to help teenagers overcome shyness by developing assertiveness and effective communication skills. This activity aims to
              empower teens to voice their thoughts and opinions respectfully and confidently in various social situations.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Understand Assertiveness</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Definition:</Text> Explain that assertiveness involves expressing one's opinions and needs openly and respectfully, without being passive or
              aggressive. It's a balanced communication style that respects both personal rights and those of others.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Identify Personal Opinions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Self-Reflection:</Text> Encourage your teenager to reflect on topics they feel strongly about, such as school policies, current events, or personal
              interests. Recognizing their own viewpoints is the first step toward expressing them confidently.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Practice Expressing Opinions</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Role-Playing:</Text> Engage in role-playing scenarios where your teenager practices stating their opinions on various topics. Focus on using "I"
              statements, maintaining eye contact, and employing a calm tone. For example, "I believe that..." or "In my opinion..."
            </Text>

            <Text style={styles.stepTitle}>🤗 Step 4: Active Listening and Respectful Dialogue</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Engagement:</Text> Teach the importance of active listening when others share their opinions. Encourage your teenager to acknowledge differing
              viewpoints respectfully and to engage in constructive discussions without feeling intimidated.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Apply in Real-Life Situations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Implementation:</Text> Encourage your teenager to apply these assertiveness skills in daily interactions, such as class discussions or group
              activities. Gradual exposure to expressing opinions in various settings can build confidence over time.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/LoiChAbQtTQ' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
