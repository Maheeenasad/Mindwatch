import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import NavigationTab from '@/components/NavigationTab';

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

export default function HomeScreen({ navigation }: Props) {
  const [userName, setUserName] = useState('');
  const [quote, setQuote] = useState<string>('');

  const quotes = [
    'The greatest wealth is mental health. Take a deep breath and keep moving forward.',
    "Believe you can and you're halfway there.",
    'Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.',
    'Happiness is not by chance, but by choice.',
    "Don't watch the clock; do what it does. Keep going.",
    'The only limit to our realization of tomorrow is our doubts of today.'
  ];

  useEffect(() => {
    const fetchUserName = async () => {
      const name = await AsyncStorage.getItem('userName');
      if (name) {
        setUserName(name);
      }
    };

    fetchUserName();
    const focusListener = navigation.addListener('focus', fetchUserName); // Refresh on screen focus
    return () => focusListener();
  }, [navigation]);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const handleFeaturePress = (featureName: string) => {
    if (featureName === 'Journaling') {
      navigation.navigate('Journaling');
    }
    if (featureName === 'Islamic') {
      navigation.navigate('Islamic');
    }
    if (featureName === 'Exercises') {
      navigation.navigate('Exercises');
    }
    if (featureName === 'AI Companion') {
      navigation.navigate('Chatbot');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.greeting}>Hi, {userName || 'Guest'}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image source={require('@/assets/images/profile.png')} style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Image source={require('@/assets/mw-logo.png')} style={styles.logo} />
          <Text style={styles.title}>Mindwatch</Text>
          <Text style={styles.tagline}>Your Companion for Mental Wellness</Text>
        </View>
        <View style={styles.featuresContainer}>
          <Text style={styles.featuresTitle}>Explore Features</Text>
          <View style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <TouchableOpacity key={index} style={styles.featureTile} onPress={() => handleFeaturePress(feature.name)}>
                <Image source={feature.icon} style={styles.featureIcon} />
                <Text style={styles.featureText}>{feature.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={{ alignItems: 'center', width: '100%' }}>
          <TouchableOpacity style={styles.moodTracking} onPress={() => navigation.navigate('MoodTracking')}>
            <Image source={require('@/assets/icons/mood.png')} style={styles.moodImage} />
            <Text style={styles.moodTrackingText}>Track Your Mood & Stress Now!</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quoteContainer}>
          <Text style={styles.quote}>{quote}</Text>
        </View>
      </ScrollView>
      <NavigationTab />
    </View>
  );
}

// Features data
const features = [
  { name: 'AI Companion', icon: require('@/assets/icons/robot.png') },
  { name: 'Journaling', icon: require('@/assets/icons/journal.png') },
  { name: 'Exercises', icon: require('@/assets/icons/meditation.png') }, // Combined icon
  { name: 'Islamic', icon: require('@/assets/icons/mosque.png') }
];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF', // Keeping light grey for the main container
    padding: 16,
    paddingBottom: 80
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 16,
    marginTop: 35
  },
  moodImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 0,
    marginTop: -10
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366' // Dark blue for greeting text
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: '#FFF', // White background for header
    paddingVertical: 20,
    width: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003366' // Dark blue for title
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
    resizeMode: 'contain'
  },
  tagline: {
    fontSize: 16,
    color: '#003366',
    marginTop: 8
  },
  statsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
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
    color: '#003366' // Dark blue for stats title
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  stat: {
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003366' // Dark blue for stat numbers
  },
  statLabel: {
    fontSize: 14,
    color: '#888'
  },
  featuresContainer: {
    marginBottom: 24
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#003366'
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  featureTile: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  featureIcon: {
    width: 50,
    height: 50
    // marginBottom: 8
  },
  featureText: {
    fontSize: 14,
    color: '#003366'
  },
  moodTracking: {
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 16,
    marginTop: -20,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  moodTrackingText: {
    fontSize: 14,
    fontWeight: 'medium',
    color: '#003366'
  },
  quoteContainer: {
    backgroundColor: '#003366', // Dark blue for quote background
    borderRadius: 12,
    padding: 16
  },
  quote: {
    fontSize: 16,
    color: '#FFF', // White text for quote
    fontStyle: 'italic',
    textAlign: 'center'
  }
});
