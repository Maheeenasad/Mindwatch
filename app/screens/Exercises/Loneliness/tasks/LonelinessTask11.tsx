import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask11'>;

export default function LonelinessTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Loneliness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Mindful Journaling</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Mindful journaling is a practice that combines mindfulness and expressive writing to enhance self-awareness and emotional well-being. By reflecting on your thoughts and feelings without
              judgment, you can gain insights into your inner experiences and address feelings of loneliness.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Set Up Your Journaling Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Find a quiet, comfortable space where you won't be disturbed. Gather your journaling materials, such as a notebook and pen, or use
              a digital device if you prefer.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘 Step 2: Center Yourself</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Before you begin writing, take a few deep breaths to center yourself. Allow your mind to settle and bring your attention to the
              present moment.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}✍️ Step 3: Begin Writing</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Start writing about your current thoughts and feelings. Don't worry about grammar or structure; let your words flow naturally.
              Focus on being honest and open with yourself.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔍 Step 4: Reflect on Your Entries</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After writing, read over your entries. Reflect on any patterns or insights that emerge. Consider how these reflections might
              inform your understanding of your feelings of loneliness.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📅 Step 5: Establish a Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Aim to incorporate mindful journaling into your routine, whether daily or weekly. Consistency can deepen your self-awareness and
              contribute to emotional well-being over time.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Mindful journaling is a personal journey toward understanding and accepting your emotions. By dedicating time to this practice, you nurture a compassionate relationship with yourself,
              which can alleviate feelings of loneliness and promote inner peace.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/Kmd6B7UvePo' }} actual video ID allowsFullscreenVideo allowsInlineMediaPlayback />
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
