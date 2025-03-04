import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask2'>;

export default function FrustrationTask2Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/FrustrationTask2.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Bubble Wrap Stomping</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Bubble Wrap Stomping is a fun and physical activity that allows children to release pent-up energy and frustration in a safe and controlled manner. By engaging in this activity, children
              can experience sensory satisfaction and emotional release, helping them manage feelings of anger or frustration.
            </Text>

            <Text style={styles.stepTitle}>🛠️ Step 1: Gather Materials</Text>
            <Text style={styles.stepText}>
              Collect a large sheet of bubble wrap, preferably with large bubbles for maximum popping satisfaction. Ensure the area where the activity will take place is safe and free from obstacles.
            </Text>

            <Text style={styles.stepTitle}>🧦 Step 2: Prepare the Stomping Area</Text>
            <Text style={styles.stepText}>Lay the bubble wrap flat on the floor in an open space. Secure the edges with tape to prevent it from slipping during the activity.</Text>

            <Text style={styles.stepTitle}>🦶 Step 3: Bubble Wrap Footwear (Optional)</Text>
            <Text style={styles.stepText}>For added fun, wrap bubble wrap around the child's feet and secure it with tape. This enhances the sensory experience and increases the popping sounds.</Text>

            <Text style={styles.stepTitle}>🚸 Step 4: Stomping Session</Text>
            <Text style={styles.stepText}>
              Encourage the child to stomp, jump, and dance on the bubble wrap. Allow them to express themselves freely, enjoying the tactile feedback and popping sounds.
            </Text>

            <Text style={styles.stepTitle}>🗣️ Step 5: Discuss the Experience</Text>
            <Text style={styles.stepText}>
              After the activity, have a conversation with the child about how they felt during the stomping. Discuss if it helped them feel calmer or relieved any frustration.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Engaging in physical activities like Bubble Wrap Stomping provides children with a healthy outlet for their emotions. It combines sensory play with physical movement, aiding in emotional
              regulation and stress relief.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/8if3vqN2ouY' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
