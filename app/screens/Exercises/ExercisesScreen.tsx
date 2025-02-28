import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types'; 
import NavigationTab from "@/components/NavigationTab";

type Props = NativeStackScreenProps<RootStackParamList, 'Exercises'>;

const exercises: { name: string; image: any; screen: keyof RootStackParamList }[] = [
    
    { name: "Anger", image: require("@/assets/exercises/Anger.jpg"), screen: "Anger" },
    { name: "Anxiety", image: require("@/assets/exercises/Anxiety.jpg"), screen: "Anxiety" },
    { name: "Breathing", image: require("@/assets/exercises/Breathing.jpg"), screen: "Breathing" },
    { name: "Depression", image: require("@/assets/exercises/Depression.jpg"), screen: "Depression" },
    { name: "Fatigue", image: require("@/assets/exercises/Fatigue.jpg"), screen: "Fatigue" },
    { name: "Fear", image: require("@/assets/exercises/Fear.jpg"), screen: "Fear" },
    { name: "Fear of Loss", image: require("@/assets/exercises/FearOfLoss.jpg"), screen: "FearOfLoss" },
    { name: "Forgiveness", image: require("@/assets/exercises/Forgiveness.jpg"), screen: "Forgiveness" },
    { name: "Frustration", image: require("@/assets/exercises/Frustration.jpg"), screen: "Frustration" },
    // { name: "Happiness", image: require("@/assets/exercises/Happiness.jpg"), screen: "Happiness" },
    // { name: "Impatience", image: require("@/assets/exercises/Impatience.jpg"), screen: "Impatience" }, 
    // { name: "Irritation", image: require("@/assets/exercises/Irritation.jpg"), screen: "Irritation" },
    // { name: "Jealousy", image: require("@/assets/exercises/Jealousy.jpg"), screen: "Jealousy" },
    // { name: "Loneliness", image: require("@/assets/exercises/Loneliness.jpg"), screen: "Loneliness" },
    // { name: "Pain", image: require("@/assets/exercises/Pain.jpg"), screen: "Pain" },
    // { name: "Resentment", image: require("@/assets/exercises/Resentment.jpg"), screen: "Resentment" },
    // { name: "Sadness", image: require("@/assets/exercises/Sadness.jpg"), screen: "Sadness" },
    // { name: "Self Confidence", image: require("@/assets/exercises/SelfConfidence.jpg"), screen: "SelfConfidence" },
    // { name: "Shame", image: require("@/assets/exercises/Shame.jpg"), screen: "Shame" },
    // { name: "Shyness", image: require("@/assets/exercises/Shyness.jpg"), screen: "Shyness" },
    // { name: "Social Anxiety", image: require("@/assets/exercises/SocialAnxiety.jpg"), screen: "SocialAnxiety" },
];


export default function ExercisesScreen({ navigation }: Props) {
    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.gridContainer}>
                    {exercises.map((exercise, index) => (
                        <View key={index} style={styles.exerciseWrapper}>
                            <TouchableOpacity 
                                style={styles.exerciseCard} 
                                onPress={() => {
                                    
                                  navigation.navigate(exercise.screen as any);
                                }}
                                
                                     
                            >
                                <Image source={exercise.image} style={styles.exerciseImage} />
                            </TouchableOpacity>
                            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <NavigationTab />
        </View>
    );
}
  
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: "#F0F8FF",
    },
    container: {
      paddingHorizontal: 10,
      paddingTop: 20,
      paddingBottom: 80, // Extra padding to prevent overlap with navigation
      alignItems: "center",
    },
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: 12,
    },
    exerciseWrapper: {
      alignItems: "center", // Ensures text is centered below the box
    },
    exerciseCard: {
      width: 110, // Increased width for rectangle shape
      height: 80, // Reduced height for rectangular shape
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFF",
      borderRadius: 12,
      elevation: 4, // Shadow on Android
      shadowColor: "#000", // Shadow on iOS
      shadowOpacity: 0.1,
      shadowRadius: 4,
      overflow: "hidden",
    },
    exerciseImage: {
      width: "100%",
      height: "100%", // Fully fits inside the box
      borderRadius: 12,
    },
    exerciseTitle: {
      fontSize: 12,
      fontWeight: "600",
      color: "#003366",
      marginTop: 5, // Space below box
      textAlign: "center",
    },
  });