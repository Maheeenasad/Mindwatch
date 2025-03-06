import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask11'>;

export default function HappinessTask11Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Cooking a New Recipe</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~1-2 hours</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Engaging in cooking, especially trying out new recipes, can have significant mental health benefits. It enhances creativity, provides a sense of accomplishment, and can be a mindful
              activity that reduces stress. This exercise encourages you to explore new culinary territories, fostering joy and satisfaction.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Select a New Recipe</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 15-30 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose a recipe you've never tried before. It could be
              from a different cuisine, a new cooking technique, or an ingredient you're unfamiliar with. Selecting something exciting can boost your enthusiasm and engagement.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Gather Ingredients and Tools</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 30-45 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Make a list of all necessary ingredients and kitchen
              tools required for the recipe. Shopping for these items can be part of the adventure, introducing you to new sections of the grocery store or local markets.
            </Text>

            <Text style={styles.stepTitle}>👩‍🍳 Step 3: Prepare and Cook</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 1-2 hours{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Follow the recipe step-by-step, embracing the process of
              creating something new. Focus on the sensory experiences—the aromas, textures, and colors—as this mindfulness can enhance the therapeutic benefits of cooking.
            </Text>

            <Text style={styles.stepTitle}>🍽️ Step 4: Enjoy and Reflect</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Duration:</Text> 30 minutes{'\n'}- <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Savor the dish you've prepared. Reflect on the
              experience—what you enjoyed, any challenges you faced, and how you felt throughout the process. Sharing the meal with others can also enhance social connections and joy.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Trying out new recipes not only enriches your culinary skills but also contributes to mental well-being by promoting creativity, mindfulness, and a sense of achievement. Embrace the
              kitchen as a space for exploration and happiness.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/CEVDoHlQOMc' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
