import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask2'>;

export default function HappinessTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Bubble Fun</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Bubble Fun" is an engaging activity that combines play and mindfulness, allowing children to enjoy the simple joy of bubbles while enhancing their focus and relaxation.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Preparing the Bubble Solution</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Create your own bubble solution by mixing water, dish soap,
              and a little glycerin or corn syrup. This DIY approach adds an element of creativity and science to the fun.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 2: Crafting Bubble Wands</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Use materials like pipe cleaners or straws to create custom
              bubble wands. Shaping them into different forms can add variety to the bubbles produced. This activity encourages creativity and fine motor skills.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Bubble Blowing and Mindfulness</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 5 minutes{'\n'}-<Text style={{ fontWeight: 'bold' }}>Activity:</Text> Find a comfortable outdoor space and begin blowing bubbles.
              Encourage the child to observe the bubbles' colors, movements, and how they float away. This mindful observation can be calming and enhance their awareness of the present moment.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Engaging in bubble activities not only provides joy but also serves as a tool for mindfulness, helping children develop focus and relaxation skills.</Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/gO_nrlqPjQQ' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
