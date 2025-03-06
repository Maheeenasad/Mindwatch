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
    { id: 1, title: 'Expressive Art Therapy', time: '20-30 mins', screen: 'AngerTask1', image: require('@/assets/exercises/Anger.jpg') },
    { id: 2, title: 'Mindful Counting Exercise', time: '5-10 mins', screen: 'AngerTask2', image: require('@/assets/exercises/AngerTask2.jpg') },
    { id: 3, title: 'Physical Release Activity', time: '10-15 mins', screen: 'AngerTask3', image: require('@/assets/exercises/AngerTask3.jpg') },
    { id: 4, title: 'Comfort & Self-Soothing', time: '5-10 mins', screen: 'AngerTask4', image: require('@/assets/exercises/AngerTask4.jpg') },
    { id: 5, title: 'Controlled Breathing Practice', time: '5-10 mins', screen: 'AngerTask5', image: require('@/assets/exercises/AngerTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Reflective Writing Exercise', time: '15 mins', screen: 'AngerTask6', image: require('@/assets/exercises/Anger.jpg') },
    { id: 2, title: 'Energy Discharge Routine', time: '20 mins', screen: 'AngerTask7', image: require('@/assets/exercises/AngerTask2.jpg') },
    { id: 3, title: 'Auditory Relaxation Therapy', time: '15 mins', screen: 'AngerTask8', image: require('@/assets/exercises/AngerTask3.jpg') },
    { id: 4, title: 'Deep Breathing & Relaxation', time: '10 mins', screen: 'AngerTask9', image: require('@/assets/exercises/AngerTask4.jpg') },
    { id: 5, title: 'Meditative Mind Reset', time: '15 mins', screen: 'AngerTask10', image: require('@/assets/exercises/AngerTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Guided Anger Meditation', time: '20 mins', screen: 'AngerTask11', image: require('@/assets/exercises/Anger.jpg') },
    { id: 2, title: 'Progressive Muscle Relaxation', time: '15 mins', screen: 'AngerTask12', image: require('@/assets/exercises/AngerTask2.jpg') },
    { id: 3, title: 'Cognitive Reframing Strategy', time: '20 mins', screen: 'AngerTask13', image: require('@/assets/exercises/AngerTask3.jpg') },
    { id: 4, title: 'Therapeutic Journaling', time: '15 mins', screen: 'AngerTask14', image: require('@/assets/exercises/AngerTask4.jpg') },
    { id: 5, title: 'Active Stress Release', time: '20 mins', screen: 'AngerTask15', image: require('@/assets/exercises/AngerTask5.jpg') }
  ]
};

export default function AngerScreen() {
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
