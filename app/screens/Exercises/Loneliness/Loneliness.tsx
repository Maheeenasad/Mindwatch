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
    { id: 1, title: 'Talking to a Stuffed Friend', time: '15-20 mins', screen: 'LonelinessTask1', image: require('@/assets/exercises/Loneliness.jpg') },
    { id: 2, title: 'Drawing Happy Moments', time: '20-25 mins', screen: 'LonelinessTask2', image: require('@/assets/exercises/LonelinessTask2.jpg') },
    { id: 3, title: 'Playing with Family', time: '30-45 mins', screen: 'LonelinessTask3', image: require('@/assets/exercises/LonelinessTask3.jpg') },
    { id: 4, title: 'Singing Favorite Poems', time: '20-30 mins', screen: 'LonelinessTask4', image: require('@/assets/exercises/LonelinessTask4.jpg') },
    { id: 5, title: 'Listening to Nature Sounds', time: '15-20 mins', screen: 'LonelinessTask5', image: require('@/assets/exercises/LonelinessTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Writing Letters to Future Self', time: '20-30 mins', screen: 'LonelinessTask6', image: require('@/assets/exercises/Loneliness.jpg') },
    { id: 2, title: 'Joining an Online Community', time: '30-45 mins', screen: 'LonelinessTask7', image: require('@/assets/exercises/LonelinessTask2.jpg') },
    { id: 3, title: 'Practicing Gratitude', time: '15-20 mins daily', screen: 'LonelinessTask8', image: require('@/assets/exercises/LonelinessTask3.jpg') },
    { id: 4, title: 'Calling a Friend or Family', time: '10-30 mins', screen: 'LonelinessTask9', image: require('@/assets/exercises/LonelinessTask4.jpg') },
    { id: 5, title: 'Trying a New Hobby', time: '30-60 mins', screen: 'LonelinessTask10', image: require('@/assets/exercises/LonelinessTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Mindful Journaling', time: '15-30 mins', screen: 'LonelinessTask11', image: require('@/assets/exercises/Loneliness.jpg') },
    { id: 2, title: 'Volunteering Activity', time: 'Varies based on activity', screen: 'LonelinessTask12', image: require('@/assets/exercises/LonelinessTask2.jpg') },
    { id: 3, title: 'Guided Meditation for Connection', time: '10-20 mins', screen: 'LonelinessTask13', image: require('@/assets/exercises/LonelinessTask3.jpg') },
    { id: 4, title: 'Reflecting on Social Strengths', time: '30-45 mins', screen: 'LonelinessTask14', image: require('@/assets/exercises/LonelinessTask4.jpg') },
    { id: 5, title: 'Writing a Gratitude Letter', time: '30-45 mins', screen: 'LonelinessTask15', image: require('@/assets/exercises/LonelinessTask5.jpg') }
  ]
};

export default function LonelinessScreen() {
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
