import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask4'>;

export default function ForgivenessTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Letter to a Friend</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Writing a letter to a friend can help children express their feelings, understand different perspectives, and practice forgiveness. This activity guides children to reflect on their
              emotions and communicate them effectively.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 1: Reflect on the Situation</Text>
            <Text style={styles.stepText}>Encourage the child to think about a recent disagreement or misunderstanding with a friend. Ask them to consider how they felt and why.</Text>

            <Text style={styles.stepTitle}>📝 Step 2: Write the Letter</Text>
            <Text style={styles.stepText}>Guide the child to write a letter to their friend, expressing their feelings about the situation. They should aim to:</Text>
            <Text style={styles.bulletPoint}>• Describe what happened.</Text>
            <Text style={styles.bulletPoint}>• Explain how they felt.</Text>
            <Text style={styles.bulletPoint}>• Acknowledge any role they may have played.</Text>
            <Text style={styles.bulletPoint}>• Express a desire to resolve the issue and move forward.</Text>

            <Text style={styles.stepTitle}>📬 Step 3: Decide What to Do with the Letter</Text>
            <Text style={styles.stepText}>
              After writing, the child can choose to share the letter with their friend or keep it as a personal reflection. The act of writing can be therapeutic, regardless of whether the letter is
              sent.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              Discuss with the child how writing the letter made them feel. Do they feel more understanding or ready to forgive? This reflection can reinforce the value of empathy and communication.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Encouraging children to express their feelings through writing can enhance their emotional intelligence and strengthen friendships. This exercise fosters empathy, understanding, and the
              ability to forgive.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/VMaEyCoHgVs' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
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
