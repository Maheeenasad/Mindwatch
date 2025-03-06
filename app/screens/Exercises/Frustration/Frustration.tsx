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
    { id: 1, title: 'Anger Coloring Activity', time: '20 mins', screen: 'FrustrationTask1', image: require('@/assets/exercises/Frustration.jpg') },
    { id: 2, title: 'Bubble Wrap Stomping', time: '15 mins', screen: 'FrustrationTask2', image: require('@/assets/exercises/FrustrationTask2.jpg') },
    { id: 3, title: 'Deep Breathing with Balloons', time: '10 mins', screen: 'FrustrationTask3', image: require('@/assets/exercises/FrustrationTask3.jpg') },
    { id: 4, title: 'Creating a “Calm Down” Jar', time: '20 mins', screen: 'FrustrationTask4', image: require('@/assets/exercises/FrustrationTask4.jpg') },
    { id: 5, title: 'Stomp and Shout Exercise', time: '15 mins', screen: 'FrustrationTask5', image: require('@/assets/exercises/FrustrationTask5.jpg') }
  ],
  teenage: [
    { id: 1, title: 'Frustration Journal', time: '20 mins', screen: 'FrustrationTask6', image: require('@/assets/exercises/Frustration.jpg') },
    { id: 2, title: 'Physical Release Workout', time: '30 mins', screen: 'FrustrationTask7', image: require('@/assets/exercises/FrustrationTask2.jpg') },
    { id: 3, title: 'Music Therapy for Anger', time: '25 mins', screen: 'FrustrationTask8', image: require('@/assets/exercises/FrustrationTask3.jpg') },
    { id: 4, title: 'Scream into a Pillow', time: '10 mins', screen: 'FrustrationTask9', image: require('@/assets/exercises/FrustrationTask4.jpg') },
    { id: 5, title: 'Guided Visualization', time: '15 mins', screen: 'FrustrationTask10', image: require('@/assets/exercises/FrustrationTask5.jpg') }
  ],
  adult: [
    { id: 1, title: 'Cognitive Reframing', time: '20 mins', screen: 'FrustrationTask11', image: require('@/assets/exercises/Frustration.jpg') },
    { id: 2, title: '5-Minute Grounding Exercise', time: '5 mins', screen: 'FrustrationTask12', image: require('@/assets/exercises/FrustrationTask2.jpg') },
    { id: 3, title: 'Breathwork for Stress', time: '10 mins', screen: 'FrustrationTask13', image: require('@/assets/exercises/FrustrationTask3.jpg') },
    { id: 4, title: 'Mindful Walking', time: '15 mins', screen: 'FrustrationTask14', image: require('@/assets/exercises/FrustrationTask4.jpg') },
    { id: 5, title: 'Writing a Rant Letter (Not Sending)', time: '20 mins', screen: 'FrustrationTask15', image: require('@/assets/exercises/FrustrationTask5.jpg') }
  ]
};

export default function FrustrationScreen() {
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
