import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask5'>;

export default function FrustrationTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Stomp and Shout Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Stomp and Shout" exercise is a dynamic activity designed to help children release pent-up energy and frustration in a healthy and controlled manner. By engaging in vigorous
              movements and vocal expressions, children can experience a sense of relief and emotional release.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🛠️ Step 1: Create a Safe Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Choose an open area free from obstacles</Text> to ensure safety during the activity.{'\n'}-{' '}
              <Text style={{ fontWeight: 'bold' }}>Ensure the floor is non-slippery</Text> to prevent any accidental falls.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔧 Step 2: Introduce the Activity</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Explain to the child</Text> that they will be participating in a fun activity where they can stomp their feet and shout to let out any feelings of
              frustration or anger.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔄 Step 3: Demonstrate the Movements</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Show the child how to stomp their feet</Text> firmly on the ground, alternating between left and right foot.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Encourage them to pair each stomp with a loud shout</Text>, such as "Ha!" or "Ho!".
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧒 Step 4: Engage in the Exercise Together</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Start a rhythm</Text> by stomping and shouting together in a consistent pattern.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Gradually increase the pace</Text> to make the activity more engaging and to help release more energy.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Step 5: Introduce Variations</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Incorporate clapping or arm movements</Text> to add variety to the exercise.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Use a drum or play energetic music</Text> to provide a rhythmic background for the activity.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}💬 Step 6: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              After the activity, <Text style={{ fontWeight: 'bold' }}>sit down with the child and discuss how they felt</Text> during the exercise. Ask questions like, "Did stomping and shouting make
              you feel better?" or "How does your body feel now?"
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌈 Final Thought</Text>
            <Text style={styles.stepText}>
              The "Stomp and Shout" exercise offers children a physical outlet to express and manage their emotions. Regularly practicing this activity can help them develop healthy coping mechanisms
              for dealing with frustration and anger.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/nvDLe3FHcuY' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
