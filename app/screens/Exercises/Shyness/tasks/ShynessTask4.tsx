import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ShynessTask4'>;

export default function ShynessTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ShynessTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Compliment Sharing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The "Compliment Sharing" exercise aims to help children overcome shyness by encouraging them to give and receive compliments. This activity fosters positive social interactions, enhances
              self-esteem, and builds confidence in communication.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Explain the Importance of Compliments</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Discussion:</Text> Talk to your child about what compliments are and how they can make others feel appreciated and valued. Explain that giving
              compliments is a kind way to connect with others.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 2: Brainstorm Compliments Together</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Sit down with your child and come up with a list of genuine compliments they can give to others. Focus on specific qualities or
              actions, such as "You did a great job sharing your toys today."
            </Text>

            <Text style={styles.stepTitle}>🎭 Step 3: Role-Play Giving and Receiving Compliments</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Practice:</Text> Engage in role-playing scenarios where you and your child take turns giving and receiving compliments. This practice helps them
              become comfortable with the exchange.
            </Text>

            <Text style={styles.stepTitle}>👨‍👩‍👧‍👦 Step 4: Implement Compliment Sharing in Daily Life</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Application:</Text> Encourage your child to give at least one compliment to a family member, friend, or classmate each day. Discuss their
              experiences and feelings afterward.
            </Text>

            <Text style={styles.stepTitle}>🌟 Step 5: Reflect and Reinforce</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Reflection:</Text> At the end of the week, reflect on the compliment-sharing experience with your child. Praise their efforts and discuss any
              positive outcomes to reinforce the behavior.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/YnpFouTaTDo' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
