import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import NavigationTab from '@/components/NavigationTab';
import CONFIG from '../../../config';
import moment from 'moment-timezone';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SentimentDisplayProps {
  score: number;
}

export default function JournalingScreen({ navigation }: NativeStackScreenProps<any>) {
  const [currentDate, setCurrentDate] = useState(moment().tz('Asia/Karachi').toDate());
  const [activeDay, setActiveDay] = useState<number>(currentDate.getDate());
  const [journalData, setJournalData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [journalEntries, setJournalEntries] = useState<Record<string, boolean>>({});

  const getDaysInMonth = (year: number, month: number) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push({ day: date.getDate(), weekday: date.toLocaleString('en', { weekday: 'short' }) });
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const handleMonthChange = (direction: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1);
    setCurrentDate(newDate);
    setActiveDay(newDate.getDate());
  };

  const handleDayClick = (day: number) => {
    setActiveDay(day); // Set the active day
    setLoading(true);
    fetchJournalEntry(day); // Fetch the journal entry for that day
  };

  const fetchJournalEntry = async (day: number) => {
    const token = await AsyncStorage.getItem('userToken');
    if (!token) {
      navigation.navigate('Login');
      return;
    }

    const dateKey = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day}`;
    const formattedDate = moment.tz({ year: currentDate.getFullYear(), month: currentDate.getMonth(), day }, 'Asia/Karachi').format('YYYY-MM-DD');

    try {
      const response = await fetch(`${CONFIG.SERVER_URL}/journal/${formattedDate}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setJournalData(data);
        setJournalEntries(prev => ({ ...prev, [dateKey]: true }));
      } else if (response.status === 404) {
        setJournalData(null);
        setJournalEntries(prev => ({ ...prev, [dateKey]: false }));
      } else {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
    } catch (error) {
      console.error('Failed to fetch journal entry:', error);
      setJournalData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJournalEntry(activeDay);
  }, [activeDay, currentDate]);

  useEffect(() => {
    const scrollToActiveDay = () => {
      const dayIndex = activeDay - 1;
      const itemWidth = 63 + 8;
      const scrollPosition = Math.max(0, dayIndex * itemWidth - itemWidth * 2);
      scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });
    };
    scrollToActiveDay();
  }, [activeDay, currentDate]);

  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

  const daysWithEntries = Object.keys(journalEntries).filter(key => journalEntries[key]);

  const SentimentDisplay = ({ score }: SentimentDisplayProps) => {
    let sentiment = '';
    let message = '';
    let emoji = '😐';
    let style = styles.sentimentNeutral;

    // More sensitive thresholds with additional categories
    if (score > 0.7) {
      sentiment = 'Ecstatic';
      message = 'You seem to be feeling absolutely wonderful! This is fantastic to see.';
      emoji = '🤩';
      style = styles.sentimentVeryPositive;
    } else if (score > 0.3) {
      sentiment = 'Very Positive';
      message = 'You appear to be in a great mood! Cherish these positive feelings.';
      emoji = '😁';
      style = styles.sentimentPositive;
    } else if (score > 0.1) {
      sentiment = 'Positive';
      message = 'You seem content. Notice what small things are contributing to this good feeling.';
      emoji = '🙂';
      style = styles.sentimentPositive;
    } else if (score < -0.7) {
      sentiment = 'Distressed';
      message = 'You seem to be in significant distress. Please know support is available. Consider reaching out to someone you trust.';
      emoji = '😣';
      style = styles.sentimentVeryNegative;
    } else if (score < -0.4) {
      sentiment = 'Very Negative';
      message = 'You appear to be really struggling. It might help to talk about these feelings or practice some self-care.';
      emoji = '😔';
      style = styles.sentimentNegative;
    } else if (score < -0.15) {
      sentiment = 'Negative';
      message = "You seem a bit down. Remember it's okay to feel this way. What small thing might help lift your spirits?";
      emoji = '😕';
      style = styles.sentimentNegative;
    } else if (score < -0.05) {
      sentiment = 'Slightly Negative';
      message = 'You seem to be feeling a bit off. Maybe some reflection or a short walk could help.';
      emoji = '😐';
      style = styles.sentimentSlightlyNegative;
    } else {
      sentiment = 'Neutral';
      message = 'Your feelings seem balanced. This could be a good time for mindful reflection.';
      emoji = '😐';
      style = styles.sentimentNeutral;
    }

    return (
      <View style={[styles.sentimentContainer, style]}>
        <Text style={styles.sentimentText}>
          {emoji} {sentiment}
        </Text>
        <Text style={styles.sentimentMessage}>{message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => handleMonthChange(-1)} style={styles.arrowContainer}>
          <Text style={styles.arrow}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.month}>{currentDate.toLocaleString('en', { month: 'long', year: 'numeric' })}</Text>
        <TouchableOpacity onPress={() => handleMonthChange(1)} style={styles.arrowContainer}>
          <Text style={styles.arrow}>&gt;</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} ref={scrollViewRef} style={styles.scrollContainer}>
        {days.map((day, index) => (
          <TouchableOpacity key={index} onPress={() => handleDayClick(day.day)}>
            <View style={[styles.dayBox, activeDay === day.day && styles.activeDayBox]}>
              <Text style={[styles.dayText, activeDay === day.day && styles.activeDayText]}>{day.day}</Text>
              <Text style={[styles.weekdayText, activeDay === day.day && styles.activeDayText]}>{day.weekday}</Text>
              {/** Add this line below */}
              {journalEntries[`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${day.day}`] && <View style={styles.dot} />}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={{ marginTop: 20 }} contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
        <View style={styles.placeholderContainer}>
          {loading ? (
            <ActivityIndicator size='large' color='#3A8DFF' />
          ) : journalData ? (
            journalData?.entry ? (
              <View style={styles.entryContainer}>
                <Text style={styles.entryHeading}>What is your mood today?</Text>
                <Text style={styles.entryAnswer}>{journalData.entry.mood}</Text>

                <Text style={styles.entryHeading}>How is your body feeling?</Text>
                <Text style={styles.entryAnswer}>{journalData.entry.bodyFeeling}</Text>

                <Text style={styles.entryHeading}>What made you feel this way today?</Text>
                <Text style={styles.entryAnswer}>{journalData.entry.reflectionText}</Text>

                <Text style={styles.entryHeading}>Therapeutic Questions</Text>
                {[
                  'What would you want right now?',
                  'What is on your mind?',
                  'Have you offered all 5 prayers today?',
                  'Have you done Zikr today?',
                  'How are you feeling spiritually?',
                  'Is there something you would like to change in your life?',
                  'What has been the most challenging for you recently?'
                ].map((question, idx) => (
                  <View key={idx} style={{ marginBottom: 12 }}>
                    <Text style={[styles.entryAnswer, { fontWeight: 'bold' }]}>
                      {idx + 1}. {question}
                    </Text>
                    <Text style={[styles.entryAnswer, { marginLeft: 12, marginTop: 2 }]}>{journalData.entry.therapeuticAnswers[idx] || 'No answer provided.'}</Text>
                  </View>
                ))}

                {/* Moved Sentiment Analysis Section to the end */}
                <Text style={styles.entryHeading}>Overall Sentiment Analysis</Text>
                <Text style={styles.entryAnswer}>Based on your reflection and answers, your overall sentiment is:</Text>
                <SentimentDisplay score={journalData.entry.sentiment?.score || 0} />
                <View style={{ marginTop: 8 }}>
                  <Text style={styles.entryAnswer}>
                    <Text style={{ fontWeight: 'bold' }}>Score:</Text> {(journalData.entry.sentiment?.score || 0).toFixed(2)}
                  </Text>
                  <Text style={styles.entryAnswer}>
                    <Text style={{ fontWeight: 'bold' }}>Comparative:</Text> {(journalData.entry.sentiment?.comparative || 0).toFixed(2)}
                  </Text>
                </View>
              </View>
            ) : (
              <View>
                <Image source={require('@/assets/icons/journal.png')} style={styles.image} />
                <Text style={styles.placeholderText}>You have not filled your journal.</Text>
              </View>
            )
          ) : (
            <View>
              <Image source={require('@/assets/icons/journal.png')} style={styles.image} />
              <Text style={styles.placeholderText}>You have not filled your journal.</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* "Write Journal" Button Appears for Any Selected Day */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.writeButton}
          onPress={() =>
            navigation.navigate('JournalEntry', {
              year: currentDate.getFullYear(),
              month: currentDate.getMonth() + 1,
              day: activeDay
            })
          }>
          <Text style={styles.writeButtonText}>Write Journal</Text>
        </TouchableOpacity>
      </View>

      {/* NavigationTab Component */}
      <NavigationTab />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light blue background color
    padding: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20
  },
  arrowContainer: {
    backgroundColor: '#003366',
    borderRadius: 50,
    padding: 10,
    paddingTop: 7,
    paddingHorizontal: 18
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366'
  },
  scrollContainer: {
    flexDirection: 'row',
    // backgroundColor: '#AADAFF',
    height: 120, // 👈 Restrict height to 80px
    // marginBottom: -100,
    overflow: 'hidden'
  },

  dayBox: {
    width: 63,
    height: 63,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A5D8FF',
    borderRadius: 8,
    marginRight: 8,
    padding: 0
  },

  activeDayBox: {
    backgroundColor: '#003366' // Darker blue for active day
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    margin: 0, // Reset margin
    padding: 0 // Reset padding
  },

  activeDayText: {
    color: '#fff'
  },
  weekdayText: {
    fontSize: 14,
    color: '#888'
  },
  dot: {
    position: 'absolute',
    bottom: 4,
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'white'
  },
  placeholderContainer: {
    alignItems: 'center',
    paddingTop: 0,
    marginTop: 20,
    width: '100%'
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
    alignSelf: 'center',
    marginTop: -40
  },
  placeholderText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center'
  },
  journalEntryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 16,
    paddingBottom: 60 // enough space for button + NavigationTab
  },
  writeButton: {
    backgroundColor: '#003366', // Lighter orange-red for write button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%'
  },
  disabledButton: {
    backgroundColor: '#ccc'
  },
  writeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  entryContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20
    // marginTop: -20
  },

  entryHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginTop: 16,
    marginBottom: 4
  },

  entryAnswer: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22
  },
  sentimentContainer: {
    padding: 10,
    borderRadius: 20,
    marginVertical: 10,
    alignSelf: 'flex-start'
  },
  sentimentText: {
    color: 'white',
    fontWeight: 'bold'
  },
  sentimentMessage: {
    color: 'white',
    marginTop: 5,
    fontSize: 14
  },
  sentimentVeryPositive: {
    backgroundColor: '#2E7D32' // Darker green
  },
  sentimentPositive: {
    backgroundColor: '#4CAF50' // Green
  },
  sentimentNeutral: {
    backgroundColor: '#FFC107' // Yellow
  },
  sentimentSlightlyNegative: {
    backgroundColor: '#FF9800' // Orange
  },
  sentimentNegative: {
    backgroundColor: '#F44336' // Red
  },
  sentimentVeryNegative: {
    backgroundColor: '#C62828' // Darker red
  }
});
