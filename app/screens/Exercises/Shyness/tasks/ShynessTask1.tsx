import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask1'>;

export default function ShynessTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Shyness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Friendly Wave Game</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10-15 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Friendly Wave Game" is designed to help children overcome shyness by encouraging them to initiate simple, non-verbal interactions. This exercise aims to build confidence in social
              settings and promote positive social behaviors.
            </Text>

            <Text style={styles.stepTitle}>👋 Step 1: Introduction to the Friendly Wave</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Demonstration:</Text> Explain and demonstrate how to wave in a friendly manner. Emphasize the importance of eye contact and a smile to convey
              warmth.
            </Text>

            <Text style={styles.stepTitle}>🧍 Step 2: Practice with Family Members</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Role-Playing:</Text> Have the child practice waving to family members or close friends. This helps them become comfortable with the gesture in a
              safe environment.
            </Text>

            <Text style={styles.stepTitle}>🚶 Step 3: Waving to Neighbors</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Real-World Application:</Text> Encourage the child to wave at neighbors during walks or when seeing them outside. Start with familiar faces and
              gradually include less familiar ones.
            </Text>

            <Text style={styles.stepTitle}>🏫 Step 4: Implementing at School</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>School Setting:</Text> Suggest that the child waves to classmates or teachers upon arriving at school. This small gesture can help in building
              rapport and reducing feelings of shyness.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 5: Reflect and Reward</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion:</Text> At the end of each day, discuss with the child how they felt when they waved at others. Praise their efforts and discuss any
              positive interactions that resulted.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/8rEnuSg3Gus' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
