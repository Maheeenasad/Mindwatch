import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HappinessTask14'>;

export default function HappinessTask14Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/HappinessTask5.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Gardening Therapy</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~30-60 minutes, 2-3 times a week</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Gardening therapy, also known as horticultural therapy, involves engaging in gardening activities to improve mental and physical well-being. This practice has been shown to reduce
              stress, enhance mood, and promote overall health.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Plan Your Garden Space</Text>
            <Text style={styles.stepText}>
              - **Duration**: 15 minutes{'\n'}- **Activity**: Decide on the type of garden you want—be it a vegetable plot, flower bed, or indoor plants. Consider the space available and the amount of
              sunlight it receives. Planning sets the foundation for a successful gardening experience.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Gather Necessary Tools and Supplies</Text>
            <Text style={styles.stepText}>
              - **Duration**: 20 minutes{'\n'}- **Activity**: Collect essential gardening tools such as gloves, trowels, watering cans, and appropriate soil. Having the right tools makes the process
              more enjoyable and efficient.
            </Text>

            <Text style={styles.stepTitle}>🌱 Step 3: Plant Selection and Soil Preparation</Text>
            <Text style={styles.stepText}>
              - **Duration**: 30 minutes{'\n'}- **Activity**: Choose plants that are suitable for your climate and gardening space. Prepare the soil by removing weeds and adding compost to enrich it.
              This step ensures that your plants have a healthy environment to grow.
            </Text>

            <Text style={styles.stepTitle}>💧 Step 4: Planting and Watering</Text>
            <Text style={styles.stepText}>
              - **Duration**: 30-45 minutes{'\n'}- **Activity**: Plant your chosen seeds or seedlings at the appropriate depth and spacing. Water them adequately to establish roots. This hands-on
              activity connects you directly with nature, fostering mindfulness and relaxation.
            </Text>

            <Text style={styles.stepTitle}>🌿 Step 5: Regular Maintenance</Text>
            <Text style={styles.stepText}>
              - **Duration**: 15 minutes per session{'\n'}- **Activity**: Engage in routine tasks like weeding, pruning, and watering. Regular maintenance not only keeps your garden healthy but also
              provides ongoing therapeutic benefits.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♂️ Step 6: Reflect and Enjoy</Text>
            <Text style={styles.stepText}>
              - **Duration**: 10 minutes{'\n'}- **Activity**: Spend time observing the growth and changes in your garden. Reflect on the nurturing process and the tranquility it brings. This
              reflection enhances mindfulness and a sense of accomplishment.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating gardening into your routine can lead to significant improvements in mental and physical health. Embrace this practice to cultivate not only your garden but also your
              well-being.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/PwyxnFHfpJA' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
