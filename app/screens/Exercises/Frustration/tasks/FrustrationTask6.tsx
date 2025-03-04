import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask6'>;

export default function FrustrationTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Frustration.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Frustration Journal</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Frustration Journal" exercise is designed to help teenagers identify and understand the sources of their frustration. By writing down their thoughts and feelings, they can gain
              clarity and develop effective coping strategies.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Set Up Your Journal</Text>
            <Text style={styles.stepText}>
              - **Choose a notebook or digital platform** that you feel comfortable writing in.{'\n'}- **Ensure privacy** so you can express yourself openly without concern.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Daily Reflection</Text>
            <Text style={styles.stepText}>
              1. **Allocate 10-15 minutes each day** to write about your feelings and experiences.{'\n'}2. **Focus on moments that triggered frustration**, detailing the situation and your reaction.
            </Text>

            <Text style={styles.stepTitle}>🔍 Step 3: Identify Patterns</Text>
            <Text style={styles.stepText}>
              1. **Review your entries weekly** to spot recurring themes or triggers.{'\n'}2. **Reflect on how you handled each situation** and the outcomes of your reactions.
            </Text>

            <Text style={styles.stepTitle}>💡 Step 4: Develop Coping Strategies</Text>
            <Text style={styles.stepText}>
              1. **Brainstorm alternative responses** to similar situations in the future.{'\n'}2. **Consider relaxation techniques**, such as deep breathing or mindfulness, to manage intense
              emotions.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 5: Seek Support</Text>
            <Text style={styles.stepText}>
              1. **Share your insights** with a trusted friend, family member, or counselor.{'\n'}2. **Discuss potential solutions** and gain different perspectives on handling frustration.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular journaling fosters self-awareness and emotional intelligence. By understanding the root causes of your frustration, you can navigate challenges more effectively and cultivate a
              balanced mindset.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/OqlwGjtBlhg' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
