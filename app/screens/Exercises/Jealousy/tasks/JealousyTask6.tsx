import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask6'>;

export default function JealousyTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Jealousy.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Journaling Positivity</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in positive journaling helps teenagers focus on the good aspects of their lives, fostering a positive mindset and reducing feelings of jealousy.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Introduction to Positive Journaling</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Discuss how writing about positive experiences can enhance well-being. Explain that journaling allows individuals to reflect on
              and appreciate the good moments in their lives.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🖊️ Step 2: Gratitude Journaling</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Encourage teenagers to write down three things they are grateful for each day. This practice shifts focus from negative to
              positive aspects, promoting a sense of contentment.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔄 Step 3: Reframing Negative Thoughts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Teach teens to identify negative thoughts and reframe them into positive ones. For example, changing "I can't do this" to "I will
              try my best and learn from the experience."
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎯 Step 4: Setting Positive Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Guide teenagers to write positive affirmations about themselves, reinforcing self-worth and confidence.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Step 5: Reflecting on Achievements</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Have teens reflect on their accomplishments, no matter how small, to build self-esteem and recognize their growth.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌈 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular positive journaling can help teenagers develop a more optimistic outlook, reducing negative emotions like jealousy and enhancing overall well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/TE9Vp7jpho8' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
