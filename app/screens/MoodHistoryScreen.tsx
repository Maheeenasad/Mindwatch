import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import CONFIG from '../../config';

interface AnalysisRecord {
  _id: string;
  timestamp: Date;
  mood: string;
  stressLevel: string;
  stressPercentage: number;
  facialStressLevel: string;
  facialStressPercentage: number;
  biometricStressLevel: string;
  biometricStressPercentage: number;
  emotionData: { [key: string]: number };
  biometricData?: {
    bloodPressure: string;
    heartRate: string;
    spo2: string;
  };
}

export default function MoodHistoryScreen({ navigation }) {
  const [historyRecords, setHistoryRecords] = useState<AnalysisRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      console.log('Fetching history...');
      const response = await axios.get(`${CONFIG.SERVER_URL}/analysis-history`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log('History data received:', response.data);
      setHistoryRecords(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const getStressLevelStyle = (percentage: number | null) => {
    const safePercentage = percentage || 0;
    if (safePercentage < 30) return { color: '#4CAF50' };
    if (safePercentage < 60) return { color: '#FFC107' };
    if (safePercentage < 80) return { color: '#FF9800' };
    return { color: '#F44336' };
  };

  const getMoodColor = (mood: string | null) => {
    if (!mood) return '#333';
    switch (mood.toLowerCase()) {
      case 'happy':
        return '#4CAF50';
      case 'sad':
        return '#2196F3';
      case 'angry':
        return '#F44336';
      case 'fearful':
        return '#9C27B0';
      case 'neutral':
        return '#9E9E9E';
      default:
        return '#333';
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text>Loading your history...</Text>
        </View>
      ) : historyRecords.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No mood analysis history yet</Text>
        </View>
      ) : (
        <FlatList
          data={historyRecords}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <View style={styles.historyItem}>
              <Text style={styles.historyDate}>{moment(item.timestamp).format('MMM D, YYYY h:mm A')}</Text>
              <View style={styles.historyStats}>
                <Text style={styles.historyStat}>
                  Mood: <Text style={{ color: getMoodColor(item.mood) }}>{item.mood ?? 'N/A'}</Text>
                </Text>
                <Text style={styles.historyStat}>
                  Stress: <Text style={getStressLevelStyle(item.stressPercentage)}>{item.stressPercentage !== null && item.stressPercentage !== undefined ? `${item.stressPercentage}%` : 'N/A'}</Text>
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    paddingTop: 20 // Added some padding at the top
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    fontSize: 16,
    color: '#888'
  },
  listContent: {
    padding: 15
  },
  historyItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  historyDate: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5
  },
  historyStats: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  historyStat: {
    fontSize: 16
  }
});
