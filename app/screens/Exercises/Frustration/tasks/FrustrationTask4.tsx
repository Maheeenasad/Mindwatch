import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask4'>;

export default function FrustrationTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Creating a “Calm Down” Jar</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              A “Calm Down” Jar, also known as a glitter jar, is a simple yet effective tool to help children manage their emotions. By focusing on the swirling glitter, children can find a moment of
              calm and regain control over their feelings.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🛠️ Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Clear plastic or glass jar with a tight-fitting lid</Text>
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Warm water</Text>
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Clear glue or glitter glue</Text>
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Fine and chunky glitter</Text>
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Food coloring (optional)</Text>
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Dish soap (optional)</Text>
              {'\n'}- <Text style={{ fontWeight: 'bold' }}>Super glue or hot glue (to secure the lid)</Text>
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔧 Step 2: Prepare the Mixture</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Fill the jar about three-quarters full with warm water.</Text> The warmth helps the glue and glitter mix more easily.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Add clear glue to the water.</Text> The more glue you add, the slower the glitter will settle. Start with about half a cup and adjust as needed.
              {'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Pour in your choice of glitter.</Text> Combining fine and chunky glitter adds visual interest. Start with one to two tablespoons and adjust to
              your preference.{'\n'}
              4. <Text style={{ fontWeight: 'bold' }}>Add a few drops of food coloring</Text> if you'd like to tint the water. This step is optional and depends on your desired aesthetic.{'\n'}
              5. <Text style={{ fontWeight: 'bold' }}>Add a drop or two of dish soap</Text> to help the glitter disperse more evenly and prevent it from clumping.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🔄 Step 3: Mix and Adjust</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Stir the mixture thoroughly</Text> to ensure all components are well combined.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Observe how the glitter settles.</Text> If it falls too quickly, add more glue to slow it down. If it's too slow, add a bit more water.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Top off the jar with additional warm water</Text>, leaving a small space at the top to allow for shaking.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🧒 Step 4: Secure the Lid</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Dry the rim of the jar and the lid</Text> to ensure they are free from moisture.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Apply super glue or hot glue</Text> around the inside edge of the lid.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Carefully screw the lid onto the jar</Text>, ensuring it's tight and secure to prevent leaks.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌟 Step 5: Using the Calm Down Jar</Text>
            <Text style={styles.stepText}>
              1. <Text style={{ fontWeight: 'bold' }}>Shake the jar vigorously</Text> to suspend the glitter throughout the liquid.{'\n'}
              2. <Text style={{ fontWeight: 'bold' }}>Encourage the child to watch the glitter swirl and slowly settle</Text> to the bottom. This visual can be soothing and serve as a mindfulness
              exercise.{'\n'}
              3. <Text style={{ fontWeight: 'bold' }}>Use the jar during moments of frustration or anxiety</Text> to help the child focus, breathe deeply, and calm down.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}💬 Step 6: Discuss the Experience</Text>
            <Text style={styles.stepText}>
              After using the jar, <Text style={{ fontWeight: 'bold' }}>talk with the child about how they felt</Text> during the process. Discuss how focusing on the glitter helped them feel calmer
              and more in control of their emotions.
            </Text>

            <Text style={styles.stepTitle}>{'\n'}🌈 Final Thought</Text>
            <Text style={styles.stepText}>
              Creating and using a Calm Down Jar provides children with a tangible method to manage their emotions. This simple tool can be a valuable addition to their coping strategies, promoting
              mindfulness and emotional regulation.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/4U02fQwWDfI' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
