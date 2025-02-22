import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

// Mood categories with emojis (12 categories each for positive and negative)
const moodCategories = {
  positive: [
    { emoji: '😊', category: 'Happy' },
    { emoji: '😌', category: 'Calm' },
    { emoji: '😁', category: 'Hopeful' },
    { emoji: '😃', category: 'Excited' },
    { emoji: '🙌', category: 'Great' },
    { emoji: '😄', category: 'Joyful' },
    { emoji: '🌟', category: 'Inspired' },
    { emoji: '💪', category: 'Proud' },
    { emoji: '🔥', category: 'Motivated' },
    { emoji: '😊', category: 'Confident' },
    { emoji: '❤️', category: 'Loved' },
    { emoji: '⚡', category: 'Energetic' },
  ],
  negative: [
    { emoji: '😔', category: 'Indifferent' },
    { emoji: '😟', category: 'Worried' },
    { emoji: '😣', category: 'Nervous' },
    { emoji: '😢', category: 'Sad' },
    { emoji: '😤', category: 'Annoyed' },
    { emoji: '😨', category: 'Anxious' },
    { emoji: '😠', category: 'Frustrated' },
    { emoji: '😡', category: 'Irritated' },
    { emoji: '😠', category: 'Furious' },
    { emoji: '😖', category: 'Distressed' },
    { emoji: '😞', category: 'Awful' },
    { emoji: '😱', category: 'Panicked' },
  ],
};

export default function JournalEntryScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [selectedTab, setSelectedTab] = useState<'positive' | 'negative'>('positive'); // Active tab
  const [selectedMood, setSelectedMood] = useState<string | null>(null); // Selected mood

  const handleCategorySelect = (category: string) => {
    setSelectedMood(category);
  };

  const handleNext = () => {
    if (selectedMood) {
      console.log(`Selected Mood: ${selectedMood}`);
      // Navigate to BodyFeelingScreen and pass the selected mood as a parameter
      navigation.navigate('BodyFeelingScreen', { selectedMood });
    } else {
      console.log('Please select a mood');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>What is your mood today?</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'positive' && styles.activeTab]}
          onPress={() => setSelectedTab('positive')}
        >
          <Text style={[styles.tabText, selectedTab === 'positive' && styles.activeTabText]}>Positive</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'negative' && styles.activeTab]}
          onPress={() => setSelectedTab('negative')}
        >
          <Text style={[styles.tabText, selectedTab === 'negative' && styles.activeTabText]}>Negative</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.categoryContentContainer}>
        {moodCategories[selectedTab].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.categoryBox, selectedMood === item.category && styles.selectedCategory]}
            onPress={() => handleCategorySelect(item.category)}
          >
            <Text style={styles.emoji}>{item.emoji}</Text>
            <Text style={[styles.category, selectedMood === item.category && styles.selectedCategoryText]}>
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
    backgroundColor: '#F0F8FF', // Light blue background color
    padding: 16,
    alignItems: 'center',
  },
  question: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366', // Dark blue color for text
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#73C2FF', // Light blue for tabs
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#003366', // Dark blue for active tab
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#fff', // White color for active tab text
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
    backgroundColor: '#A5D8FF', // Light blue for category boxes
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 10,
  },
  selectedCategory: {
    backgroundColor: '#003366', // Dark blue for selected category
  },
  selectedCategoryText: {
    color: '#fff', // White color for selected category text
  },
  emoji: {
    fontSize: 28,
  },
  category: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366', // Dark blue for category text
    marginTop: 5,
  },
  nextButton: {
    width: '95%', // Ensures the next button spans the width of 3 boxes
    backgroundColor: '#003366', // Lighter orange-red for the next button
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

