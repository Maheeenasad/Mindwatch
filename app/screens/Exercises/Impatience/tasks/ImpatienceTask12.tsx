import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask12'>;

export default function ImpatienceTask12Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ImpatienceTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cooking a Slow Recipe</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~2-3 hours</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in slow cooking not only results in delicious meals but also serves as a practice in patience and mindfulness. This exercise guides you through preparing a slow-cooked recipe to
              enhance your ability to embrace the process and find joy in the journey.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Select a Slow-Cooked Recipe</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose a recipe that requires slow cooking, such as a stew, braised dish, or slow-roasted entrée. Opt for a dish that appeals to
              your taste and allows you to explore new culinary techniques.
            </Text>

            <Text style={styles.stepTitle}>🛒 Step 2: Gather Fresh Ingredients</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Visit a local market to select fresh, high-quality ingredients. Take your time to choose each item thoughtfully, appreciating the
              colors, textures, and aromas.
            </Text>

            <Text style={styles.stepTitle}>🔪 Step 3: Prepare Ingredients Mindfully</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> As you wash, chop, and measure, focus on each action. Notice the sensations and movements involved, allowing yourself to be fully
              present in the preparation process.
            </Text>

            <Text style={styles.stepTitle}>🍲 Step 4: Engage in the Cooking Process</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Follow the recipe's steps with attention and care. Embrace the slow pace of cooking, observing how flavors develop and transform
              over time.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 5: Practice Patience During Cooking</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> While the dish cooks, resist the urge to rush or distract yourself. Use this time for reflection, relaxation, or engaging in a
              calming activity, acknowledging the value of waiting.
            </Text>

            <Text style={styles.stepTitle}>🍽️ Step 6: Savor the Meal</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Once the dish is ready, set a pleasant dining environment. As you eat, focus on the flavors, textures, and satisfaction derived
              from the meal, appreciating the effort and patience invested.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 7: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After dining, contemplate how the process of slow cooking influenced your mood and thoughts. Consider how embracing patience in
              cooking can translate to other areas of your life.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating slow cooking into your routine offers more than just a meal; it provides an opportunity to practice mindfulness and patience. Embracing the art of slow cooking can enrich
              your culinary skills and enhance your overall well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/29DHVPw8oNI' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
