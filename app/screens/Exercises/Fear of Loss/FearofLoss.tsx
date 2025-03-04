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
    { id: 1, title: 'Memory Jar', time: '5 mins', screen: 'FearOfLossTask1', image: require('@/assets/exercises/FearOfLoss.jpg') },
    { id: 2, title: 'Comfort Drawing', time: '7 mins', screen: 'FearOfLossTask2', image: require('@/assets/exercises/FearOfLossTask2.jpg') },
    { id: 3, title: 'Hug Therapy', time: '5 mins', screen: 'FearOfLossTask3', image: require('@/assets/exercises/FearOfLossTask3.jpg') },
    { id: 4, title: 'Story of Strength', time: '5 mins', screen: 'FearOfLossTask4', image: require('@/assets/exercises/FearOfLossTask4.jpg') },
  ],
  teenage: [
    { id: 1, title: 'Gratitude Letters', time: '10 mins', screen: 'FearOfLossTask5', image: require('@/assets/exercises/FearOfLoss.jpg') },
    { id: 2, title: 'Mindful Reflection', time: '8 mins', screen: 'FearOfLossTask6', image: require('@/assets/exercises/FearOfLossTask2.jpg') },
    { id: 3, title: 'Expressive Journaling', time: '10 mins', screen: 'FearOfLossTask7', image: require('@/assets/exercises/FearOfLossTask3.jpg') },
    { id: 4, title: 'Positive Visualization', time: '7 mins', screen: 'FearOfLossTask8', image: require('@/assets/exercises/FearOfLossTask4.jpg') },
  ],
  adult: [
    { id: 1, title: 'Cognitive Reframing', time: '10 mins', screen: 'FearOfLossTask9', image: require('@/assets/exercises/FearOfLoss.jpg') },
    { id: 2, title: 'Letting Go Meditation', time: '12 mins', screen: 'FearOfLossTask10', image: require('@/assets/exercises/FearOfLossTask2.jpg') },
    { id: 3, title: 'Rewriting Your Story', time: '10 mins', screen: 'FearOfLossTask11', image: require('@/assets/exercises/FearOfLossTask3.jpg') },
    { id: 4, title: 'Connection Strengthening', time: '10 mins', screen: 'FearOfLossTask12', image: require('@/assets/exercises/FearOfLossTask4.jpg') },
  ],
};

export default function FearOfLossScreen() {
  const [selectedTab, setSelectedTab] = useState<'child' | 'teenage' | 'adult'>('child');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {(['child', 'teenage', 'adult'] as Array<'child' | 'teenage' | 'adult'>).map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)} style={[styles.tab, selectedTab === tab && styles.activeTab]}>
            <Text style={[styles.tabText, selectedTab === tab && styles.activeTabText]}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.taskList}>
        {taskCategories[selectedTab].map((task) => (
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
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
  },
  activeTab: {
    backgroundColor: '#003366',
  },
  tabText: {
    fontSize: 16,
    color: '#000',
  },
  activeTabText: {
    color: '#FFF',
  },
  taskList: {
    paddingBottom: 40,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    justifyContent: 'space-between',
  },
  taskImage: {
    width: 65,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  taskTime: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  taskDuration: {
    marginLeft: 4,
    fontSize: 14,
    color: '#000',
  },
});
