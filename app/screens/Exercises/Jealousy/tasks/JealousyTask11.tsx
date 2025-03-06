import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'JealousyTask11'>;

export default function JealousyTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Jealousy.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cognitive Reframing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Cognitive reframing helps individuals shift their perspective on situations that evoke jealousy. By consciously challenging negative thoughts and replacing them with more balanced ones,
              they can change their emotional response and reduce jealousy.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔍 Step 1: Identify Negative Thoughts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Ask yourself when you last felt jealous and reflect on the thoughts that triggered those feelings. Write down these thoughts,
              acknowledging any negative self-judgments or assumptions that arose.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}💭 Step 2: Examine the Evidence</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> For each negative thought, examine the evidence supporting it. Is there concrete proof that the situation is as negative as it
              feels? Challenge the automatic assumptions you made and consider alternative perspectives.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌈 Step 3: Reframe the Thoughts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Reframe your negative thoughts into more balanced or positive statements. For example, instead of thinking "They have it all, and
              I’ll never be enough," try reframing it to "They have achieved something I'm working toward, and I can learn from their success."
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔄 Step 4: Practice Gratitude</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Practice gratitude by writing down three things you are thankful for in your own life. Shifting focus from scarcity to abundance
              can help decrease feelings of jealousy.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}✨ Final Thought</Text>
            <Text style={styles.stepText}>
              Reframing your thoughts is a powerful tool for transforming feelings of jealousy. With regular practice, it helps build emotional resilience and fosters a healthier outlook on life and
              others’ successes.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/BJ4MBZhXVV4' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
