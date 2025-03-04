import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask12'>;

export default function JealousyTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gratitude Journaling</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Gratitude journaling encourages individuals to focus on the positive aspects of their lives, shifting their attention away from jealousy and towards appreciation. By cultivating
              gratitude, individuals can reduce negative emotions and promote emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 1: Reflect on Positive Moments</Text>
            <Text style={styles.stepText}>
              - **Activity**: Take a moment to reflect on a recent event where you felt happy, proud, or content. This could be a small victory or a meaningful interaction. Write down the details of
              that experience and how it made you feel.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 2: List Three Things You're Grateful For</Text>
            <Text style={styles.stepText}>
              - **Activity**: Write down three things you are grateful for in your life. These can be big or small, from relationships to simple pleasures. Try to focus on aspects of your life that
              bring you joy and fulfillment.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 3: Reframe Negative Thoughts</Text>
            <Text style={styles.stepText}>
              - **Activity**: Think about a situation that triggered feelings of jealousy recently. Reframe your thoughts by finding aspects of that situation for which you can feel grateful. For
              example, if you felt jealous of a colleague's success, acknowledge their achievement and express gratitude for the inspiration it provides.
            </Text>

            <Text style={styles.stepTitle}>💬 Step 4: Express Gratitude to Someone</Text>
            <Text style={styles.stepText}>
              - **Activity**: Reach out to someone in your life and express your gratitude. Whether it’s a friend, family member, or colleague, let them know how much you appreciate them and their
              positive impact on your life.
            </Text>

            <Text style={styles.stepTitle}>✨ Final Thought</Text>
            <Text style={styles.stepText}>
              Regular gratitude journaling helps foster a mindset of abundance, counteracting jealousy by shifting focus from what is lacking to what is present. By integrating this practice into your
              daily routine, you can enhance emotional resilience and experience greater contentment.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView
              style={styles.video}
              source={{
                uri: 'https://www.youtube.com/embed/GZghu_xFRM8'
              }}
              allowsFullscreenVideo
              allowsInlineMediaPlayback
            />
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
