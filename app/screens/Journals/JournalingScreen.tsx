import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import NavigationTab from "@/components/NavigationTab"
import CONFIG from "../../../config";

export default function JournalingScreen({ navigation }: NativeStackScreenProps<any>) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeDay, setActiveDay] = useState<number>(currentDate.getDate());
  const [journalData, setJournalData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const scrollViewRef = useRef<ScrollView>(null);
  const [journalEntries, setJournalEntries] = useState<Record<number, boolean>>({});

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
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + direction,
      1
    );
    setCurrentDate(newDate);
    setActiveDay(newDate.getDate());
  };
        
   
  const handleDayClick = (day: number) => {
    setActiveDay(day); // Set the active day
    setLoading(true);
    fetchJournalEntry(day); // Fetch the journal entry for that day
  };

  const fetchJournalEntry = async (day: number) => {
    try {
      const response = await fetch(
        `${CONFIG.SERVER_URL}/journal/${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${day}`
      );

      if (response.ok) {
        const data = await response.json();
        setJournalData(data);
        setJournalEntries((prev) => ({ ...prev, [day]: true }));
      } else if (response.status === 404) {
        setJournalData(null);
        setJournalEntries((prev) => ({ ...prev, [day]: false }));
      } else {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Failed to fetch journal entry:", error);
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
      const scrollPosition = Math.max(0, (dayIndex * itemWidth) - (itemWidth * 2));
      scrollViewRef.current?.scrollTo({ x: scrollPosition, animated: true });
    };
    scrollToActiveDay();
  }, [activeDay, currentDate]);

  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());

const daysWithEntries = Object.keys(journalEntries).filter((day: string) => journalEntries[parseInt(day)]);

return (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => handleMonthChange(-1)} style={styles.arrowContainer}>
        <Text style={styles.arrow}>&lt;</Text>
      </TouchableOpacity>
      <Text style={styles.month}>
        {currentDate.toLocaleString('en', { month: 'long', year: 'numeric' })}
      </Text>
      <TouchableOpacity onPress={() => handleMonthChange(1)} style={styles.arrowContainer}>
        <Text style={styles.arrow}>&gt;</Text>
      </TouchableOpacity>
    </View>

    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      ref={scrollViewRef}
      style={styles.scrollContainer}
    >
      {days.map((day, index) => (
        <TouchableOpacity key={index} onPress={() => handleDayClick(day.day)}>
          <View style={[styles.dayBox, activeDay === day.day && styles.activeDayBox]}>
            <Text style={[styles.dayText, activeDay === day.day && styles.activeDayText]}>
              {day.day}
            </Text>
            <Text style={[styles.weekdayText, activeDay === day.day && styles.activeDayText]}>
              {day.weekday}
            </Text>
            {daysWithEntries.includes(day.day.toString()) && (
              <View style={styles.dot} />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>

    <View style={styles.placeholderContainer}>
      {loading ? (
        <ActivityIndicator size="large" color="#3A8DFF" />
      ) : journalData ? (
        journalData.entry ? (
          <Text style={styles.journalEntryText}>{journalData.entry}</Text>
        ) : (
          <View>
            <Image
              source={require('@/assets/icons/journal.png')}
              style={styles.image}
            />
            <Text style={styles.placeholderText}>You have not filled your journal.</Text>
          </View>
        )
      ) : (
        <View>
          <Image
            source={require('@/assets/icons/journal.png')}
            style={styles.image}
          />
          <Text style={styles.placeholderText}>You have not filled your journal.</Text>
        </View>
      )}
    </View>

    {/* "Write Journal" Button Only Appears on Current Day */}
    {activeDay === currentDate.getDate() && (
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.writeButton, journalData?.entry ? styles.disabledButton : null]}
          onPress={() =>
            navigation.navigate('JournalEntry', {
              year: currentDate.getFullYear(),
              month: currentDate.getMonth() + 1,
              day: activeDay,
            })
          }
          disabled={!!journalData?.entry}
        >
          <Text style={styles.writeButtonText}>
            {journalData?.entry ? "Entry Saved" : "Write Journal"}
          </Text>
        </TouchableOpacity>
      </View>
    )}

    {/* NavigationTab Component */}
    <NavigationTab />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF', // Light blue background color
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  arrowContainer: {
    backgroundColor: '#003366', 
    borderRadius: 50,
    padding: 10,
    paddingHorizontal: 18,
  },
  arrow: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  month: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
  },
  scrollContainer: {
    flexDirection: 'row',
    // backgroundColor: '#AADAFF',
    height: 10,  // 👈 Restrict height to 80px
    marginBottom: -100, 
    overflow: 'hidden',
  },  
  
  dayBox: {
    width: 63,
    height: 63, 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A5D8FF',
    borderRadius: 8,
    marginRight: 8,
    padding: 0,
  },
  

  activeDayBox: {
    backgroundColor: '#003366', // Darker blue for active day
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    margin: 0, // Reset margin
    padding: 0, // Reset padding
  },
  
  activeDayText: {
    color: '#fff',
  },
  weekdayText: {
    fontSize: 14,
    color: '#888',
  },
  dot: {
    position: 'absolute',
    bottom: 4,
    width: 5,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'white', 
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0, 
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
    alignSelf: "center", 
  },  
  placeholderText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  journalEntryText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 70,
  },
  writeButton: {
    backgroundColor: '#003366', // Lighter orange-red for write button
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  writeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});







