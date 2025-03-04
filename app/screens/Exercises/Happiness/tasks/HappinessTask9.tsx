import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask9'>;

export default function HappinessTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Laughter Yoga</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Laughter Yoga combines intentional laughter with yogic breathing techniques, promoting physical and mental well-being. Engaging in laughter exercises can reduce stress, boost mood, and
              enhance social connections.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Warm-Up with Clapping and Chanting</Text>
            <Text style={styles.stepText}>
              - **Duration**: 3 minutes{'\n'}- **Activity**: Begin by clapping your hands rhythmically while chanting "Ho Ho Ha Ha Ha." This simple exercise warms up your body and sets a joyful tone
              for the session.
            </Text>

            <Text style={styles.stepTitle}>😂 Step 2: Engage in Laughter Exercises</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Participate in various laughter exercises, such as: - **Lion Laughter**: Stick out your tongue, widen your eyes, and stretch your hands
              out like claws while laughing. This exercise helps release tension and boosts energy.**Belly Laughter**: Place your hands on your abdomen and laugh deeply, engaging your diaphragm. This
              promotes relaxation and massages internal organs. - **Silent Laughter**: Open your mouth wide and laugh without making a sound. This can be a fun challenge and enhances focus.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Cool Down with Deep Breathing</Text>
            <Text style={styles.stepText}>
              - **Duration**: 2 minutes{'\n'}- **Activity**: Conclude your session with deep breathing exercises. Inhale deeply through your nose, hold for a moment, and exhale slowly through your
              mouth. This helps calm the mind and body.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating Laughter Yoga into your routine can be a delightful way to enhance happiness and overall well-being. Remember, laughter is contagious—share it freely!
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/hrMMWAEtaVM' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
