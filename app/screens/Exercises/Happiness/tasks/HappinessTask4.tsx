import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask4'>;

export default function HappinessTask4Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Outdoor Scavenger Hunt</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~45 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              "Outdoor Scavenger Hunt" is an engaging activity that encourages children to explore their surroundings, enhance observation skills, and enjoy physical activity in nature.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Planning the Scavenger Hunt</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Create a list of items commonly found in your local outdoor environment, such as a pinecone, a feather, or a uniquely shaped rock. Ensure
              the items are safe and appropriate for the children's age group.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Preparing Materials</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: Provide each child with a copy of the scavenger hunt list and a bag to collect their findings. Consider including pictures for younger
              children to aid in item identification.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 3: Conducting the Hunt</Text>
            <Text style={styles.stepText}>
              - **Duration**: 25 minutes{'\n'}- **Activity**: Guide the children through the designated area, encouraging them to find and collect the items on their list. Emphasize teamwork,
              curiosity, and respect for nature during the activity.
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 4: Sharing Discoveries</Text>
            <Text style={styles.stepText}>
              - **Duration**: 5 minutes{'\n'}- **Activity**: After the hunt, gather the children to share their findings. Discuss the different items, their characteristics, and any interesting
              observations made during the activity.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              An outdoor scavenger hunt not only provides physical exercise but also fosters a deeper connection with nature and enhances observational skills. It's a fun and educational way to
              encourage children to explore and appreciate their environment.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/cz8LO3IuEPk' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
