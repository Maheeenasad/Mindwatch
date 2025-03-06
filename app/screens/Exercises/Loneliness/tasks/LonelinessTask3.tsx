import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask3'>;

export default function LonelinessTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Playing with Family</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in family games fosters connection, communication, and reduces feelings of loneliness in children. This activity encourages families to come together and enjoy interactive play,
              strengthening bonds and creating joyful memories.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🕹️ Step 1: Choose a Family Game</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Select a game that is suitable for all family members. Options include board games, card games, or interactive activities like
              charades. Ensure the game is age-appropriate and enjoyable for everyone.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🗓️ Step 2: Schedule a Game Time</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Set aside a specific time when all family members are available. Consistency is key; consider making it a weekly tradition to
              enhance bonding.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📍 Step 3: Create a Comfortable Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Arrange a cozy space free from distractions. Comfortable seating and good lighting can enhance the gaming experience.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🎉 Step 4: Play and Interact</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Engage fully in the game, encourage positive interactions, and celebrate each other's successes. This promotes teamwork and
              understanding among family members.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🗣️ Step 5: Reflect and Share</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After the game, take a few minutes to discuss what everyone enjoyed. Sharing thoughts and feelings can enhance communication and
              emotional connection.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regular family playtime not only alleviates feelings of loneliness but also builds a supportive and loving environment for children. It reinforces the idea that they are valued members
              of the family unit.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView
              style={styles.video}
              source={{
                uri: 'https://www.youtube.com/embed/8mZOk4MCDps'
              }}
              allowsFullscreenVideo
              allowsInlineMediaPlayback
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
