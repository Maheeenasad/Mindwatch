import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SadnessTask14'>;

export default function SadnessTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SadnessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Volunteering for a Good Cause</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~1-2 hours</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in volunteer work not only benefits the community but also enhances personal well-being by fostering a sense of purpose and connection. This exercise encourages you to
              participate in a volunteer activity, aiming to improve mood and reduce feelings of sadness.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 1: Identify Volunteer Opportunities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation</Text>: Research local organizations or community groups that align with causes you care about. Consider areas such as animal shelters,
              food banks, environmental clean-ups, or educational programs.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 2: Schedule Your Volunteer Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Reach out to the chosen organization to inquire about volunteer opportunities. Schedule a time that suits both you and the
              organization, ensuring you can commit fully to the activity.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Engage in the Volunteer Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Participate actively and mindfully in the volunteer work. Focus on the positive impact you're making and the connections you're
              building with others.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflect on Your Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection</Text>: After completing the activity, take time to reflect on how it made you feel. Consider any changes in your mood, sense of
              purpose, or connection to the community.
            </Text>

            <Text style={styles.stepTitle}>📓 Step 5: Document Your Insights</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Write down your thoughts and feelings about the experience. Note any positive changes in your emotional state and consider how
              regular volunteering might benefit your overall well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/kDd8nsFkbsA' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
