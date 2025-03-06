import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask2'>;

export default function PainTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gentle Stretching</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Gentle stretching can help children alleviate pain and improve flexibility. This activity introduces simple stretches to promote relaxation and physical comfort.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Warm-Up</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Begin with a light warm-up to prepare the muscles for stretching. Have your child march in place or perform gentle arm circles for
              2-3 minutes.
            </Text>

            <Text style={styles.stepTitle}>🦋 Step 2: Butterfly Stretch</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Instruct your child to sit on the floor with the soles of their feet touching and knees bent outward. Gently press their knees
              toward the ground to stretch the inner thighs. Hold for 20 seconds.
            </Text>

            <Text style={styles.stepTitle}>🐱 Step 3: Cat-Cow Stretch</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Have your child get on their hands and knees. Guide them to arch their back like a cat (
              <Text style={{ fontWeight: 'bold' }}>cat pose</Text>), then dip it down like a cow (<Text style={{ fontWeight: 'bold' }}>cow pose</Text>). Repeat this sequence 5 times to stretch the
              back and neck muscles.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 4: Standing Quad Stretch</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: While standing, ask your child to hold onto a wall or chair for support. They should bend one knee, bringing the heel toward the
              buttocks, and hold the ankle with their hand. This stretches the front thigh muscles. Hold for 20 seconds on each leg.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After completing the stretches, discuss with your child how their body feels. Encourage them to share any sensations of relief or
              relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Incorporating gentle stretching into your child's routine can enhance flexibility, reduce discomfort, and promote overall well-being.</Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/v6rD5JUnwX8' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
