import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask2'>;

export default function LonelinessTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Drawing Happy Moments</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-25 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Expressing emotions through art can be a powerful tool for children to process feelings of loneliness. This activity encourages children to draw moments that made them happy, helping
              them reconnect with positive experiences and emotions.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Gather Art Supplies</Text>
            <Text style={styles.stepText}>
              - **Activity**: Provide your child with drawing materials such as paper, crayons, markers, or colored pencils. Ensure a comfortable and quiet space for them to work.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 2: Reflect on Happy Moments</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage your child to think about a time when they felt very happy. This could be a family vacation, a fun day at school, or a special moment with friends or pets.
            </Text>

            <Text style={styles.stepTitle}>✏️ Step 3: Draw the Memory</Text>
            <Text style={styles.stepText}>
              - **Activity**: Ask your child to draw the happy moment they recalled. Remind them that the artwork doesn't need to be perfect; it's about expressing their feelings and memories.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Share the Story</Text>
            <Text style={styles.stepText}>
              - **Activity**: After completing the drawing, invite your child to share the story behind their artwork. Listen attentively and ask open-ended questions to encourage them to express
              their emotions and thoughts.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in art activities like drawing happy moments allows children to process and express their emotions constructively. This exercise can help alleviate feelings of loneliness by
              focusing on positive experiences and fostering open communication.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/Px5wLQqEbwU' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
