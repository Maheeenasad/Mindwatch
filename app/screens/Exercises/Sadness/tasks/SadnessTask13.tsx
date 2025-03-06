import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SadnessTask13'>;

export default function SadnessTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SadnessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Expressing Feelings through Art</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in art as a form of self-expression can be a powerful tool for processing and understanding emotions. This exercise encourages you to explore your feelings through creative
              art-making, fostering self-awareness and emotional release.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Gather Your Art Supplies</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation</Text>: Collect art materials that you feel comfortable using, such as colored pencils, markers, paints, or pastels. Choose a medium
              that allows you to express yourself freely.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Center Yourself</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Before beginning, take a few deep breaths to center yourself. Reflect on the emotions you're currently experiencing or those you'd
              like to explore through this exercise.
            </Text>

            <Text style={styles.stepTitle}>🖌️ Step 3: Create Your Artwork</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Allow your emotions to guide your art-making process. Focus on the act of creation rather than the final product. Let your
              feelings flow onto the paper or canvas without judgment.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflect on Your Creation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection</Text>: After completing your artwork, take a moment to observe it. Consider the colors, shapes, and forms you've used. Reflect on what
              emotions or thoughts arise as you view your creation.
            </Text>

            <Text style={styles.stepTitle}>📓 Step 5: Document Your Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Write down any insights or feelings that emerged during the process. This can help you gain a deeper understanding of your
              emotional state and the significance of your artwork.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/hDRk6c1ZJ5s' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
