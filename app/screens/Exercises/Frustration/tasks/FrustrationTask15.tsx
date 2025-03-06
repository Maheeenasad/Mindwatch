import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask15'>;

export default function FrustrationTask15Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Writing a Rant Letter (Not Sending)</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Writing a Rant Letter" is a therapeutic exercise that allows you to express intense emotions, such as anger or frustration, in a safe and controlled manner. By articulating your
              feelings on paper without the intention of sending the letter, you can achieve emotional release and gain clarity on the situation.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🛠️ Step 1: Set the Scene</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Find a quiet and comfortable space where you won't be
              disturbed. Gather writing materials, such as paper and a pen, or use a digital device if you prefer typing.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 2: Write the Rant Letter</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Address the letter to the person or situation causing you
              frustration. Write freely and honestly, expressing all your thoughts and emotions without censoring yourself. Remember, this letter is for your eyes only and will not be sent. This
              exercise helps in venting out suppressed emotions and can lead to emotional relief.{'\n'}
              <Text style={{ color: 'blue' }}>[Source: Anxiety MD - Cathartic Letters for Anger]</Text>
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧘 Step 3: Reflect and Release</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After writing, take a moment to reflect on what you've
              expressed. Notice any changes in your emotional state. Once you've reflected, dispose of the letter by shredding or deleting it, symbolizing the release of those pent-up emotions.{'\n'}
              <Text style={{ color: 'blue' }}>[Source: Esther Kane - Therapeutic Letter-Writing Part Two: The Rant Letter]</Text>
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in this exercise can help you process and manage intense emotions, leading to improved emotional well-being. It's a private and effective way to confront and release feelings
              that might otherwise remain bottled up.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/8HMURbVox9I' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
