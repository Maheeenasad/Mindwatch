import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask5'>;

export default function HappinessTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Animal Imitation Game</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Animal Imitation Game" is a fun and interactive activity that encourages children to mimic various animal movements and sounds. This game enhances creativity, gross motor skills,
              and social interaction among children.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Preparing the Game</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Gather the children in an open space where they can move
              freely. Explain that they will be imitating different animals and that others will guess which animal is being portrayed.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Demonstrating Animal Movements</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Demonstrate a few animal movements and sounds as examples.
              For instance, slither like a snake, hop like a frog, or stomp like an elephant. Encourage children to observe and practice these movements.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Playing the Imitation Game</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 10 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> One child starts by imitating an animal without speaking,
              while the others guess which animal it is. Rotate turns so each child has the opportunity to act and guess.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Group Imitation</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Call out the name of an animal, and have all the children
              imitate it simultaneously. This promotes unity and adds excitement to the game.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              The Animal Imitation Game is an excellent way to combine physical activity with imaginative play. It helps children develop motor skills, express creativity, and enjoy group dynamics in
              a playful environment.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/3Yex1iM_-2I' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
