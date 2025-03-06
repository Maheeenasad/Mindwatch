import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask6'>;

export default function LonelinessTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Loneliness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Writing Letters to Your Future Self</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Writing a letter to your future self is a reflective exercise that encourages introspection and goal setting. This activity helps teenagers articulate their current thoughts, feelings,
              and aspirations, fostering self-awareness and personal growth. By envisioning their future, they can build a sense of connection and purpose, which can alleviate feelings of loneliness.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Find a Quiet Space</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose a comfortable and quiet place where you can reflect without interruptions. This could be your bedroom, a cozy corner in
              your home, or any place where you feel at ease.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🖊️ Step 2: Gather Writing Materials</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Use a pen and paper, or a digital device if you prefer typing. Select whichever medium allows you to express yourself most freely.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧠 Step 3: Reflect on Your Current Self</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Take a few moments to think about your current feelings, challenges, achievements, and aspirations. Consider what aspects of your
              life are most significant to you right now.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}✍️ Step 4: Write the Letter</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Begin your letter with a greeting to your future self. Write about your current experiences, emotions, and any goals you hope to
              achieve. Pose questions to your future self about what they might have accomplished or learned. This exercise can help in setting and visualizing personal goals.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📅 Step 5: Set a Future Date to Read the Letter</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Decide on a specific date in the future when you will read this letter. It could be six months, a year, or even five years from
              now. Mark this date on your calendar as a reminder.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📂 Step 6: Store the Letter Safely</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Place the letter in a safe location where it won't be disturbed until the chosen date. If it's a digital letter, consider using a
              service that will email it to you at the designated time.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in this exercise can provide a meaningful perspective on your personal growth and journey. It serves as a reminder that change is constant and that you have the power to
              influence your own path. Reflecting on your progress can boost self-esteem and reduce feelings of isolation.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/djrZsuzCSO4' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
