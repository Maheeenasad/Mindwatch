import React, { useState } from 'react';
import { 
  View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator 
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from "../../../config";

const therapeuticQuestions = [
  { question: "What would you want right now?", placeholder: "e.g., Something to relax my mind..." },
  { question: "What is on your mind?", placeholder: "e.g., I am thinking about my work..." },
  { question: "Have you offered all 5 prayers today?", placeholder: "e.g., Yes, I prayed all..." },
  { question: "Have you done Zikr today?", placeholder: "e.g., Yes, I did Zikr in the morning..." },
  { question: "How are you feeling spiritually?", placeholder: "e.g., I feel spiritually connected..." },
  { question: "Is there something you would like to change in your life?", placeholder: "e.g., I wish I had more time for myself..." },
  { question: "What has been the most challenging for you recently?", placeholder: "e.g., Managing work-life balance..." },
];

export default function TherapeuticQuestionsScreen({ route, navigation }: { route: any; navigation: any }) {
  const { selectedMood, selectedBodyFeeling, reflectionText } = route.params;
  const [answers, setAnswers] = useState<string[]>(Array.from({ length: therapeuticQuestions.length }, () => ''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state


  const handleAnswerChange = (index: number, text: string) => {
    setAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = text;
      return newAnswers;
    });
  };

  
  const handleFinish = async () => {
    const currentDate = new Date();  // This is in the local time zone
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Month is 0-based, so we add 1
    const day = currentDate.getDate();
  
    // Create the journal data in local time, then convert to UTC
    const dateInUTC = new Date(Date.UTC(year, month - 1, day));
  
    const journalData = {
      mood: selectedMood,
      bodyFeeling: selectedBodyFeeling,
      reflectionText,
      therapeuticAnswers: answers,
      day: dateInUTC.getUTCDate(),  // Use UTC date when sending
      month: dateInUTC.getUTCMonth() + 1,  // UTC month
      year: dateInUTC.getUTCFullYear(),  // UTC year
    };
  
    console.log('Sending data:', journalData);
  
    try {
      const token = await AsyncStorage.getItem('userToken');
      console.log('Token retrieved:', token); // Ensure token is not null
  
      if (!token) {
        throw new Error('No token found');
      }
  
      const response = await axios.post(
        `${CONFIG.SERVER_URL}/journal`, 
        journalData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      console.log('Entry saved:', response.data);
      navigation.navigate('Journaling');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || 'Error saving journal entry.');
      } else {
        setError('Error saving journal entry.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Therapeutic Questions from Psychologists</Text>
  
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {therapeuticQuestions.map((item, index) => (
          <View key={index} style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
            <TextInput
              style={styles.textArea}
              multiline
              numberOfLines={2}
              placeholder={item.placeholder}
              value={answers[index]}
              onChangeText={(text) => handleAnswerChange(index, text)}
            />
          </View>
        ))}
      </ScrollView>
  
      <TouchableOpacity style={styles.finishButton} onPress={handleFinish} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.finishButtonText}>Finish</Text>}
      </TouchableOpacity>
  
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light blue background color (same as previous screens)
    padding: 16,
    alignItems: 'stretch', // Stretch the container to fit the width
    justifyContent: 'flex-start', // Align content to the top of the screen
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Dark blue color for the heading (consistent with the app theme)
    marginBottom: 20,
    textAlign: 'center', // Center the heading text
    paddingHorizontal: 20,
  },
  scrollContainer: {
    width: '100%',
    paddingBottom: 40,
  },
  questionContainer: {
    marginBottom: 20,
    width: '100%', // Ensures the input fields and questions take full width of the container
    alignItems: 'stretch', // Ensure elements inside are stretched and aligned to full width
    paddingHorizontal: 16, // Add some padding to the sides
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366', // Dark blue color for question text (same as previous screens)
    marginBottom: 10,
    textAlign: 'left', // Align question text to the left
  },
  textArea: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    textAlignVertical: 'top', // Align text to the top
  },
  finishButton: {
    width: '95%', // Ensures the button fits neatly on the screen
    backgroundColor: '#003366', // Dark blue color for the finish button
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center', // Center the finish button horizontally
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center', // Center the error text
  },
});

  
