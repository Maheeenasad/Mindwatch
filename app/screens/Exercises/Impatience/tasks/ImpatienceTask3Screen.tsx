import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask3'>;

export default function ImpatienceTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Slow Coloring</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in deliberate and thoughtful coloring activities can enhance patience, concentration, and fine motor skills in children. This exercise encourages mindfulness and relaxation,
              allowing children to focus on the present moment.
            </Text>

            <Text style={styles.stepTitle}>🖍️ Step 1: Select a Detailed Coloring Page</Text>
            <Text style={styles.stepText}>
              - **Activity**: Choose a coloring page with intricate patterns or designs that require careful attention. Mandalas or nature scenes with fine details are excellent choices.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 2: Gather Coloring Materials</Text>
            <Text style={styles.stepText}>
              - **Activity**: Provide a variety of coloring tools such as colored pencils, fine-tipped markers, or crayons. Having multiple options allows the child to experiment with different
              techniques and colors.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 3: Create a Calm Environment</Text>
            <Text style={styles.stepText}>- **Activity**: Set up a quiet and comfortable space free from distractions. Soft background music or nature sounds can enhance relaxation and focus.</Text>

            <Text style={styles.stepTitle}>⌛ Step 4: Encourage Slow and Steady Coloring</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage the child to color slowly, paying attention to staying within the lines and selecting colors thoughtfully. Emphasize that there's no rush to complete the
              picture.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After completing the coloring session, discuss how the child felt during the activity. Ask questions like, "Did taking your time make you feel relaxed?" or "How did you
              decide which colors to use?"
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating "Slow Coloring" into regular routines can help children develop patience and mindfulness. This practice not only enhances artistic skills but also promotes emotional
              well-being and focus.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/iytnM7vZWCA' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
