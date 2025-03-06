import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'LonelinessTask7'>;

export default function LonelinessTask7Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/LonelinessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Joining an Online Community</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-45 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging with online communities can provide teenagers with a sense of belonging, support, and shared interests, which can help alleviate feelings of loneliness. This activity guides you
              through the process of finding and joining an online community that resonates with your passions and values.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔍 Step 1: Identify Your Interests</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Reflect on your hobbies, passions, or topics you'd like to explore. Whether it's gaming, art, music, or a specific fandom,
              pinpointing your interests will help you find a community that aligns with them.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌐 Step 2: Research Online Communities</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Use platforms like Reddit, Discord, or specialized forums to search for communities related to your interests. For example, if
              you're into art, look for online art forums or Discord servers where artists gather to share their work and tips.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🛡️ Step 3: Evaluate Community Safety</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Before joining, ensure the community is safe and supportive. Look for communities that promote positive interactions and have
              clear guidelines against bullying or harmful behavior.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🤝 Step 4: Join and Introduce Yourself</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Once you've found a suitable community, create an account if necessary, and introduce yourself. Share a bit about your interests
              and what you're hoping to gain from the community. Engaging with others can foster connections and reduce feelings of isolation.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}💬 Step 5: Participate Regularly</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Engage in discussions, share your work or thoughts, and support other members. Active participation can enhance your sense of
              belonging and make the experience more rewarding.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Joining an online community can open doors to new friendships, knowledge, and support systems. Remember to balance online interactions with offline activities and prioritize your
              well-being in all engagements.
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
