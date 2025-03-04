import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FearOfLossTask1'>;

export default function FearOfLossTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FearOfLoss.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Memory Jar</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Creating a Memory Jar is a therapeutic activity that helps children process feelings of loss by commemorating cherished memories. This exercise encourages expression and reflection,
              aiding in emotional healing.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              Collect the following items:
              {'\n'}- A clean, empty jar with a lid
              {'\n'}- Colored tissue paper or construction paper
              {'\n'}- Glue or Mod Podge
              {'\n'}- Scissors
              {'\n'}- Markers or pens
              {'\n'}- Small pieces of paper or cardstock for writing memories
              {'\n'}- Optional: Glitter, stickers, ribbons for decoration
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 2: Decorate the Jar</Text>
            <Text style={styles.stepText}>
              Encourage the child to decorate the outside of the jar using the materials gathered. They can cut shapes from the colored paper and adhere them to the jar with glue or Mod Podge. Adding
              personal touches like drawings or stickers can make the jar more meaningful.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 3: Write Down Memories</Text>
            <Text style={styles.stepText}>
              Once the jar is decorated, invite the child to write down happy or significant memories they shared with the person they are grieving. Each memory should be on a separate piece of paper.
              If the child is too young to write, they can draw pictures representing the memories.
            </Text>

            <Text style={styles.stepTitle}>📥 Step 4: Fill the Jar</Text>
            <Text style={styles.stepText}>
              Fold each memory and place it into the jar. Over time, they can continue to add more memories as they recall them. This ongoing process can provide comfort and a sense of connection to
              their loved one.
            </Text>

            <Text style={styles.stepTitle}>🕯️ Step 5: Reflect and Share</Text>
            <Text style={styles.stepText}>
              Set aside moments to open the jar and read the memories, either alone or with family members. This practice can facilitate discussions about feelings and keep the memory of the loved one
              alive.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              A Memory Jar serves as a tangible reminder of the enduring bond with the deceased, helping children navigate their grief journey by focusing on positive recollections and shared
              experiences.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView
              source={{ uri: 'https://www.youtube.com/embed/bkVr38P34G4' }} // Making Sand Memory Jars
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
    backgroundColor: '#F0F8FF',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: width,
    height: 250,
    resizeMode: 'cover',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderColor: '#003366',
    borderWidth: 2,
    alignSelf: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 16,
    color: '#003366',
    fontWeight: '600',
  },
  stepsContainer: {
    backgroundColor: '#E3F2FD',
    padding: 15,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
    lineHeight: 22,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 10,
  },
  stepText: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
    lineHeight: 22,
  },
  videoContainer: {
    marginTop: 20,
    width: '100%',
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  completeButton: {
    marginTop: 20,
    backgroundColor: '#003366',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
