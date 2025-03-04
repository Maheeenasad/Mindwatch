import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask15'>;

export default function ForgivenessTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Empathy Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 mins</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Empathy is the ability to understand and share the feelings of others. This exercise aims to enhance your empathetic skills, fostering deeper connections and promoting forgiveness in
              your relationships.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Mindfulness Meditation</Text>
            <Text style={styles.stepText}>
              Begin with a 5-minute mindfulness meditation to center yourself. Focus on your breath, observing each inhale and exhale. This practice will help you become more present and attentive.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Perspective-Taking</Text>
            <Text style={styles.stepText}>
              Think of a recent interaction where you felt a disconnect or misunderstanding with someone. Write down the situation from your perspective, noting your thoughts and feelings.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 3: Role Reversal</Text>
            <Text style={styles.stepText}>
              Now, rewrite the same situation from the other person's perspective. Consider their possible thoughts, feelings, and motivations. This step encourages you to step into their shoes and
              view the situation through their eyes.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 4: Reflect and Connect</Text>
            <Text style={styles.stepText}>
              Compare both perspectives. Reflect on the following questions:
              {'\n'}- How does understanding the other person's viewpoint change your feelings about the situation?
              {'\n'}- What new insights have you gained?
              {'\n'}- How can this understanding influence your future interactions?
            </Text>

            <Text style={styles.stepTitle}>💬 Step 5: Empathetic Communication</Text>
            <Text style={styles.stepText}>
              If appropriate, engage in a conversation with the person involved. Use empathetic language, expressing your understanding of their perspective and sharing your own. This dialogue can
              strengthen your relationship and promote mutual understanding.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/MvSvdGArhxc' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
