import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'; // Install expo icons if not already

const NavigationTab = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'MainTabs', icon: (isActive: boolean) => <MaterialIcons name='home' size={isActive ? 28 : 28} color={isActive ? '#ffffff' : '#003366'} /> },

    { name: 'Journaling', icon: (isActive: boolean) => <Ionicons name='book-outline' size={isActive ? 26 : 26} color={isActive ? '#ffffff' : '#003366'} /> },
    { name: 'Exercises', icon: (isActive: boolean) => <Ionicons name='leaf' size={isActive ? 26 : 26} color={isActive ? '#ffffff' : '#003366'} /> },
    { name: 'MoodTracking', icon: (isActive: boolean) => <FontAwesome5 name='smile' size={isActive ? 24 : 24} color={isActive ? '#ffffff' : '#003366'} /> }
  ];

  return (
    <View style={styles.bottomNav}>
      {tabs.map((tab, index) => {
        const isActive =
          route.name === tab.name ||
          (tab.name === 'Exercises' &&
            (route.name.startsWith('Impatience') ||
              route.name.startsWith('Anger') ||
              route.name.startsWith('Anxiety') ||
              route.name.startsWith('Breathing') ||
              route.name.startsWith('Depression') ||
              route.name.startsWith('Fatigue') ||
              route.name.startsWith('Fear') ||
              route.name.startsWith('FearOfLoss') ||
              route.name.startsWith('Forgiveness') ||
              route.name.startsWith('Frustration') ||
              route.name.startsWith('Happiness') ||
              route.name.startsWith('Irritation') ||
              route.name.startsWith('Jealousy') ||
              route.name.startsWith('Loneliness') ||
              route.name.startsWith('Pain') ||
              route.name.startsWith('Resentment') ||
              route.name.startsWith('Sadness') ||
              route.name.startsWith('SelfConfidence') ||
              route.name.startsWith('Shame') ||
              route.name.startsWith('Shyness') ||
              route.name.startsWith('SocialAnxiety')));

        return (
          <TouchableOpacity key={index} style={styles.navItem} onPress={() => navigation.navigate(tab.name as never)}>
            <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>{tab.icon(isActive)}</View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Set background color of navigation bar
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 20
  },
  navItem: {
    alignItems: 'center'
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#A5D8FF', // Default light blue color for inactive tab
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeIconContainer: {
    backgroundColor: '#003366' // Dark blue for active tab
  }
});

export default NavigationTab;
