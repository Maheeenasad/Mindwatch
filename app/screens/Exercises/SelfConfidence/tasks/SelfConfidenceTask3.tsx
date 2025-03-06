import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask3'>;

export default function SelfConfidenceTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidenceTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Drawing Strengths</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Drawing Strengths" is a creative activity designed to help children recognize their unique abilities. By illustrating their strengths, they build a positive self-image and boost
              confidence.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Gather Art Supplies</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation:</Text> Provide the child with paper, colored pencils, markers, or crayons. Creating an inviting space for creativity encourages
              self-expression.
            </Text>

            <Text style={styles.stepTitle}>💭 Step 2: Identify Strengths</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Ask the child, “What are some things you’re good at?” Guide them to think about skills, personality traits, or things they enjoy
              doing.
            </Text>

            <Text style={styles.stepTitle}>🖍️ Step 3: Illustrate Strengths</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Encourage the child to draw a self-portrait that highlights their strengths. For example, if they are kind, they could draw
              themselves helping a friend.
            </Text>

            <Text style={styles.stepTitle}>✨ Step 4: Add Positive Words</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Ask the child to write or decorate their drawing with words describing their strengths, such as "Brave," "Kind," "Smart," or
              "Creative."
            </Text>

            <Text style={styles.stepTitle}>📖 Step 5: Share & Reflect</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> Encourage the child to explain their drawing. Ask questions like, “What do you like most about yourself?” to reinforce
              self-confidence.
            </Text>

            <Text style={styles.stepTitle}>🖼️ Step 6: Display the Artwork</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Display the drawing in their room or a shared space to remind them of their strengths daily.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/2v9ALtLuP5k' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
