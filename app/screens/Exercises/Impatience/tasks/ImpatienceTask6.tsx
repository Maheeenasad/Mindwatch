import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ImpatienceTask6'>;

export default function ImpatienceTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Impatience.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Delayed Gratification Test</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20-25 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              The ability to delay gratification is a crucial skill that contributes to long-term success and well-being. This exercise aims to help teenagers understand and practice self-control by
              experiencing the concept of delayed gratification firsthand.
            </Text>

            <Text style={styles.stepTitle}>🍬 Step 1: Understand the Concept</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Begin by discussing what delayed gratification means. Explain that it's the ability to resist the temptation for an immediate
              reward and wait for a later, often more satisfying, reward.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 2: Discuss the Benefits</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Talk about how delaying gratification can lead to better outcomes in various aspects of life, such as academics, relationships,
              and personal goals. For example, waiting to buy something until you've saved enough money can prevent debt and lead to greater satisfaction with the purchase.
            </Text>

            <Text style={styles.stepTitle}>⏳ Step 3: Conduct a Personal Experiment</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Choose a simple temptation that you often face, such as checking your phone during study time or eating a snack before dinner.
              Make a conscious effort to delay this gratification for a set period, like 15 minutes, and observe how it feels.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 4: Reflect on the Experience</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> After the experiment, reflect on the experience. How difficult was it to wait? Did the reward feel more satisfying after waiting?
              What strategies helped you succeed?
            </Text>

            <Text style={styles.stepTitle}>🎯 Step 5: Set a Delayed Gratification Goal</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity:</Text> Identify an area in your life where you can practice delayed gratification, such as saving money for a desired item or dedicating
              time to study before leisure activities. Set a specific goal and plan steps to achieve it.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Developing the ability to delay gratification empowers you to make choices that align with your long-term goals and values. By practicing self-control, you build resilience and increase
              your chances of achieving success in various areas of life.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/ARwTbn4dTRs' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
