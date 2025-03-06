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
    { id: 1, title: 'Superhero Posing', time: '15-20 mins', screen: 'SelfConfidenceTask1', image: require('@/assets/exercises/SelfConfidence.jpg') },
    { id: 2, title: 'Mirror Affirmations', time: '10-15 mins', screen: 'SelfConfidenceTask2', image: require('@/assets/exercises/SelfConfidenceTask2.jpg') },
    { id: 3, title: 'Drawing Strengths', time: '15-20 mins', screen: 'SelfConfidenceTask3', image: require('@/assets/exercises/SelfConfidenceTask3.jpg') },
    { id: 4, title: 'Role-playing Success', time: '20-25 mins', screen: 'SelfConfidenceTask4', image: require('@/assets/exercises/SelfConfidenceTask4.jpg') },
    { id: 5, title: 'Gratitude Jar', time: '15-20 mins', screen: 'SelfConfidenceTask5', image: require('@/assets/exercises/SelfConfidenceTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Journaling Achievements', time: '20-25 mins', screen: 'SelfConfidenceTask6', image: require('@/assets/exercises/SelfConfidence.jpg') },
    { id: 2, title: 'Public Speaking Practice', time: '30-40 mins', screen: 'SelfConfidenceTask7', image: require('@/assets/exercises/SelfConfidenceTask2.jpg') },
    { id: 3, title: 'Positive Self-Talk', time: '25-30 mins', screen: 'SelfConfidenceTask8', image: require('@/assets/exercises/SelfConfidenceTask3.jpg') },
    { id: 4, title: 'Trying Something New', time: '45-60 mins', screen: 'SelfConfidenceTask9', image: require('@/assets/exercises/SelfConfidenceTask4.jpg') },
    { id: 5, title: 'Volunteering to Help Others', time: '60-90 mins', screen: 'SelfConfidenceTask10', image: require('@/assets/exercises/SelfConfidenceTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Daily Affirmation Practice', time: '10-15 mins daily', screen: 'SelfConfidenceTask11', image: require('@/assets/exercises/SelfConfidence.jpg') },
    { id: 2, title: 'Networking Challenge', time: '30-60 mins', screen: 'SelfConfidenceTask12', image: require('@/assets/exercises/SelfConfidenceTask2.jpg') },
    { id: 3, title: 'Goal Visualization', time: '20-30 mins', screen: 'SelfConfidenceTask13', image: require('@/assets/exercises/SelfConfidenceTask3.jpg') },
    { id: 4, title: 'Stepping Outside Comfort Zone', time: '30-45 mins', screen: 'SelfConfidenceTask14', image: require('@/assets/exercises/SelfConfidenceTask4.jpg') },
    { id: 5, title: 'Listening to Inspirational Talks', time: '15-20 mins', screen: 'SelfConfidenceTask15', image: require('@/assets/exercises/SelfConfidenceTask5.jpg') }
  ]
};

export default function SelfConfidenceScreen() {
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
