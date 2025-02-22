import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types'; 
import NavigationTab from "@/components/NavigationTab";

type Props = NativeStackScreenProps<RootStackParamList, 'Exercises'>;

const exercises: { name: string; image: any; screen: keyof RootStackParamList }[] = [
    
    { name: "Anger", image: require("@/assets/exercises/anger.png"), screen: "Anger" },
    { name: "Anxiety", image: require("@/assets/exercises/anxiety.png"), screen: "Anxiety" },
    { name: "Breathing", image: require("@/assets/exercises/breathing.png"), screen: "Breathing" },
    { name: "Depression", image: require("@/assets/exercises/depression.png"), screen: "Depression" },
    { name: "Fatigue", image: require("@/assets/exercises/fatigue.png"), screen: "Fatigue" },
    { name: "Fear", image: require("@/assets/exercises/fear.png"), screen: "Fear" },
    { name: "Fear of Loss", image: require("@/assets/exercises/fearofloss.png"), screen: "FearOfLoss" },
    { name: "Forgiveness", image: require("@/assets/exercises/forgiveness.png"), screen: "Forgiveness" },
    { name: "Frustration", image: require("@/assets/exercises/frustration.png"), screen: "Frustration" },
    { name: "Happiness", image: require("@/assets/exercises/Happiness.png"), screen: "Happiness" },
    { name: "Impatience", image: require("@/assets/exercises/Impatience.png"), screen: "Impatience" }, 
    { name: "Irritation", image: require("@/assets/exercises/iritation.png"), screen: "Irritation" },
    { name: "Jealousy", image: require("@/assets/exercises/jealousy.png"), screen: "Jealousy" },
    { name: "Loneliness", image: require("@/assets/exercises/loneliness.png"), screen: "Loneliness" },
    { name: "Pain", image: require("@/assets/exercises/pain.png"), screen: "Pain" },
    { name: "Resentment", image: require("@/assets/exercises/resentment.png"), screen: "Resentment" },
    { name: "Sadness", image: require("@/assets/exercises/sadness.png"), screen: "Sadness" },
    { name: "Self Confidence", image: require("@/assets/exercises/selfconfidence.png"), screen: "SelfConfidence" },
    { name: "Shame", image: require("@/assets/exercises/shame.png"), screen: "Shame" },
    { name: "Shyness", image: require("@/assets/exercises/shyness.png"), screen: "Shyness" },
    { name: "Social Anxiety", image: require("@/assets/exercises/socialanxeity.png"), screen: "SocialAnxiety" },
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