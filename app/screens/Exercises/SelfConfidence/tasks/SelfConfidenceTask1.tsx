import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SelfConfidenceTask1'>;

export default function SelfConfidenceTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SelfConfidence.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Superhero Posing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Superhero posing, also known as "power posing," involves adopting expansive and open body postures to boost confidence and self-assurance. This exercise encourages children to embody the
              strength and bravery of their favorite superheroes, fostering a sense of empowerment and self-belief.
            </Text>

            <Text style={styles.stepTitle}>🦸‍♂️ Step 1: Discuss Superheroes</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Preparation</Text>: Begin by talking with the child about their favorite superheroes. Discuss the qualities that make these characters special,
              such as courage, strength, and kindness. This sets the foundation for understanding the attributes they will embody during the exercise.
            </Text>

            <Text style={styles.stepTitle}>🧍‍♀️ Step 2: Introduce Power Poses</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Explain that adopting certain body postures can make them feel more confident, just like superheroes. Demonstrate poses such as
              standing tall with hands on hips (Wonder Woman pose) or raising arms overhead in a 'V' shape (Victory pose). Encourage the child to try these poses and notice how they feel.
            </Text>

            <Text style={styles.stepTitle}>⏱️ Step 3: Hold and Feel</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Have the child hold each pose for about 1-2 minutes. During this time, ask them to focus on the feelings that arise—do they feel
              stronger, braver, or more powerful? This mindfulness aspect helps reinforce the connection between body posture and emotional state.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: While holding the poses, introduce positive affirmations such as "I am strong," "I am brave," or "I can do this." Encourage the
              child to repeat these phrases aloud, enhancing the empowering effect of the poses.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 5: Creative Expression</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After practicing the poses, invite the child to draw themselves as a superhero, incorporating the poses they've learned. This
              creative activity reinforces their experience and allows them to visualize themselves embodying these empowering traits.
            </Text>

            <Text style={styles.stepTitle}>💬 Step 6: Reflect Together</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection</Text>: Conclude the exercise by discussing how they felt during the poses and affirmations. Ask questions like, "How did standing like
              a superhero make you feel?" or "Can you think of a time when you can use these poses to feel more confident?" This reflection helps them internalize the benefits of power posing in
              everyday situations.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/usBbt5YDa_s' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
