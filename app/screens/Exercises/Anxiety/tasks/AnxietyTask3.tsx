import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AnxietyTask3'>;

export default function AnxietyTask3Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/AnxietyTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Comfort Object Reflection</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~10 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Comfort objects, such as a favorite blanket or stuffed animal, can provide significant emotional support for children, helping them manage anxiety and stress. Reflecting on these items
              can enhance their calming effects and reinforce a child's sense of security.
            </Text>

            <Text style={styles.stepTitle}>🧸 Step 1: Identify the Comfort Object</Text>
            <Text style={styles.stepText}>
              Encourage your child to choose a comfort object that they feel particularly attached to. This could be a stuffed animal, a blanket, or any item that brings them comfort and joy.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 2: Discuss the Object's Significance</Text>
            <Text style={styles.stepText}>
              Sit with your child and talk about why this object is special to them. Ask questions like:
              {'\n'}- What do you love most about this object?
              {'\n'}- How does it make you feel when you hold it?
              {'\n'}- Do you remember when you got it or who gave it to you?
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 3: Creative Expression</Text>
            <Text style={styles.stepText}>
              Encourage your child to express their feelings about the comfort object through a creative activity:{'\n'}
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Drawing or Painting:</Text> Create a picture of the object.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Storytelling:</Text> Write a short
              story or poem about adventures with the object.{'\n'}- <Text style={{ fontWeight: 'bold' }}>Photography:</Text> Take photos of the object in different settings.
            </Text>

            <Text style={styles.stepTitle}>🛏️ Step 4: Incorporate the Object into Daily Routine</Text>
            <Text style={styles.stepText}>
              Discuss ways to include the comfort object in daily activities, especially during times of stress or anxiety. For example:
              {'\n'}- Keeping it nearby during bedtime for a sense of security.
              {'\n'}- Holding it during stressful situations or transitions.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Reflecting on and utilizing comfort objects can be a powerful tool for children to manage anxiety. By acknowledging the importance of these items, children can find solace and
              reassurance in their presence.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/cn9z8lmAUVI' }} // 5 Steps to Creating a Calm Corner for Kids
              style={styles.video}
              allowsFullscreenVideo={true}
              javaScriptEnabled={true}
              domStorageEnabled={true}
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
