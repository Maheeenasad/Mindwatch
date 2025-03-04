import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask6'>;

export default function HappinessTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Vision Board Creation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Creating a vision board is a powerful exercise that helps you visualize your goals, dreams, and aspirations. By assembling images, words, and symbols that represent what you want to
              achieve, you can clarify your intentions and stay motivated on your journey.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Your Materials</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Collect materials such as a poster board, magazines, scissors, glue, markers, and any other decorative items you'd like to use. If you
              prefer a digital approach, tools like Canva can be helpful.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Reflect on Your Goals</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Take a moment to think about your short-term and long-term goals. Consider areas like academics, personal growth, relationships, and
              hobbies. Write down key words or phrases that encapsulate your aspirations.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 3: Select Visual Representations</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Browse through magazines or online resources to find images, quotes, and symbols that resonate with your goals. Cut or print them out,
              ensuring they align with the vision you have for your future.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Assemble Your Vision Board</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Arrange and glue your selected visuals onto the poster board or compile them digitally. Organize them in a way that feels inspiring and
              motivating to you.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Display your vision board in a place where you'll see it daily. Regularly viewing your goals can reinforce your commitment and inspire action toward achieving them.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/9GJazq5e4gM' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
