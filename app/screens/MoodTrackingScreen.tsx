import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CONFIG from '../../config';

export default function MoodTrackingScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [analyzedMood, setAnalyzedMood] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
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

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
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
    <View style={styles.screen}>
      <Text style={styles.header}>How are you feeling today?</Text>

      {image && <Image source={{ uri: image }} style={styles.preview} />}

      <TouchableOpacity style={styles.button} onPress={pickImageFromCamera}>
        <Text style={styles.buttonText}>📷 Capture Image</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={pickImageFromGallery}>
        <Text style={styles.buttonText}>🖼 Upload Image</Text>
      </TouchableOpacity>

      {loading ? <ActivityIndicator size='large' color='#003366' /> : analyzedMood ? <Text style={styles.result}>Detected Mood: {analyzedMood}</Text> : null}

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Save Mood</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F0F8FF'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 20
  },
  preview: {
    width: 200,
    height: 200,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#A5D8FF'
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
  submitButton: {
    backgroundColor: '#003366',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginTop: 25,
    width: 200,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5
  },
  submitText: {
    color: '#F0F8FF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
