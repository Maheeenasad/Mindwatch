import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask2'>;

export default function FearOfLossTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLossTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Comfort Drawing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~25 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Comfort Drawing is a therapeutic activity that allows children to express their emotions and find solace through art. This exercise encourages them to visualize and create images that
              bring them comfort, aiding in the processing of grief and loss.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              Collect the following items:
              {'\n'}- Blank paper or a sketchbook
              {'\n'}- Colored pencils, crayons, or markers
              {'\n'}- Optional: Paints and brushes
            </Text>

            <Text style={styles.stepTitle}>🧘 Step 2: Create a Calm Environment</Text>
            <Text style={styles.stepText}>Find a quiet and comfortable space free from distractions. Soft background music can enhance relaxation.</Text>

            <Text style={styles.stepTitle}>🖌️ Step 3: Encourage Expression Through Drawing</Text>
            <Text style={styles.stepText}>
              Invite the child to draw anything that makes them feel safe, happy, or comforted. This could be a favorite place, a beloved pet, or abstract shapes and colors that resonate with their
              feelings.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 4: Discuss the Artwork</Text>
            <Text style={styles.stepText}>
              After completing the drawing, encourage the child to share their creation and the emotions behind it. This discussion can help them articulate their feelings and foster a sense of
              understanding and support.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in Comfort Drawing provides children with a creative outlet to process complex emotions. Regular practice can enhance emotional resilience and offer a constructive way to cope
              with feelings of loss.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/yBPeOwnhdH8' }} // Kid's Grief Art Project (death or divorce)
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
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
    backgroundColor: '#F0F8FF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#003366',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600',
  },
  stepsContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22,
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
