import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

const bodyFeelingCategories = [
  { emoji: '💪', category: 'Energetic' },
  { emoji: '😄', category: 'Relaxed' },
  { emoji: '😴', category: 'Tired' },
  { emoji: '🤕', category: 'Achy' },
  { emoji: '😓', category: 'Numb' },
  { emoji: '😔', category: 'Heavy' },
  { emoji: '😊', category: 'Comfortable' },
  { emoji: '💪', category: 'Powerful' },
  { emoji: '🏃‍♂️', category: 'Vibrant' },
  { emoji: '🥰', category: 'Nourished' },
  { emoji: '😖', category: 'Tense' },
  { emoji: '😌', category: 'Calm' },
];

export default function BodyFeelingScreen({ route, navigation }: { route: any; navigation: NavigationProp<any> }) {
  const { selectedMood } = route.params; // Retrieve the selected mood from the previous screen
  const [selectedBodyFeeling, setSelectedBodyFeeling] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedBodyFeeling(category);
  };

  const handleNext = () => {
    if (selectedBodyFeeling) {
      console.log(`Selected Mood: ${selectedMood}, Body Feeling: ${selectedBodyFeeling}`);
      navigation.navigate('ReflectionScreen', { selectedMood, selectedBodyFeeling }); // Navigate to ReflectionScreen
    } else {
      console.log('Please select a body feeling');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>How is your body feeling?</Text>
      <ScrollView contentContainerStyle={styles.categoryContentContainer}>
        {bodyFeelingCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryBox, selectedBodyFeeling === item.category && styles.selectedCategory]}
            onPress={() => handleCategorySelect(item.category)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={[styles.category, selectedBodyFeeling === item.category && styles.selectedCategoryText]}>
              {item.category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F8FF', // Light blue background color (same as Journal Entry)
      padding: 16,
      alignItems: 'center',
    },
    question: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#003366', // Dark blue color for text (same as Journal Entry)
      marginBottom: 20,
    },
    tabContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    tab: {
      backgroundColor: '#A5D8FF', // Light blue for tabs (same as Journal Entry)
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginRight: 10,
      borderRadius: 20,
    },
    activeTab: {
      backgroundColor: '#003366', // Dark blue for active tab (same as Journal Entry)
    },
    tabText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    categoryContentContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between', // Ensure 3 per row
      marginBottom: 30,
    },
    categoryBox: {
      width: '28%', // 3 boxes in one row (adjust the width)
      height: 110,
      backgroundColor: '#A5D8FF', // Light blue for category boxes (same as Journal Entry)
      alignItems: 'center',
      justifyContent: 'center',
      margin: 8,
      borderRadius: 10,
    },
    selectedCategory: {
      backgroundColor: '#003366', // Dark blue for selected category (same as Journal Entry)
    },
    selectedCategoryText: {
      color: '#fff', // White text for selected category (ensuring visibility)
    },
    emoji: {
      fontSize: 28,
    },
    category: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#003366', // Dark blue for category text (same as Journal Entry)
      marginTop: 5,
    },
    nextButton: {
      width: '95%', // Ensures the next button spans the width of 3 boxes
      backgroundColor: '#003366', // Dark blue for the next button (same as Journal Entry)
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
  
  
