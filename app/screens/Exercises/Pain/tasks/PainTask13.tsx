import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask13'>;

export default function PainTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Journaling for Pain Management</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes daily</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Journaling is a therapeutic practice that involves writing down your thoughts, feelings, and experiences.{'\n'}
              For individuals managing chronic pain, journaling can serve as a valuable tool to track symptoms,{'\n'}
              identify triggers, and express emotions, thereby aiding in pain management and emotional well-being.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Establish a Routine</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Set aside a specific time each day for journaling,{'\n'}
              such as in the morning or before bed, to create a consistent habit.
            </Text>

            <Text style={styles.stepTitle}>🗒️ Step 2: Document Pain Details</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Record specifics about your pain, including:{'\n'}- <Text style={{ fontWeight: 'bold' }}>Date and Time:</Text> Note when the pain
              occurs.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Intensity:</Text> Rate your pain on a scale from 0 to 10.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Location:</Text> Specify where
              you feel the pain.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Duration:</Text> Indicate how long the pain lasts.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Triggers:</Text> Identify
              any activities or factors that may have contributed to the pain.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Reflect on Emotions and Thoughts</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Write about your emotional state, thoughts,{'\n'}
              and feelings related to your pain experience. This can help in processing emotions and reducing stress.
            </Text>

            <Text style={styles.stepTitle}>📈 Step 4: Identify Patterns and Triggers</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Regularly review your journal entries to detect patterns{'\n'}
              or triggers associated with your pain. This awareness can inform lifestyle adjustments and pain management strategies.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 5: Incorporate Positive Affirmations</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> End each journaling session by writing positive affirmations{'\n'}
              or notes of gratitude to promote a positive mindset and enhance overall well-being.
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - Journaling is a personal and introspective activity.{'\n'}- If reflecting on certain thoughts or emotions becomes overwhelming,{'\n'}
              consider seeking support from a mental health professional.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Consistent journaling can empower you to take an active role in managing your pain,{'\n'}
              providing insights into your condition and fostering emotional resilience.{'\n'}
              Remember, this practice is a personal journey, and it's essential to approach it with patience and self-compassion.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/7devqYzJ2zg' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
