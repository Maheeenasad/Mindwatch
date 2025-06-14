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
    { id: 1, title: 'Gentle Stretching', time: '10 mins', screen: 'FatigueTask1', image: require('@/assets/exercises/Fatigue.jpg') },
    { id: 2, title: 'Breathing Exercises', time: '10 mins', screen: 'FatigueTask2', image: require('@/assets/exercises/FatigueTask2.jpg') },
    { id: 3, title: 'Short Guided Meditation', time: '7 mins', screen: 'FatigueTask3', image: require('@/assets/exercises/FatigueTask3.jpg') },
    { id: 4, title: 'Hydration Break', time: '5 mins', screen: 'FatigueTask4', image: require('@/assets/exercises/FatigueTask4.jpg') },
    { id: 5, title: 'Soothing Music & Rest', time: '10 mins', screen: 'FatigueTask5', image: require('@/assets/exercises/FatigueTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Power Nap', time: '10-20 mins', screen: 'FatigueTask6', image: require('@/assets/exercises/Fatigue.jpg') },
    { id: 2, title: 'Light Movement Routine', time: '10 mins', screen: 'FatigueTask7', image: require('@/assets/exercises/FatigueTask2.jpg') },
    { id: 3, title: 'Progressive Muscle Relaxation', time: '15 mins', screen: 'FatigueTask8', image: require('@/assets/exercises/FatigueTask3.jpg') },
    { id: 4, title: 'Mindful Breathing', time: '10 mins', screen: 'FatigueTask9', image: require('@/assets/exercises/FatigueTask4.jpg') },
    { id: 5, title: 'Listening to Nature Sounds', time: '15 mins', screen: 'FatigueTask10', image: require('@/assets/exercises/FatigueTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Quick Desk Stretches', time: '10 mins', screen: 'FatigueTask11', image: require('@/assets/exercises/Fatigue.jpg') },
    { id: 2, title: 'Hydration & Deep Breaths', time: '5 mins', screen: 'FatigueTask12', image: require('@/assets/exercises/FatigueTask2.jpg') },
    { id: 3, title: 'Guided Relaxation', time: '15 mins', screen: 'FatigueTask13', image: require('@/assets/exercises/FatigueTask3.jpg') },
    { id: 4, title: 'Short Walk & Fresh Air', time: '20 mins', screen: 'FatigueTask14', image: require('@/assets/exercises/FatigueTask4.jpg') },
    { id: 5, title: 'Listening to Calming Podcasts', time: '30 mins', screen: 'FatigueTask15', image: require('@/assets/exercises/FatigueTask5.jpg') }
  ]
};

export default function FatigueScreen() {
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
