import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask9'>;

export default function JealousyTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Writing Letters of Appreciation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-25 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>Writing letters of appreciation encourages teenagers to focus on positive relationships, fostering gratitude and reducing feelings of jealousy.</Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Reflect on Positive Influences</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage teens to think about individuals who have positively impacted their lives—such as friends, family members, teachers, or coaches.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 2: Compose the Letter</Text>
            <Text style={styles.stepText}>
              - **Activity**: Guide teens to write a heartfelt letter to one of these individuals, expressing specific reasons why they are grateful for their support or kindness.
            </Text>

            <Text style={styles.stepTitle}>📬 Step 3: Deliver the Letter</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage teens to deliver the letter in person or send it via mail or email, allowing them to share their appreciation directly with the recipient.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After delivering the letter, have teens reflect on how expressing gratitude made them feel and how it may have strengthened their relationship.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly expressing appreciation can help teenagers build stronger connections and foster a positive mindset, reducing negative emotions like jealousy.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/58wFkVJtA8M' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
