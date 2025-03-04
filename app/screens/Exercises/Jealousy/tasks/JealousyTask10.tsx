import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask10'>;

export default function JealousyTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/JealousyTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Practicing Self-Compassion</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Practicing self-compassion enables teenagers to treat themselves with kindness during challenging times, reducing self-criticism and mitigating feelings of jealousy.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Mindful Self-Compassion Meditation</Text>
            <Text style={styles.stepText}>
              - **Activity**: Guide teenagers through a mindfulness meditation focused on self-compassion. Encourage them to sit comfortably, close their eyes, and bring attention to their breath. As
              they breathe, prompt them to acknowledge any difficult emotions without judgment, offering themselves kindness and understanding. This practice helps in recognizing and soothing their
              own suffering.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Self-Compassion Journaling</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage teens to write about a recent experience where they felt inadequate or jealous. Ask them to reflect on this situation with a compassionate perspective,
              considering what they would say to a friend in a similar scenario. This exercise fosters a kinder inner dialogue and promotes self-acceptance.
            </Text>

            <Text style={styles.stepTitle}>🤝 Step 3: Common Humanity Reflection</Text>
            <Text style={styles.stepText}>
              - **Activity**: Help teenagers understand that suffering and personal inadequacy are part of the shared human experience. Encourage them to reflect on how others might have similar
              feelings, reinforcing the idea that they are not alone in their struggles. This realization can alleviate feelings of isolation associated with jealousy.
            </Text>

            <Text style={styles.stepTitle}>💬 Step 4: Positive Self-Talk Practice</Text>
            <Text style={styles.stepText}>
              - **Activity**: Teach teens to recognize negative self-talk and reframe it into positive, compassionate statements. For example, replacing "I'm not good enough" with "I'm doing my best,
              and that's okay." Regular practice of positive self-talk can build resilience against jealousy.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Integrating self-compassion practices into daily life empowers teenagers to handle challenges with kindness toward themselves, reducing negative emotions like jealousy and enhancing
              overall well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/9mJU0m94mqQ' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
