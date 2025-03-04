import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'FrustrationTask1'>;

export default function FrustrationTask1Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Frustration.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Anger Coloring Activity</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              This activity helps children recognize and manage their anger by expressing their emotions through coloring. It provides a creative outlet for them to process their feelings in a healthy
              way.
            </Text>

            <Text style={styles.stepTitle}>🖍️ Step 1: Gather Coloring Materials</Text>
            <Text style={styles.stepText}>
              Collect coloring materials such as crayons, markers, or colored pencils, along with printable coloring pages that depict different emotions or scenarios. You can find free anger
              management coloring pages online.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 2: Identify Angry Feelings</Text>
            <Text style={styles.stepText}>
              Discuss with the child what situations or events make them feel angry. Encourage them to think about how their body feels when they are angry (e.g., clenched fists, tight muscles).
            </Text>

            <Text style={styles.stepTitle}>🎨 Step 3: Color the Emotion</Text>
            <Text style={styles.stepText}>
              Ask the child to choose colors that represent their anger and color the provided pages. This helps them externalize their feelings and recognize the intensity of their emotions.
            </Text>

            <Text style={styles.stepTitle}>💬 Step 4: Discuss the Artwork</Text>
            <Text style={styles.stepText}>
              After coloring, have a conversation about their artwork. Ask questions like, "What does this color represent?" or "How did you feel while coloring this part?" This encourages verbal
              expression of their emotions.
            </Text>

            <Text style={styles.stepTitle}>🕊️ Step 5: Introduce Calming Techniques</Text>
            <Text style={styles.stepText}>
              Teach the child simple calming techniques such as deep breathing or counting to ten. Discuss how they can use these techniques when they start to feel angry.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Recognizing and expressing anger through creative activities like coloring can be a constructive way for children to manage their emotions. Encourage them to use these techniques
              whenever they feel overwhelmed by anger.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/AQIQCOY_Im0' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
