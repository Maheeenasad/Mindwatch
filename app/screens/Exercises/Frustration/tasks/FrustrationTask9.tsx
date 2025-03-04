import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask9'>;

export default function FrustrationTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Scream into a Pillow</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Scream into a Pillow" exercise provides a safe and controlled outlet for releasing pent-up anger and frustration. By directing your emotions into a pillow, you can experience a
              cathartic release without causing harm to yourself or others.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Prepare Your Environment</Text>
            <Text style={styles.stepText}>
              - **Duration**: 2 minutes{'\n'}- **Activity**: Find a private space where you won't be disturbed. Ensure you have a sturdy pillow available. This setting will allow you to express your
              emotions freely without concern for others overhearing.
            </Text>

            <Text style={styles.stepTitle}>😤 Step 2: Physical Release</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Hold the pillow close to your face and take a deep breath. As you exhale, scream into the pillow, allowing all your anger and frustration
              to flow out. Repeat as necessary until you feel a sense of relief. This method can help in releasing built-up tension and stress. [Source: Calm](https://www.calm.com/blog/scream-therapy)
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 3: Reflect and Relax</Text>
            <Text style={styles.stepText}>
              - **Duration**: 3 minutes{'\n'}- **Activity**: After releasing your emotions, sit or lie down in a comfortable position. Close your eyes and take slow, deep breaths, focusing on calming
              your mind and body. Reflect on the emotions you experienced and acknowledge the release you've achieved.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Utilizing physical outlets like screaming into a pillow can be an effective way to manage intense emotions. It's essential to recognize and address your feelings in a safe manner,
              promoting emotional well-being and resilience.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/cebngSAjcVI' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
