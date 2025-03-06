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
    { id: 1, title: 'Puzzle Challenge', time: '20-30 mins', screen: 'ImpatienceTask1', image: require('@/assets/exercises/Impatience.jpg') },
    { id: 2, title: 'Waiting Game', time: '10-15 mins', screen: 'ImpatienceTask2', image: require('@/assets/exercises/ImpatienceTask2.jpg') },
    { id: 3, title: 'Slow Coloring', time: '20-30 mins', screen: 'ImpatienceTask3', image: require('@/assets/exercises/ImpatienceTask3.jpg') },
    { id: 4, title: 'Mindful Breathing', time: '10-15 mins', screen: 'ImpatienceTask4', image: require('@/assets/exercises/ImpatienceTask4.jpg') },
    { id: 5, title: 'Story Time Patience', time: '10-15 mins', screen: 'ImpatienceTask5', image: require('@/assets/exercises/ImpatienceTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Delayed Gratification Test', time: '20-25 mins', screen: 'ImpatienceTask6', image: require('@/assets/exercises/Impatience.jpg') },
    { id: 2, title: 'Meditation for Patience', time: '15-20 mins', screen: 'ImpatienceTask7', image: require('@/assets/exercises/ImpatienceTask2.jpg') },
    { id: 3, title: 'Assembling a Model', time: '30-45 mins', screen: 'ImpatienceTask8', image: require('@/assets/exercises/ImpatienceTask3.jpg') },
    { id: 4, title: 'Timed Journaling', time: '15-20 mins', screen: 'ImpatienceTask9', image: require('@/assets/exercises/ImpatienceTask4.jpg') },
    { id: 5, title: 'Board Game Strategy', time: '45-60 mins', screen: 'ImpatienceTask10', image: require('@/assets/exercises/ImpatienceTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Mindful Walking', time: '20-30 mins', screen: 'ImpatienceTask11', image: require('@/assets/exercises/Impatience.jpg') },
    { id: 2, title: 'Cooking a Slow Recipe', time: '2-3 hours', screen: 'ImpatienceTask12', image: require('@/assets/exercises/ImpatienceTask2.jpg') },
    { id: 3, title: 'Long-form Reading', time: '1-2 hours', screen: 'ImpatienceTask13', image: require('@/assets/exercises/ImpatienceTask3.jpg') },
    { id: 4, title: 'Observing Nature', time: '30-60 mins', screen: 'ImpatienceTask14', image: require('@/assets/exercises/ImpatienceTask4.jpg') },
    { id: 5, title: 'Building Something from Scratch', time: '1-2 hours', screen: 'ImpatienceTask15', image: require('@/assets/exercises/ImpatienceTask5.jpg') }
  ]
};

export default function ImpatienceScreen() {
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
