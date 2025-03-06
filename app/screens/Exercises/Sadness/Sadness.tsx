import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types/types';
import NavigationTab from '@/components/NavigationTab';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const taskCategories: Record<'child' | 'teenage' | 'adult', { id: number; title: string; time: string; screen: keyof RootStackParamList; image: any }[]> = {
  child: [
    { id: 1, title: 'Happy Storytime', time: '10-15 mins', screen: 'SadnessTask1', image: require('@/assets/exercises/Sadness.jpg') },
    { id: 2, title: 'Drawing Emotions', time: '15-20 mins', screen: 'SadnessTask2', image: require('@/assets/exercises/SadnessTask2.jpg') },
    { id: 3, title: 'Dancing to Cheerful Music', time: '10-15 mins', screen: 'SadnessTask3', image: require('@/assets/exercises/SadnessTask3.jpg') },
    { id: 4, title: 'Playing with a Pet or Stuffed Animal', time: '15-20 mins', screen: 'SadnessTask4', image: require('@/assets/exercises/SadnessTask4.jpg') },
    { id: 5, title: 'Gratitude List', time: '10-15 mins', screen: 'SadnessTask5', image: require('@/assets/exercises/SadnessTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Journaling Positive Moments', time: '15-20 mins', screen: 'SadnessTask6', image: require('@/assets/exercises/Sadness.jpg') },
    { id: 2, title: 'Talking to a Friend', time: '20-30 mins', screen: 'SadnessTask7', image: require('@/assets/exercises/SadnessTask2.jpg') },
    { id: 3, title: 'Listening to Uplifting Podcasts', time: '20-30 mins', screen: 'SadnessTask8', image: require('@/assets/exercises/SadnessTask3.jpg') },
    { id: 4, title: 'Nature Walk for Relaxation', time: '30-45 mins', screen: 'SadnessTask9', image: require('@/assets/exercises/SadnessTask4.jpg') },
    { id: 5, title: 'Watching a Comedy Show', time: '20-30 mins', screen: 'SadnessTask10', image: require('@/assets/exercises/SadnessTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Meditation for Emotional Balance', time: '15-20 mins', screen: 'SadnessTask11', image: require('@/assets/exercises/Sadness.jpg') },
    { id: 2, title: 'Writing a Letter to Yourself', time: '20-30 mins', screen: 'SadnessTask12', image: require('@/assets/exercises/SadnessTask2.jpg') },
    { id: 3, title: 'Expressing Feelings through Art', time: '30-45 mins', screen: 'SadnessTask13', image: require('@/assets/exercises/SadnessTask3.jpg') },
    { id: 4, title: 'Volunteering for a Good Cause', time: '1-2 hours', screen: 'SadnessTask14', image: require('@/assets/exercises/SadnessTask4.jpg') },
    { id: 5, title: 'Listening to Motivational Speeches', time: '20-30 mins', screen: 'SadnessTask15', image: require('@/assets/exercises/SadnessTask5.jpg') }
  ]
};

export default function SadnessScreen() {
  const [selectedTab, setSelectedTab] = useState<'child' | 'teenage' | 'adult'>('child');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {(['child', 'teenage', 'adult'] as const).map(tab => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={[styles.tab, selectedTab === tab && styles.activeTab]}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.taskList}>
        {taskCategories[selectedTab].map(task => (
          <TouchableOpacity
            key={task.id}
            style={styles.taskCard}
            onPress={() => {
              navigation.navigate(task.screen as any, { taskId: task.id });
            }}>
            <Image source={task.image} style={styles.taskImage} />
            <View style={styles.taskInfo}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <View style={styles.taskTime}>
                <Ionicons name='time-outline' size={14} color='#000' />
                <Text style={styles.taskDuration}>{task.time}</Text>
              </View>
            </View>
            <MaterialCommunityIcons name='chevron-right-circle-outline' size={24} color='#000' />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <NavigationTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#E0E0E0'
  },
  activeTab: {
    backgroundColor: '#003366'
  },
  tabText: {
    fontSize: 16,
    color: '#000'
  },
  activeTabText: {
    color: '#FFF'
  },
  taskList: {
    paddingBottom: 40
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    justifyContent: 'space-between'
  },
  taskImage: {
    width: 65,
    height: 50,
    borderRadius: 8,
    marginRight: 12
  },
  taskInfo: {
    flex: 1
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  taskTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4
  },
  taskDuration: {
    marginLeft: 4,
    fontSize: 14,
    color: '#000'
  }
});
