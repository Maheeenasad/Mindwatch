import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CONFIG from '../../config';
import NavigationTab from '@/components/NavigationTab';

export default function MoodTrackingScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzedMood, setAnalyzedMood] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const pickImage = async (fromCamera: boolean) => {
    const result = fromCamera
      ? await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true
        })
      : await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          base64: true
        });

    if (!result.canceled && result.assets[0].base64) {
      setImage(result.assets[0].uri);
      analyzeMood(result.assets[0].base64);
    }
  };

  const analyzeMood = async (base64Image: string) => {
    setLoading(true);
    setAnalyzedMood(null);

    try {
      const response = await fetch(`${CONFIG.SERVER_URL}/analyze-mood`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: base64Image })
      });

      const data = await response.json();
      setAnalyzedMood(data.mood);
    } catch (error) {
      console.error('Error analyzing mood:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.screen}>
          {/* Today's Summary */}
          <View style={styles.statsContainer}>
            <Text style={styles.statsTitle}>Today's Summary</Text>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>120/90</Text>
                <Text style={styles.statLabel}>Blood Pressure</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>72 bpm</Text>
                <Text style={styles.statLabel}>Heart Rate</Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>90%</Text>
                <Text style={styles.statLabel}>Blood Oxygen</Text>
              </View>
            </View>
          </View>

          <Text style={styles.mainHeading}>Detect your Mood and Stress level by giving your facial expressions</Text>

          {image && <Image source={{ uri: image }} style={styles.preview} />}

          <TouchableOpacity style={styles.button} onPress={() => pickImage(true)}>
            <Text style={styles.buttonText}>📷 Capture Image</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => pickImage(false)}>
            <Text style={styles.buttonText}>🖼 Upload Image</Text>
          </TouchableOpacity>

          {loading ? (
            <ActivityIndicator size='large' color='#003366' style={{ marginTop: 15 }} />
          ) : analyzedMood ? (
            <>
              <Text style={styles.result}>Detected Mood: {analyzedMood}</Text>
              <Text style={styles.stressLevel}>Stress Level: Relaxed</Text>
            </>
          ) : null}
        </View>
      </ScrollView>

      {/* Fixed at the bottom */}
      <NavigationTab />
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
  screen: {
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    paddingVertical: 20
  },
  preview: {
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#A5D8FF'
  },
  mainHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#A5D8FF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 12,
    width: 200,
    alignItems: 'center',
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5
  },
  buttonText: {
    color: '#003366',
    fontSize: 16,
    fontWeight: '600'
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 15
  },
  statsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#003366'
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  stat: {
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    marginRight: 10
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginRight: 10
  },
  stressLevel: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 18,
    fontWeight: '600',
    color: '#ff6b6b'
  }
});
