import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask8'>;

export default function IrritationTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Physical Exercise</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in regular physical exercise is a highly effective way for teenagers to manage feelings of irritation and stress. Physical activity releases endorphins, which are natural mood
              lifters, and helps reduce tension, anxiety, and depression. Incorporating exercise into your daily routine can lead to improved mental and physical well-being.
            </Text>

            <Text style={styles.stepTitle}>🏃 Step 1: Choose an Enjoyable Activity</Text>
            <Text style={styles.stepText}>
              - **Activity**: Select a physical activity that you enjoy, such as jogging, dancing, cycling, or playing a sport. Enjoyment increases motivation and consistency.
            </Text>

            <Text style={styles.stepTitle}>⏰ Step 2: Set a Realistic Schedule</Text>
            <Text style={styles.stepText}>
              - **Activity**: Aim for at least 60 minutes of moderate to vigorous physical activity daily, as recommended by health guidelines. This can be broken into shorter sessions throughout the
              day.
            </Text>

            <Text style={styles.stepTitle}>🤸 Step 3: Warm-Up and Cool Down</Text>
            <Text style={styles.stepText}>
              - **Activity**: Begin with a 5-10 minute warm-up, such as light jogging or dynamic stretches, to prepare your body. After exercising, perform static stretches to cool down and reduce
              muscle soreness.
            </Text>

            <Text style={styles.stepTitle}>👥 Step 4: Incorporate Social Interaction</Text>
            <Text style={styles.stepText}>
              - **Activity**: Engage in group activities or team sports to combine physical exercise with social interaction, enhancing mood and reducing feelings of isolation.
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 5: Practice Mind-Body Exercises</Text>
            <Text style={styles.stepText}>
              - **Activity**: Include exercises like yoga or tai chi that focus on both physical movement and mental relaxation, promoting mindfulness and reducing stress.
            </Text>

            <Text style={styles.stepTitle}>📈 Step 6: Monitor Progress</Text>
            <Text style={styles.stepText}>
              - **Activity**: Keep a journal or use a fitness app to track your physical activity, noting improvements in mood and energy levels. This can boost motivation and provide insight into the
              positive effects of exercise.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular physical exercise is a powerful tool for managing irritation and enhancing overall mental health. By finding activities you enjoy and incorporating them into your routine, you
              can experience significant improvements in mood, stress levels, and physical well-being.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/6lZOHgfq7tQ' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
