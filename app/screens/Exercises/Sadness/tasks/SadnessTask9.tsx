import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'SadnessTask9'>;

export default function SadnessTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/SadnessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Nature Walk for Relaxation</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in nature walks can significantly alleviate feelings of sadness among teenagers by promoting relaxation, reducing stress, and enhancing overall mental well-being. This activity
              encourages teens to immerse themselves in natural environments, fostering a sense of calm and connection to the world around them.
            </Text>

            <Text style={styles.stepTitle}>🌳 Step 1: Choose a Natural Setting</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Identify a nearby park, forest trail, or any natural area where you can walk safely. Ensure the location is accessible and suits
              your comfort level.
            </Text>

            <Text style={styles.stepTitle}>🕒 Step 2: Schedule Your Walk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Set aside 30-45 minutes for your nature walk. Choose a time of day when you are least likely to be interrupted and can fully
              engage in the experience.
            </Text>

            <Text style={styles.stepTitle}>👟 Step 3: Prepare Appropriately</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Wear comfortable clothing and footwear suitable for walking. Check the weather forecast to dress accordingly and consider bringing
              water to stay hydrated.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 4: Practice Mindfulness During the Walk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: As you walk, pay attention to the sights, sounds, and smells around you. Notice the rustling leaves, chirping birds, or the feel
              of the breeze. This mindfulness can enhance the calming effects of the walk.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect Post-Walk</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: After your walk, take a few minutes to reflect on how you feel. Consider journaling your thoughts or discussing the experience
              with a friend or family member.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/0P3Deuv8tbc' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
