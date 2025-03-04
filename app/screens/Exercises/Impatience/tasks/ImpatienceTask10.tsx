import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask10'>;

export default function ImpatienceTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Board Game Strategy</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~45-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in board games is a fun and effective way to develop strategic thinking, patience, and social skills. This exercise encourages you to delve into the world of board games to
              enhance these essential qualities.
            </Text>

            <Text style={styles.stepTitle}>🎲 Step 1: Select a Strategy-Based Board Game</Text>
            <Text style={styles.stepText}>
              - **Activity**: Choose a board game that emphasizes strategy and planning. Examples include Chess, Risk, Settlers of Catan, or Ticket to Ride. Ensure the game is suitable for your age
              group and interests.
            </Text>

            <Text style={styles.stepTitle}>📚 Step 2: Learn the Rules and Strategies</Text>
            <Text style={styles.stepText}>
              - **Activity**: Thoroughly read the game's rulebook and explore basic strategies. Understanding the rules and potential tactics is crucial for effective gameplay.
            </Text>

            <Text style={styles.stepTitle}>👥 Step 3: Gather Players</Text>
            <Text style={styles.stepText}>
              - **Activity**: Invite family members or friends to join you in the game. Playing with others not only makes the experience enjoyable but also enhances social interaction and patience as
              you wait for your turn.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 4: Develop and Implement Your Strategy</Text>
            <Text style={styles.stepText}>
              - **Activity**: As you play, focus on developing and adjusting your strategy based on the game's progression. This requires patience and adaptability, especially when facing unexpected
              challenges.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After the game, reflect on your strategic decisions and their outcomes. Consider what strategies worked, what didn't, and how you managed your patience throughout the
              game.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly engaging in strategy-based board games can significantly enhance your patience, critical thinking, and ability to work collaboratively with others. These skills are
              transferable to various aspects of life, including academics and personal relationships.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/BRC-XoHKH1Q' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
