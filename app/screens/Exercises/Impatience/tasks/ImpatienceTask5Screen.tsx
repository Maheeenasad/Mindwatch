import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask5'>;

export default function ImpatienceTask5Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Story Time Patience</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Storytelling is a powerful tool to teach children the value of patience. Through engaging narratives and interactive discussions, children can learn to appreciate the importance of
              waiting and self-control.
            </Text>

            <Text style={styles.stepTitle}>📖 Step 1: Choose a Story Highlighting Patience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Select a children's book that emphasizes the theme of patience. For example, "Waiting Is Not Easy!" by Mo Willems portrays a
              character learning to wait patiently.
            </Text>

            <Text style={styles.stepTitle}>🛋️ Step 2: Create a Comfortable Storytelling Environment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Set up a cozy reading area with soft seating and minimal distractions. This environment helps children focus and engage more
              deeply with the story.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Engage in Interactive Storytelling</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> As you read, pause to ask open-ended questions about the characters' feelings and actions. For instance, "How do you think the
              character feels about waiting?" This encourages children to reflect on the concept of patience.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 4: Discuss Personal Experiences</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After the story, invite children to share times when they had to be patient. Discuss how they felt and what strategies helped them
              wait calmly.
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 5: Role-Play Scenarios</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Create simple role-playing situations where children practice patience, such as waiting for a turn or standing in line. This
              hands-on approach reinforces the lesson learned from the story.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating stories that highlight patience into regular reading routines can help children understand and value this important trait. Through discussion and role-play, they can apply
              these lessons to real-life situations, enhancing their ability to wait calmly and thoughtfully.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/8LvFdMGIVSU' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
