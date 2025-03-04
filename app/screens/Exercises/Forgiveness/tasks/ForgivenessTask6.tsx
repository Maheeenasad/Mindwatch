import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask6'>;

export default function ForgivenessTask6Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/Forgiveness.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Journaling About Hurt</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Journaling is a therapeutic practice that allows teenagers to process and express their emotions. This activity focuses on guiding teens to write about their feelings of hurt, aiding
              them in understanding and managing these emotions constructively.
            </Text>

            <Text style={styles.stepTitle}>🧠 Step 1: Introduction to Journaling</Text>
            <Text style={styles.stepText}>
              Explain to the teenager that journaling involves writing down thoughts and feelings to better understand them. It's a private space to express emotions without judgment, helping to
              process complex feelings like hurt or anger.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Reflect on a Hurtful Experience</Text>
            <Text style={styles.stepText}>
              Encourage the teen to think about a recent situation where they felt hurt. It could be a disagreement with a friend, a misunderstanding at home, or any event that left them feeling
              upset. Assure them that they won't have to share this writing unless they choose to.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 3: Write About the Experience</Text>
            <Text style={styles.stepText}>Guide them to write freely about the event, focusing on:</Text>
            <Text style={styles.bulletPoint}>• What happened?</Text>
            <Text style={styles.bulletPoint}>• How did it make you feel at the moment?</Text>
            <Text style={styles.bulletPoint}>• How do you feel about it now?</Text>
            <Text style={styles.bulletPoint}>• What would you like to say to the person involved?</Text>
            <Text style={styles.bulletPoint}>• What have you learned from this experience?</Text>

            <Text style={styles.stepTitle}>🤔 Step 4: Reflect on the Writing</Text>
            <Text style={styles.stepText}>
              After writing, encourage the teen to read over their entry and reflect on any new insights or feelings that arise. This reflection can help them understand their emotions better and
              consider steps toward healing or forgiveness.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Regularly writing about hurtful experiences can assist teenagers in processing emotions, leading to improved emotional well-being and resilience. It's a step toward acknowledging
              feelings and finding healthy ways to cope with them.
            </Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/eQ55asuMp1I' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
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
