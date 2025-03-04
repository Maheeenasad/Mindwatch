import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask12'>;

export default function LonelinessTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Volunteering Activity</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>Varies based on activity</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in volunteer work not only benefits the community but also enhances personal well-being. Volunteering can provide a sense of purpose, reduce feelings of loneliness, and foster
              social connections.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 1: Identify Your Interests and Skills</Text>
            <Text style={styles.stepText}>
              - **Activity**: Reflect on causes you're passionate about and skills you can offer. Aligning your interests with volunteer opportunities ensures a fulfilling experience.
            </Text>

            <Text style={styles.stepTitle}>🌐 Step 2: Research Volunteer Opportunities</Text>
            <Text style={styles.stepText}>
              - **Activity**: Look for local organizations or online platforms that match your interests. Consider community centers, non-profits, or virtual volunteering options.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 3: Commit to a Schedule</Text>
            <Text style={styles.stepText}>- **Activity**: Determine how much time you can dedicate to volunteering. Consistency helps build relationships and a sense of community.</Text>

            <Text style={styles.stepTitle}>🤝 Step 4: Engage and Connect</Text>
            <Text style={styles.stepText}>- **Activity**: Participate actively in your chosen volunteer role. Engage with fellow volunteers and beneficiaries to build meaningful connections.</Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Reflect on Your Experience</Text>
            <Text style={styles.stepText}>- **Activity**: After volunteering, take time to reflect on how the experience affected your feelings of loneliness and overall well-being.</Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Volunteering is a powerful way to connect with others and contribute to your community. It offers an opportunity to build relationships, develop new skills, and find purpose, all of
              which can alleviate feelings of loneliness.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/N3VKDcTuMOI' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
