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
    { id: 1, title: 'Friendly Wave Game', time: '10-15 mins', screen: 'ShynessTask1', image: require('@/assets/exercises/Shyness.jpg') },
    { id: 2, title: 'Storytelling Practice', time: '20-25 mins', screen: 'ShynessTask2', image: require('@/assets/exercises/ShynessTask2.jpg') },
    { id: 3, title: 'Playground Socializing', time: '15-20 mins', screen: 'ShynessTask3', image: require('@/assets/exercises/ShynessTask3.jpg') },
    { id: 4, title: 'Compliment Sharing', time: '15-20 mins', screen: 'ShynessTask4', image: require('@/assets/exercises/ShynessTask4.jpg') },
    { id: 5, title: 'Acting in Mini-Sketches', time: '20-30 mins', screen: 'ShynessTask5', image: require('@/assets/exercises/ShynessTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Initiating Small Talk', time: '20-30 mins', screen: 'ShynessTask6', image: require('@/assets/exercises/Shyness.jpg') },
    { id: 2, title: 'Social Role-Playing', time: '30-40 mins', screen: 'ShynessTask7', image: require('@/assets/exercises/ShynessTask2.jpg') },
    { id: 3, title: 'Joining a Club or Group', time: '30-60 mins', screen: 'ShynessTask8', image: require('@/assets/exercises/ShynessTask3.jpg') },
    { id: 4, title: 'Expressing Opinions Confidently', time: '30-45 mins', screen: 'ShynessTask9', image: require('@/assets/exercises/ShynessTask4.jpg') },
    { id: 5, title: 'Eye Contact Challenge', time: '20-30 mins', screen: 'ShynessTask10', image: require('@/assets/exercises/ShynessTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Networking Icebreakers', time: '30-40 mins', screen: 'ShynessTask11', image: require('@/assets/exercises/Shyness.jpg') },
    { id: 2, title: 'Speaking Up in Meetings', time: '25-35 mins', screen: 'ShynessTask12', image: require('@/assets/exercises/ShynessTask2.jpg') },
    { id: 3, title: 'Public Introduction Practice', time: '30-40 mins', screen: 'ShynessTask13', image: require('@/assets/exercises/ShynessTask3.jpg') },
    { id: 4, title: 'Social Gathering Participation', time: '45-60 mins', screen: 'ShynessTask14', image: require('@/assets/exercises/ShynessTask4.jpg') },
    { id: 5, title: 'Body Language Awareness', time: '30-45 mins', screen: 'ShynessTask15', image: require('@/assets/exercises/ShynessTask5.jpg') }
  ]
};

export default function ShynessScreen() {
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
