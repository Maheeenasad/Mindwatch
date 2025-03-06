import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../types/types';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'PainTask9'>;

export default function PainTask9Screen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={require('@/assets/exercises/PainTask4.jpg')} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>Applying a Warm Compress</Text>

          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>~15-20 minutes</Text>
          </View>

          <View style={styles.stepsContainer}>
            <Text style={styles.description}>
              Applying a warm compress is a simple and effective method to alleviate pain by increasing blood flow, relaxing muscles, and reducing stiffness. This technique can be particularly
              beneficial for teenagers experiencing muscle soreness, menstrual cramps, or tension headaches. This exercise will guide you through the process of creating and applying a warm compress
              safely.
            </Text>

            <Text style={styles.stepTitle}>📝 Step 1: Gather Your Materials</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Collect the following items: - A clean, soft cloth or small towel - A bowl of warm water (ensure it's warm, not hot, to prevent
              burns) - Optional: Uncooked rice and a clean sock for an alternative method
            </Text>

            <Text style={styles.stepTitle}>🌡️ Step 2: Prepare the Warm Compress</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Method 1: Using Warm Water</Text>: {'\n'}- Soak the cloth or towel in the bowl of warm water. - Wring out excess water so the cloth is damp but not
              dripping. {'\n'}- <Text style={{ fontWeight: 'bold' }}>Method 2: Using a Rice Sock</Text>: {'\n'}- Fill a clean sock with uncooked rice and tie or sew the open end. - Heat the sock in
              the microwave for about 30 seconds. Check the temperature and heat in additional 15-second increments if necessary. Ensure it's warm but not too hot.
            </Text>

            <Text style={styles.stepTitle}>🧘‍♀️ Step 3: Apply the Warm Compress</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: Place the warm compress on the area where you're experiencing pain or discomfort. - Ensure the compress is comfortably warm and
              not too hot to prevent skin irritation or burns. - Keep the compress in place for 15-20 minutes.
            </Text>

            <Text style={styles.stepTitle}>🔄 Step 4: Repeat as Necessary</Text>
            <Text style={styles.stepText}>
              - <Text style={{ fontWeight: 'bold' }}>Activity</Text>: You can apply the warm compress several times a day, ensuring there's a break between sessions to allow your skin to rest.
            </Text>

            <Text style={styles.stepTitle}>⚠️ Safety Precautions</Text>
            <Text style={styles.stepText}>
              - Always test the temperature of the compress on a less sensitive area of your skin before full application. - Avoid using a warm compress on areas with open wounds, infections, or
              decreased sensation. - Consult a healthcare professional if you have any concerns or if the pain persists.
            </Text>

            <Text style={styles.stepTitle}>🌟 Final Thought</Text>
            <Text style={styles.stepText}>
              Incorporating warm compresses into your self-care routine can be a comforting and effective way to manage minor aches and pains. Always listen to your body and use heat therapy
              responsibly to promote healing and relaxation.
            </Text>
          </View>

          <View style={styles.videoContainer}>
            <WebView style={styles.video} source={{ uri: 'https://www.youtube.com/embed/odiAeOh5Ti4' }} allowsFullscreenVideo allowsInlineMediaPlayback />
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
