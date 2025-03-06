import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask8'>;

export default function LonelinessTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Practicing Gratitude</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes daily</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Practicing gratitude involves recognizing and appreciating the positive aspects of life. This exercise can enhance well-being, improve mood, and foster a sense of connection, helping to
              alleviate feelings of loneliness. By focusing on what you're thankful for, you can shift your perspective and cultivate a more positive outlook.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Start a Gratitude Journal</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Dedicate a notebook or digital document to your gratitude practice. Each day, write down three things you're grateful for. They
              can be significant events or simple pleasures, such as a kind gesture from a friend or enjoying your favorite meal.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌅 Step 2: Reflect on Positive Experiences</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Take a moment to reflect on recent positive experiences. Reliving these moments can boost your mood and reinforce positive
              feelings.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}💌 Step 3: Express Gratitude to Others</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Write a letter or message to someone you're thankful for, expressing your appreciation for their presence in your life. Sharing
              gratitude can strengthen relationships and enhance social connections.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌳 Step 4: Engage in Mindful Appreciation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Spend a few minutes each day mindfully observing your surroundings. Appreciate the beauty in nature, the comfort of your
              environment, or any aspect of your daily life that brings you joy.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘 Step 5: Practice Gratitude Meditation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Engage in a short meditation focusing on gratitude. Close your eyes, take deep breaths, and concentrate on the things you're
              thankful for. This practice can enhance mindfulness and emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating gratitude into your daily routine can lead to a more positive outlook and improved mental health. By acknowledging and appreciating the good in your life, you can create a
              buffer against negative emotions and foster a deeper sense of connection with others.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/6ubB_rqof9M' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
