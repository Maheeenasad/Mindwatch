import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme } from '@/constants/Colors';
import TabLayout from './(tabs)';
import { RootStackParamList } from '../types/types';
import { PermissionsAndroid, Platform } from 'react-native';

// Core Screens
import WelcomeScreen from './screens/WelcomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import JournalingScreen from './screens/Journals/JournalingScreen';
import JournalEntryScreen from './screens/Journals/JournalEntryScreen';
import BodyFeelingScreen from './screens/Journals/BodyFeelingScreen';
import ReflectionScreen from './screens/Journals/ReflectionScreen';
import TherapeuticQuestionsScreen from './screens/Journals/TherapeuticQuestionsScreen';
import IslamicScreen from './screens/Islamic/IslamicScreen';
import ExercisesScreen from './screens/Exercises/ExercisesScreen';
import MoodTrackingScreen from './screens/MoodTrackingScreen';
import MoodHistoryScreen from './screens/MoodHistoryScreen';
import ChatbotScreen from './screens/Chatbot';

// Exercise Screens Configuration
const exerciseScreens = {
  // Anger
  Anger: {
    screen: require('./screens/Exercises/Anger/AngerScreen').default,
    tasks: [
      require('./screens/Exercises/Anger/tasks/AngerTask1Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask2Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask3Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask4Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask5Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask6Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask7Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask8Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask9Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask10Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask11Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask12Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask13Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask14Screen').default,
      require('./screens/Exercises/Anger/tasks/AngerTask15Screen').default
    ]
  },

  // Anxiety
  Anxiety: {
    screen: require('./screens/Exercises/Anxiety/Anxiety').default,
    tasks: [
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask1').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask2').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask3').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask4').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask5').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask6').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask7').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask8').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask9').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask10').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask11').default,
      require('./screens/Exercises/Anxiety/tasks/AnxietyTask12').default
    ]
  },

  // Breathing
  Breathing: {
    screen: require('./screens/Exercises/Breathing/Breathing').default,
    tasks: [
      require('./screens/Exercises/Breathing/tasks/BreathingTask1').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask2').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask3').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask4').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask5').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask6').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask7').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask8').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask9').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask10').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask11').default,
      require('./screens/Exercises/Breathing/tasks/BreathingTask12').default
    ]
  },

  // Depression
  Depression: {
    screen: require('./screens/Exercises/Depression/Depression').default,
    tasks: [
      require('./screens/Exercises/Depression/tasks/DepressionTask1').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask2').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask3').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask4').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask5').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask6').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask7').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask8').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask9').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask10').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask11').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask12').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask13').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask14').default,
      require('./screens/Exercises/Depression/tasks/DepressionTask15').default
    ]
  },

  // Fatigue
  Fatigue: {
    screen: require('./screens/Exercises/Fatigue/Fatigue').default,
    tasks: [
      require('./screens/Exercises/Fatigue/tasks/FatigueTask1').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask2').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask3').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask4').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask5').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask6').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask7').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask8').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask9').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask10').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask11').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask12').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask13').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask14').default,
      require('./screens/Exercises/Fatigue/tasks/FatigueTask15').default
    ]
  },

  // Fear
  Fear: {
    screen: require('./screens/Exercises/Fear/Fear').default,
    tasks: [
      require('./screens/Exercises/Fear/tasks/FearTask1').default,
      require('./screens/Exercises/Fear/tasks/FearTask2').default,
      require('./screens/Exercises/Fear/tasks/FearTask3').default,
      require('./screens/Exercises/Fear/tasks/FearTask4').default,
      require('./screens/Exercises/Fear/tasks/FearTask5').default,
      require('./screens/Exercises/Fear/tasks/FearTask6').default,
      require('./screens/Exercises/Fear/tasks/FearTask7').default,
      require('./screens/Exercises/Fear/tasks/FearTask8').default,
      require('./screens/Exercises/Fear/tasks/FearTask9').default,
      require('./screens/Exercises/Fear/tasks/FearTask10').default,
      require('./screens/Exercises/Fear/tasks/FearTask11').default,
      require('./screens/Exercises/Fear/tasks/FearTask12').default
    ]
  },

  // Fear of Loss
  FearOfLoss: {
    screen: require('./screens/Exercises/Fear of Loss/FearofLoss').default,
    tasks: [
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask1').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask2').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask3').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask4').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask5').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask6').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask7').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask8').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask9').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask10').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask11').default,
      require('./screens/Exercises/Fear of Loss/tasks/FearofLossTask12').default
    ]
  },

  // Forgiveness
  Forgiveness: {
    screen: require('./screens/Exercises/Forgiveness/Forgiveness').default,
    tasks: [
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask1').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask2').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask3').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask4').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask5').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask6').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask7').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask8').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask9').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask10').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask11').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask12').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask13').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask14').default,
      require('./screens/Exercises/Forgiveness/tasks/ForgivenessTask15').default
    ]
  },

  // Frustration
  Frustration: {
    screen: require('./screens/Exercises/Frustration/Frustration').default,
    tasks: [
      require('./screens/Exercises/Frustration/tasks/FrustrationTask1').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask2').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask3').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask4').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask5').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask6').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask7').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask8').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask9').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask10').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask11').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask12').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask13').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask14').default,
      require('./screens/Exercises/Frustration/tasks/FrustrationTask15').default
    ]
  },

  // Happiness
  Happiness: {
    screen: require('./screens/Exercises/Happiness/Happiness').default,
    tasks: [
      require('./screens/Exercises/Happiness/tasks/HappinessTask1').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask2').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask3').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask4').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask5').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask6').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask7').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask8').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask9').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask10').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask11').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask12').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask13').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask14').default,
      require('./screens/Exercises/Happiness/tasks/HappinessTask15').default
    ]
  },

  // Impatience
  Impatience: {
    screen: require('./screens/Exercises/Impatience/ImpatienceScreen').default,
    tasks: [
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask1Screen').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask2Screen').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask3Screen').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask4Screen').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask5Screen').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask6').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask7').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask8').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask9').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask10').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask11').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask12').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask13').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask14').default,
      require('./screens/Exercises/Impatience/tasks/ImpatienceTask15').default
    ]
  },

  // Irritation
  Irritation: {
    screen: require('./screens/Exercises/Irritation/Irritation').default,
    tasks: [
      require('./screens/Exercises/Irritation/tasks/IrritationTask1').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask2').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask3').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask4').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask5').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask6').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask7').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask8').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask9').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask10').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask11').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask12').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask13').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask14').default,
      require('./screens/Exercises/Irritation/tasks/IrritationTask15').default
    ]
  },

  // Jealousy
  Jealousy: {
    screen: require('./screens/Exercises/Jealousy/Jealousy').default,
    tasks: [
      require('./screens/Exercises/Jealousy/tasks/JealousyTask1').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask2').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask3').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask4').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask5').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask6').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask7').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask8').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask9').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask10').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask11').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask12').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask13').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask14').default,
      require('./screens/Exercises/Jealousy/tasks/JealousyTask15').default
    ]
  },

  // Loneliness
  Loneliness: {
    screen: require('./screens/Exercises/Loneliness/Loneliness').default,
    tasks: [
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask1').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask2').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask3').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask4').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask5').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask6').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask7').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask8').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask9').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask10').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask11').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask12').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask13').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask14').default,
      require('./screens/Exercises/Loneliness/tasks/LonelinessTask15').default
    ]
  },

  // Pain
  Pain: {
    screen: require('./screens/Exercises/Pain/Pain').default,
    tasks: [
      require('./screens/Exercises/Pain/tasks/PainTask1').default,
      require('./screens/Exercises/Pain/tasks/PainTask2').default,
      require('./screens/Exercises/Pain/tasks/PainTask3').default,
      require('./screens/Exercises/Pain/tasks/PainTask4').default,
      require('./screens/Exercises/Pain/tasks/PainTask5').default,
      require('./screens/Exercises/Pain/tasks/PainTask6').default,
      require('./screens/Exercises/Pain/tasks/PainTask7').default,
      require('./screens/Exercises/Pain/tasks/PainTask8').default,
      require('./screens/Exercises/Pain/tasks/PainTask9').default,
      require('./screens/Exercises/Pain/tasks/PainTask10').default,
      require('./screens/Exercises/Pain/tasks/PainTask11').default,
      require('./screens/Exercises/Pain/tasks/PainTask12').default,
      require('./screens/Exercises/Pain/tasks/PainTask13').default,
      require('./screens/Exercises/Pain/tasks/PainTask14').default,
      require('./screens/Exercises/Pain/tasks/PainTask15').default
    ]
  },

  // Sadness
  Sadness: {
    screen: require('./screens/Exercises/Sadness/Sadness').default,
    tasks: [
      require('./screens/Exercises/Sadness/tasks/SadnessTask1').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask2').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask3').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask4').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask5').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask6').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask7').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask8').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask9').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask10').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask11').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask12').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask13').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask14').default,
      require('./screens/Exercises/Sadness/tasks/SadnessTask15').default
    ]
  },

  // Self Confidence
  SelfConfidence: {
    screen: require('./screens/Exercises/SelfConfidence/SelfConfidence').default,
    tasks: [
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask1').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask2').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask3').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask4').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask5').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask6').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask7').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask8').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask9').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask10').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask11').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask12').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask13').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask14').default,
      require('./screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask15').default
    ]
  },

  // Shyness
  Shyness: {
    screen: require('./screens/Exercises/Shyness/Shyness').default,
    tasks: [
      require('./screens/Exercises/Shyness/tasks/ShynessTask1').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask2').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask3').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask4').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask5').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask6').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask7').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask8').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask9').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask10').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask11').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask12').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask13').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask14').default,
      require('./screens/Exercises/Shyness/tasks/ShynessTask15').default
    ]
  }
};

const AppStack = createStackNavigator<RootStackParamList>();

const headerOptions = {
  headerStyle: {
    backgroundColor: '#F0F8FF',
    shadowOpacity: 0,
    elevation: 0
  },
  headerTintColor: '#003366'
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    const prepareApp = async () => {
      if (Platform.OS === 'android') {
        await requestBluetoothPermission();
      }
      if (loaded) {
        await SplashScreen.hideAsync();
      }
    };

    prepareApp();
  }, [loaded]);
  async function requestBluetoothPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
          PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ]);
        return (
          granted['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
          granted['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true;
  }

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppStack.Navigator initialRouteName='Welcome'>
        {/* Core Screens */}
        <AppStack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
        <AppStack.Screen name='SignUp' component={SignUpScreen} options={headerOptions} />
        <AppStack.Screen name='Login' component={LoginScreen} options={headerOptions} />
        <AppStack.Screen name='Profile' component={ProfileScreen} options={headerOptions} />
        <AppStack.Screen name='Chatbot' component={ChatbotScreen} options={{ ...headerOptions, title: 'Mindwatch AI Companion' }} />
        {/* Journaling Screens */}
        <AppStack.Screen name='Journaling' component={JournalingScreen} options={{ ...headerOptions, title: 'Write your Journal!' }} />
        <AppStack.Screen name='JournalEntry' component={JournalEntryScreen} options={{ ...headerOptions, title: 'Self Discovery' }} />
        <AppStack.Screen name='BodyFeelingScreen' component={BodyFeelingScreen} options={{ ...headerOptions, title: 'Self Discovery' }} />
        <AppStack.Screen name='ReflectionScreen' component={ReflectionScreen} options={{ ...headerOptions, title: 'Self Discovery' }} />
        <AppStack.Screen name='TherapeuticQuestionsScreen' component={TherapeuticQuestionsScreen} options={{ ...headerOptions, title: 'Self Discovery' }} />
        <AppStack.Screen name='Islamic' component={IslamicScreen} options={{ ...headerOptions, title: 'Find Peace Through Faith' }} />
        <AppStack.Screen name='MainTabs' component={TabLayout} options={{ headerShown: false }} />
        <AppStack.Screen name='MoodTracking' component={MoodTrackingScreen} options={{ headerShown: false }} />
        <AppStack.Screen name='MoodHistory' component={MoodHistoryScreen} options={{ ...headerOptions, title: 'Mood History' }} />
        <AppStack.Screen name='Exercises' component={ExercisesScreen} options={{ ...headerOptions, title: 'All Exercises' }} />

        {/* Dynamically generated exercise screens */}
        {Object.entries(exerciseScreens).map(([name, { screen, tasks }]) => {
          const exerciseName = name as keyof RootStackParamList;
          return (
            <React.Fragment key={name}>
              <AppStack.Screen name={exerciseName} component={screen} options={{ ...headerOptions, title: `${name} Management Tasks` }} />
              {tasks.map((TaskComponent, index) => {
                const taskName = `${name}Task${index + 1}` as keyof RootStackParamList;
                return <AppStack.Screen key={taskName} name={taskName} component={TaskComponent} options={{ ...headerOptions, title: `${index + 1}. Task` }} />;
              })}
            </React.Fragment>
          );
        })}
      </AppStack.Navigator>
      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
