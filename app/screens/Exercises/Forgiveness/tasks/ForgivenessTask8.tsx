import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ForgivenessTask8'>;

export default function ForgivenessTask8Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/ForgivenessTask3.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Writing a Letter (Not Sending)</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~20 min</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Writing a letter without the intention of sending it is a therapeutic exercise that allows teenagers to process and express their emotions. This activity guides teens in articulating
              their feelings toward someone who has hurt them, facilitating emotional release and personal growth.
            </Text>

            <Text style={styles.stepTitle}>✍️ Step 1: Reflect on the Hurtful Experience</Text>
            <Text style={styles.stepText}>
              Encourage the teenager to think about a specific incident where they felt wronged or hurt by someone. It could be a friend, family member, or anyone else. Emphasize that this letter is
              for their eyes only and will not be sent.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 2: Begin Writing the Letter</Text>
            <Text style={styles.stepText}>Guide them to start the letter by addressing the person involved and describing the event in detail. They should focus on:</Text>
            <Text style={styles.bulletPoint}>• What happened?</Text>
            <Text style={styles.bulletPoint}>• How did it make you feel at the time?</Text>
            <Text style={styles.bulletPoint}>• How has it affected you since?</Text>

            <Text style={styles.stepTitle}>💬 Step 3: Express Emotions and Thoughts</Text>
            <Text style={styles.stepText}>
              Encourage them to openly express all their emotions, thoughts, and any unresolved feelings related to the incident. This is a safe space to vent without judgment.
            </Text>

            <Text style={styles.stepTitle}>🤔 Step 4: Reflect on the Writing</Text>
            <Text style={styles.stepText}>
              After completing the letter, suggest they read it over and reflect on any new insights or feelings that emerge. This reflection can aid in understanding their emotions and moving toward
              forgiveness.
            </Text>

            <Text style={styles.stepTitle}>🗑️ Step 5: Decide What to Do with the Letter</Text>
            <Text style={styles.stepText}>
              They can choose to keep the letter, destroy it, or perform a symbolic act like burning it to signify letting go of the negative emotions. This decision is personal and should align with
              what feels most healing for them.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>Writing unsent letters can be a powerful tool for teenagers to process hurt and work toward forgiveness, promoting emotional well-being and resilience.</Text>
          </View>

          {/* Embedded YouTube Video */}
          <View style={styles.videoContainer}>
            <WebView source={{ uri: 'https://www.youtube.com/embed/qyhNvUt68VA' }} style={styles.video} allowsFullscreenVideo={true} javaScriptEnabled={true} domStorageEnabled={true} />
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
