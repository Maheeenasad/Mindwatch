import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask10'>;

export default function LonelinessTask10Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Trying a New Hobby</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-60 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in a new hobby can be a powerful way for teenagers to combat feelings of loneliness, boost self-esteem, and discover new passions. Hobbies provide opportunities for
              self-expression, skill development, and social interaction, all of which contribute to improved mental health and overall well-being.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}📝 Step 1: Identify Your Interests</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Reflect on activities that intrigue you or skills you've always wanted to learn. Consider areas like art, music, sports, writing,
              or technology.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔍 Step 2: Research Potential Hobbies</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Explore various hobbies that align with your interests. Look for online tutorials, local clubs, or community classes that offer
              beginner sessions.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🛠️ Step 3: Gather Necessary Materials</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Once you've chosen a hobby, compile the essential tools or materials. Starting simple can help you gauge your interest without a
              significant investment.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}⏲️ Step 4: Dedicate Regular Time</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Allocate specific periods in your week to practice or engage in your new hobby. Consistency is key to developing skills and
              deriving enjoyment.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🤝 Step 5: Connect with Others</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Join groups or online communities centered around your hobby. Sharing experiences and learning from others can enhance your skills
              and provide social connections.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Embarking on a new hobby can open doors to personal growth, new friendships, and a deeper understanding of yourself. Embrace the journey, and remember that the goal is enjoyment and
              self-discovery.
            </Text>
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
