import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'IrritationTask2'>;

export default function IrritationTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/IrritationTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Clay Squeezing</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-30 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Clay squeezing is a therapeutic activity that helps children manage irritation by engaging their senses and enhancing fine motor skills. This exercise provides a calming effect, allowing
              children to express emotions and reduce stress through tactile manipulation.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Prepare the Materials</Text>
            <Text style={styles.stepText}>
              - **Activity**: Gather non-toxic modeling clay or play dough in various colors. Ensure the clay is soft and easy to manipulate. Set up a clean, flat surface where the child can
              comfortably engage in the activity.
            </Text>

            <Text style={styles.stepTitle}>👐 Step 2: Introduce the Activity</Text>
            <Text style={styles.stepText}>
              - **Activity**: Explain to the child that they will be using the clay to create shapes, figures, or simply squeeze and mold it as they like. Encourage them to explore the texture and
              temperature of the clay, emphasizing that there's no right or wrong way to play.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 3: Encourage Creativity</Text>
            <Text style={styles.stepText}>
              - **Activity**: Invite the child to create anything they imagine—be it animals, shapes, or abstract forms. This creative process allows for self-expression and can be particularly
              soothing, helping to alleviate feelings of irritation.
            </Text>

            <Text style={styles.stepTitle}>🤲 Step 4: Squeezing and Molding</Text>
            <Text style={styles.stepText}>
              - **Activity**: Encourage the child to squeeze, roll, and stretch the clay. These actions can help release tension and improve hand strength, providing both physical and emotional
              benefits.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - **Activity**: After the activity, discuss with the child how they felt during the clay squeezing. Ask if it was enjoyable and if it helped them feel more relaxed or less irritated.
              This reflection can enhance self-awareness and emotional understanding.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in clay squeezing offers children a hands-on method to manage irritation, develop fine motor skills, and express emotions creatively. This simple activity can be a valuable tool
              in promoting emotional well-being and resilience.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/aEcdPvTiQ9A' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
