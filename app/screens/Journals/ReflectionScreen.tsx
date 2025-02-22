import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

export default function ReflectionScreen({ route, navigation }: { route: any; navigation: NavigationProp<any> }) {
  const { selectedMood, selectedBodyFeeling } = route.params; // Retrieve the selected mood and body feeling from the previous screen
  const [reflectionText, setReflectionText] = useState('');

  const handleNext = () => {
    if (reflectionText.trim() !== '') {
      console.log(`Mood: ${selectedMood}, Body Feeling: ${selectedBodyFeeling}, Reflection: ${reflectionText}`);
      navigation.navigate('TherapeuticQuestionsScreen', { selectedMood, selectedBodyFeeling, reflectionText });
    } else {
      console.log('Please write something to continue');
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What made you feel this way today?</Text>
  
      <TextInput
        style={styles.textArea}
        multiline
        numberOfLines={6}
        placeholder="Write your reflection here..."
        value={reflectionText}
        onChangeText={setReflectionText}
      />
  
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F8FF', // Light blue background color (same as previous screens)
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center', // Centered content for better alignment
    },
    question: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#003366', // Dark blue color for text (same as previous screens)
      marginBottom: 20,
      textAlign: 'center', // Ensures the question is centered
      paddingHorizontal: 20, // Adds padding for the text to avoid touching the screen edges
    },
    textArea: {
      width: '90%', // Adjusts the width to make the textarea more aligned
      height: 150,
      backgroundColor: '#fff',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      padding: 10,
      fontSize: 16,
      marginBottom: 20,
      textAlignVertical: 'top', // Aligns text to the top of the input box
    },
    nextButton: {
      width: '95%', // Ensures the next button spans the width appropriately
      backgroundColor: '#003366', // Dark blue for the next button (same as previous screens)
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    nextButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
