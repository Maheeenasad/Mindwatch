import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask9'>;

export default function ForgivenessTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Talking to a Trusted Person</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in open conversations with trusted individuals is a vital step toward processing emotions and fostering forgiveness. This exercise encourages teenagers to discuss their feelings
              with someone they trust, facilitating emotional healing and personal growth.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 1: Identify a Trusted Person</Text>
            <Text style={styles.stepText}>
              Encourage the teenager to think about someone they feel comfortable with—such as a family member, friend, teacher, or counselor—who is trustworthy, empathetic, and a good listener.
            </Text>

            <Text style={styles.stepTitle}>📅 Step 2: Arrange a Suitable Time</Text>
            <Text style={styles.stepText}>
              Guide them to find an appropriate time and place where both parties can engage in an uninterrupted, private conversation, ensuring a safe environment for sharing personal feelings.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Communicate Feelings Openly</Text>
            <Text style={styles.stepText}>Encourage the teenager to express their thoughts and emotions related to the hurtful experience, discussing:</Text>
            <Text style={styles.bulletPoint}>• What happened?</Text>
            <Text style={styles.bulletPoint}>• How did it make you feel?</Text>
            <Text style={styles.bulletPoint}>• Why is forgiveness important in this context?</Text>

            <Text style={styles.stepTitle}>👂 Step 4: Listen to Feedback</Text>
            <Text style={styles.stepText}>
              Advise them to listen attentively to the trusted person's perspective, which can offer new insights, coping strategies, and support in the forgiveness process.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect on the Conversation</Text>
            <Text style={styles.stepText}>
              After the discussion, suggest they reflect on any new understandings or feelings that emerged, considering how the conversation has influenced their perspective on forgiveness.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Talking to a trusted person can provide valuable support and clarity, aiding teenagers in navigating their emotions and fostering a forgiving mindset.</Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/mEK2pIiZ2I0' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
