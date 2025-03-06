import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask3'>;

export default function HappinessTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Storytelling with Friends</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Storytelling with Friends" is a collaborative activity designed to enhance children's creativity, listening skills, and teamwork. By crafting a story together, children learn to express
              themselves and appreciate diverse ideas.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Setting Up the Group</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Gather a small group of children (3-5 participants) and
              have them sit in a circle. Explain that they will create a story together, with each person contributing to the narrative.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Introducing the Story Elements</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Introduce basic story elements such as character, setting,
              and plot. Encourage each child to think of a character or setting they would like to include in the story.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Collaborative Storytelling</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Start the story with an opening line, such as "Once upon a
              time...". Each child then adds a sentence or two, building upon the previous contributions. Continue until the story reaches a natural conclusion.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Illustrating the Story</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Provide drawing materials and invite the children to
              illustrate scenes or characters from their story. This visual representation reinforces their engagement and creativity.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Collaborative storytelling fosters imagination, cooperation, and communication skills. By working together to create a narrative, children learn to value each other's ideas and build a
              shared sense of accomplishment.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/SrTavNWiftY' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
