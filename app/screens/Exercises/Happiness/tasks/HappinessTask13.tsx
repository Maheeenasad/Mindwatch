import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask13'>;

export default function HappinessTask13Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Spending Time with Loved Ones</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>Varies based on activity</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in quality time with family and friends is essential for mental and emotional well-being. It fosters strong emotional bonds, reduces stress, and enhances overall happiness. This
              exercise encourages you to plan and participate in meaningful activities with your loved ones.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Plan a Shared Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 30-60 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Collaborate with your family or friends to choose an
              activity everyone enjoys. This could be a game night, cooking a meal together, or going for a walk. Planning together ensures everyone's interests are considered.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Engage Fully in the Activity</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> Varies based on chosen activity{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> During the activity, focus on being
              present. Put away distractions like phones and engage in meaningful conversations. This presence strengthens connections and creates lasting memories.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 3: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 15-20 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After the activity, take time individually or as a
              group to reflect. Discuss what you enjoyed, any challenges faced, and how the experience affected your relationships. Reflection reinforces the positive aspects of spending time
              together.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly dedicating time to loved ones nurtures relationships and contributes significantly to emotional well-being. Embrace these moments as opportunities to connect, support, and grow
              together.
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
