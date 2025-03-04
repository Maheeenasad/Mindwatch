import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask1'>;

export default function ForgivenessTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Forgiveness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Drawing Your Feelings</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Expressing emotions through art can be a powerful tool for children to process feelings of hurt and move towards forgiveness. This exercise encourages children to visualize and
              externalize their emotions, facilitating understanding and healing.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 1: Gather Art Supplies</Text>
            <Text style={styles.stepText}>
              Collect drawing materials such as paper, crayons, markers, or colored pencils. Choose a comfortable and quiet space to create art without interruptions.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 2: Reflect on Your Feelings</Text>
            <Text style={styles.stepText}>
              Take a moment to think about a situation where someone hurt your feelings. Notice the emotions you feel when recalling this event—anger, sadness, confusion, etc.
            </Text>

            <Text style={styles.stepTitle}>✏️ Step 3: Draw Your Emotions</Text>
            <Text style={styles.stepText}>
              On your paper, draw shapes, lines, or images that represent the emotions you're experiencing. There's no right or wrong way to do this—focus on expressing what you feel inside.
            </Text>

            <Text style={styles.stepTitle}>💭 Step 4: Reflect on Your Artwork</Text>
            <Text style={styles.stepText}>Look at your drawing and consider what it tells you about your feelings. How intense are these emotions? Are there multiple feelings present?</Text>

            <Text style={styles.stepTitle}>🕊️ Step 5: Visualize Letting Go</Text>
            <Text style={styles.stepText}>
              On a new sheet of paper, draw what forgiveness looks like to you. This could be symbols of peace, healing, or reconciliation. Use colors and images that convey a sense of relief and
              freedom.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in this artistic process can help you understand and release negative emotions, making space for forgiveness. Remember, forgiveness is a journey, and it's okay to take your
              time.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/STdJ__8ORyE' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
