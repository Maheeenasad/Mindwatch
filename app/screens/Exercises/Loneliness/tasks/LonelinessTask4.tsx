import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask4'>;

export default function LonelinessTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Singing Favorite Poems</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Singing familiar poems and rhymes can enhance children's emotional well-being, language development, and social bonds. This activity encourages children to sing their favorite poems,
              fostering joy and reducing feelings of loneliness.
            </Text>

            <Text style={styles.stepTitle}>🎵 Step 1: Select Favorite Poems</Text>
            <Text style={styles.stepText}>
              - **Activity**: Sit with your child and choose a few of their favorite poems or nursery rhymes. This selection process allows them to express their preferences and feel involved.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 2: Read and Recite Together</Text>
            <Text style={styles.stepText}>- **Activity**: Read the selected poems aloud together. Encourage your child to recite along, promoting language skills and rhythm awareness.</Text>

            <Text style={styles.stepTitle}>🎤 Step 3: Sing the Poems</Text>
            <Text style={styles.stepText}>
              - **Activity**: Turn the recited poems into songs. Use simple melodies or mimic tunes from familiar nursery rhymes. Singing can elevate mood and create a fun atmosphere.
            </Text>

            <Text style={styles.stepTitle}>🕺 Step 4: Add Movements</Text>
            <Text style={styles.stepText}>- **Activity**: Incorporate hand motions or simple dance steps to accompany the songs. This physical engagement enhances memory and adds excitement.</Text>

            <Text style={styles.stepTitle}>📹 Step 5: Record the Performance</Text>
            <Text style={styles.stepText}>
              - **Activity**: Record your child's performance to celebrate their efforts. Watching the playback can boost their confidence and provide a sense of accomplishment.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in singing activities not only improves linguistic abilities but also strengthens emotional bonds and alleviates feelings of loneliness. It's a joyful way to connect and create
              lasting memories.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView
              style={styles.video}
              source={{
                uri: 'https://www.youtube.com/embed/7mojc6fTDdo'
              }}
              allowsFullscreenVideo
              allowsInlineMediaPlayback
            />
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
