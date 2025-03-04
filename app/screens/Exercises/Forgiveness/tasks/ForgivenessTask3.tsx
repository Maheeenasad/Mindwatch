import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask3'>;

export default function ForgivenessTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Deep Breathing & Letting Go</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Deep breathing exercises can help children manage stress and release negative emotions, paving the way for forgiveness. This activity guides children through mindful breathing techniques
              to promote relaxation and emotional release.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 1: Find a Comfortable Position</Text>
            <Text style={styles.stepText}>Sit or lie down in a comfortable position. Ensure the environment is quiet and free from distractions.</Text>

            <Text style={styles.stepTitle}>🌬️ Step 2: Introduce Belly Breathing</Text>
            <Text style={styles.stepText}>
              Place one hand on your chest and the other on your abdomen. Inhale deeply through your nose, allowing your abdomen to rise while keeping your chest still. Exhale slowly through your
              mouth. Repeat this process for several breaths.
            </Text>

            <Text style={styles.stepTitle}>🕯️ Step 3: Practice "Smell the Rose, Blow Out the Candle"</Text>
            <Text style={styles.stepText}>
              Imagine holding a rose in one hand and a candle in the other. Inhale deeply through your nose as if smelling the rose, then exhale slowly through your mouth as if blowing out the candle.
              This visualization can make deep breathing more engaging for children.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Visualize Letting Go</Text>
            <Text style={styles.stepText}>
              While continuing deep breathing, visualize any hurt or negative feelings as dark clouds. With each exhale, imagine these clouds drifting away, leaving a clear and bright sky. This
              imagery helps in symbolizing the release of negative emotions.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular practice of deep breathing can equip children with a simple yet effective tool to manage their emotions and foster a forgiving mindset. Encourage them to use these techniques
              whenever they feel overwhelmed or upset.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/G85_SvftcjE' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
