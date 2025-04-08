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
import ChatbotScreen from './screens/Chatbot';
// import HealthScreen from './screens/HealthScreen';
//Anger
import AngerScreen from './screens/Exercises/Anger/AngerScreen';
import AngerTask1Screen from './screens/Exercises/Anger/tasks/AngerTask1Screen';
import AngerTask2Screen from './screens/Exercises/Anger/tasks/AngerTask2Screen';
import AngerTask3Screen from './screens/Exercises/Anger/tasks/AngerTask3Screen';
import AngerTask4Screen from './screens/Exercises/Anger/tasks/AngerTask4Screen';
import AngerTask5Screen from './screens/Exercises/Anger/tasks/AngerTask5Screen';
import AngerTask6Screen from './screens/Exercises/Anger/tasks/AngerTask6Screen';
import AngerTask7Screen from './screens/Exercises/Anger/tasks/AngerTask7Screen';
import AngerTask8Screen from './screens/Exercises/Anger/tasks/AngerTask8Screen';
import AngerTask9Screen from './screens/Exercises/Anger/tasks/AngerTask9Screen';
import AngerTask10Screen from './screens/Exercises/Anger/tasks/AngerTask10Screen';
import AngerTask11Screen from './screens/Exercises/Anger/tasks/AngerTask11Screen';
import AngerTask12Screen from './screens/Exercises/Anger/tasks/AngerTask12Screen';
import AngerTask13Screen from './screens/Exercises/Anger/tasks/AngerTask13Screen';
import AngerTask14Screen from './screens/Exercises/Anger/tasks/AngerTask14Screen';
import AngerTask15Screen from './screens/Exercises/Anger/tasks/AngerTask15Screen';

//Anxiety
import Anxiety from './screens/Exercises/Anxiety/Anxiety';
import AnxietyTask1 from './screens/Exercises/Anxiety/tasks/AnxietyTask1';
import AnxietyTask2 from './screens/Exercises/Anxiety/tasks/AnxietyTask2';
import AnxietyTask3 from './screens/Exercises/Anxiety/tasks/AnxietyTask3';
import AnxietyTask4 from './screens/Exercises/Anxiety/tasks/AnxietyTask4';
import AnxietyTask5 from './screens/Exercises/Anxiety/tasks/AnxietyTask5';
import AnxietyTask6 from './screens/Exercises/Anxiety/tasks/AnxietyTask6';
import AnxietyTask7 from './screens/Exercises/Anxiety/tasks/AnxietyTask7';
import AnxietyTask8 from './screens/Exercises/Anxiety/tasks/AnxietyTask8';
import AnxietyTask9 from './screens/Exercises/Anxiety/tasks/AnxietyTask9';
import AnxietyTask10 from './screens/Exercises/Anxiety/tasks/AnxietyTask10';
import AnxietyTask11 from './screens/Exercises/Anxiety/tasks/AnxietyTask11';
import AnxietyTask12 from './screens/Exercises/Anxiety/tasks/AnxietyTask12';
//Breathing
import Breathing from './screens/Exercises/Breathing/Breathing';
import BreathingTask1 from './screens/Exercises/Breathing/tasks/BreathingTask1';
import BreathingTask2 from './screens/Exercises/Breathing/tasks/BreathingTask2';
import BreathingTask3 from './screens/Exercises/Breathing/tasks/BreathingTask3';
import BreathingTask4 from './screens/Exercises/Breathing/tasks/BreathingTask4';
import BreathingTask5 from './screens/Exercises/Breathing/tasks/BreathingTask5';
import BreathingTask6 from './screens/Exercises/Breathing/tasks/BreathingTask6';
import BreathingTask7 from './screens/Exercises/Breathing/tasks/BreathingTask7';
import BreathingTask8 from './screens/Exercises/Breathing/tasks/BreathingTask8';
import BreathingTask9 from './screens/Exercises/Breathing/tasks/BreathingTask9';
import BreathingTask10 from './screens/Exercises/Breathing/tasks/BreathingTask10';
import BreathingTask11 from './screens/Exercises/Breathing/tasks/BreathingTask11';
import BreathingTask12 from './screens/Exercises/Breathing/tasks/BreathingTask12';

//Depression
import Depression from './screens/Exercises/Depression/Depression';
import DepressionTask1 from './screens/Exercises/Depression/tasks/DepressionTask1';
import DepressionTask2 from './screens/Exercises/Depression/tasks/DepressionTask2';
import DepressionTask3 from './screens/Exercises/Depression/tasks/DepressionTask3';
import DepressionTask4 from './screens/Exercises/Depression/tasks/DepressionTask4';
import DepressionTask5 from './screens/Exercises/Depression/tasks/DepressionTask5';
import DepressionTask6 from './screens/Exercises/Depression/tasks/DepressionTask6';
import DepressionTask7 from './screens/Exercises/Depression/tasks/DepressionTask7';
import DepressionTask8 from './screens/Exercises/Depression/tasks/DepressionTask8';
import DepressionTask9 from './screens/Exercises/Depression/tasks/DepressionTask9';
import DepressionTask10 from './screens/Exercises/Depression/tasks/DepressionTask10';
import DepressionTask11 from './screens/Exercises/Depression/tasks/DepressionTask11';
import DepressionTask12 from './screens/Exercises/Depression/tasks/DepressionTask12';
import DepressionTask13 from './screens/Exercises/Depression/tasks/DepressionTask13';
import DepressionTask14 from './screens/Exercises/Depression/tasks/DepressionTask14';
import DepressionTask15 from './screens/Exercises/Depression/tasks/DepressionTask15';
//Fatigue
import Fatigue from './screens/Exercises/Fatigue/Fatigue';
import FatigueTask1 from './screens/Exercises/Fatigue/tasks/FatigueTask1';
import FatigueTask2 from './screens/Exercises/Fatigue/tasks/FatigueTask2';
import FatigueTask3 from './screens/Exercises/Fatigue/tasks/FatigueTask3';
import FatigueTask4 from './screens/Exercises/Fatigue/tasks/FatigueTask4';
import FatigueTask5 from './screens/Exercises/Fatigue/tasks/FatigueTask5';
import FatigueTask6 from './screens/Exercises/Fatigue/tasks/FatigueTask6';
import FatigueTask7 from './screens/Exercises/Fatigue/tasks/FatigueTask7';
import FatigueTask8 from './screens/Exercises/Fatigue/tasks/FatigueTask8';
import FatigueTask9 from './screens/Exercises/Fatigue/tasks/FatigueTask9';
import FatigueTask10 from './screens/Exercises/Fatigue/tasks/FatigueTask10';
import FatigueTask11 from './screens/Exercises/Fatigue/tasks/FatigueTask11';
import FatigueTask12 from './screens/Exercises/Fatigue/tasks/FatigueTask12';
import FatigueTask13 from './screens/Exercises/Fatigue/tasks/FatigueTask13';
import FatigueTask14 from './screens/Exercises/Fatigue/tasks/FatigueTask14';
import FatigueTask15 from './screens/Exercises/Fatigue/tasks/FatigueTask15';
//Fear
import Fear from './screens/Exercises/Fear/Fear';
import FearTask1 from './screens/Exercises/Fear/tasks/FearTask1';
import FearTask2 from './screens/Exercises/Fear/tasks/FearTask2';
import FearTask3 from './screens/Exercises/Fear/tasks/FearTask3';
import FearTask4 from './screens/Exercises/Fear/tasks/FearTask4';
import FearTask5 from './screens/Exercises/Fear/tasks/FearTask5';
import FearTask6 from './screens/Exercises/Fear/tasks/FearTask6';
import FearTask7 from './screens/Exercises/Fear/tasks/FearTask7';
import FearTask8 from './screens/Exercises/Fear/tasks/FearTask8';
import FearTask9 from './screens/Exercises/Fear/tasks/FearTask9';
import FearTask10 from './screens/Exercises/Fear/tasks/FearTask10';
import FearTask11 from './screens/Exercises/Fear/tasks/FearTask11';
import FearTask12 from './screens/Exercises/Fear/tasks/FearTask12';
//Fear of loss
import FearOfLoss from './screens/Exercises/Fear of Loss/FearofLoss';
import FearOfLossTask1 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask1';
import FearOfLossTask2 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask2';
import FearOfLossTask3 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask3';
import FearOfLossTask4 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask4';
import FearOfLossTask5 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask5';
import FearOfLossTask6 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask6';
import FearOfLossTask7 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask7';
import FearOfLossTask8 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask8';
import FearOfLossTask9 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask9';
import FearOfLossTask10 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask10';
import FearOfLossTask11 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask11';
import FearOfLossTask12 from './screens/Exercises/Fear of Loss/tasks/FearofLossTask12';
//Forgiveness
import Forgiveness from './screens/Exercises/Forgiveness/Forgiveness';
import ForgivenessTask1 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask1';
import ForgivenessTask2 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask2';
import ForgivenessTask3 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask3';
import ForgivenessTask4 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask4';
import ForgivenessTask5 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask5';
import ForgivenessTask6 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask6';
import ForgivenessTask7 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask7';
import ForgivenessTask8 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask8';
import ForgivenessTask9 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask9';
import ForgivenessTask10 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask10';
import ForgivenessTask11 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask11';
import ForgivenessTask12 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask12';
import ForgivenessTask13 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask13';
import ForgivenessTask14 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask14';
import ForgivenessTask15 from './screens/Exercises/Forgiveness/tasks/ForgivenessTask15';
//Frustration
import Frustration from './screens/Exercises/Frustration/Frustration';
import FrustrationTask1 from './screens/Exercises/Frustration/tasks/FrustrationTask1';
import FrustrationTask2 from './screens/Exercises/Frustration/tasks/FrustrationTask2';
import FrustrationTask3 from './screens/Exercises/Frustration/tasks/FrustrationTask3';
import FrustrationTask4 from './screens/Exercises/Frustration/tasks/FrustrationTask4';
import FrustrationTask5 from './screens/Exercises/Frustration/tasks/FrustrationTask5';
import FrustrationTask6 from './screens/Exercises/Frustration/tasks/FrustrationTask6';
import FrustrationTask7 from './screens/Exercises/Frustration/tasks/FrustrationTask7';
import FrustrationTask8 from './screens/Exercises/Frustration/tasks/FrustrationTask8';
import FrustrationTask9 from './screens/Exercises/Frustration/tasks/FrustrationTask9';
import FrustrationTask10 from './screens/Exercises/Frustration/tasks/FrustrationTask10';
import FrustrationTask11 from './screens/Exercises/Frustration/tasks/FrustrationTask11';
import FrustrationTask12 from './screens/Exercises/Frustration/tasks/FrustrationTask12';
import FrustrationTask13 from './screens/Exercises/Frustration/tasks/FrustrationTask13';
import FrustrationTask14 from './screens/Exercises/Frustration/tasks/FrustrationTask14';
import FrustrationTask15 from './screens/Exercises/Frustration/tasks/FrustrationTask15';
//Happiness
import Happiness from './screens/Exercises/Happiness/Happiness';
import HappinessTask1 from './screens/Exercises/Happiness/tasks/HappinessTask1';
import HappinessTask2 from './screens/Exercises/Happiness/tasks/HappinessTask2';
import HappinessTask3 from './screens/Exercises/Happiness/tasks/HappinessTask3';
import HappinessTask4 from './screens/Exercises/Happiness/tasks/HappinessTask4';
import HappinessTask5 from './screens/Exercises/Happiness/tasks/HappinessTask5';
import HappinessTask6 from './screens/Exercises/Happiness/tasks/HappinessTask6';
import HappinessTask7 from './screens/Exercises/Happiness/tasks/HappinessTask7';
import HappinessTask8 from './screens/Exercises/Happiness/tasks/HappinessTask8';
import HappinessTask9 from './screens/Exercises/Happiness/tasks/HappinessTask9';
import HappinessTask10 from './screens/Exercises/Happiness/tasks/HappinessTask10';
import HappinessTask11 from './screens/Exercises/Happiness/tasks/HappinessTask11';
import HappinessTask12 from './screens/Exercises/Happiness/tasks/HappinessTask12';
import HappinessTask13 from './screens/Exercises/Happiness/tasks/HappinessTask13';
import HappinessTask14 from './screens/Exercises/Happiness/tasks/HappinessTask14';
import HappinessTask15 from './screens/Exercises/Happiness/tasks/HappinessTask15';
//Impatience
import ImpatienceScreen from './screens/Exercises/Impatience/ImpatienceScreen';
import ImpatienceTask1Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask1Screen';
import ImpatienceTask2Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask2Screen';
import ImpatienceTask3Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask3Screen';
import ImpatienceTask4Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask4Screen';
import ImpatienceTask5Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask5Screen';
import ImpatienceTask6Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask6';
import ImpatienceTask7Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask7';
import ImpatienceTask8Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask8';
import ImpatienceTask9Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask9';
import ImpatienceTask10Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask10';
import ImpatienceTask11Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask11';
import ImpatienceTask12Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask12';
import ImpatienceTask13Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask13';
import ImpatienceTask14Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask14';
import ImpatienceTask15Screen from './screens/Exercises/Impatience/tasks/ImpatienceTask15';
//Irritation
import Irritation from './screens/Exercises/Irritation/Irritation';
import IrritationTask1 from './screens/Exercises/Irritation/tasks/IrritationTask1';
import IrritationTask2 from './screens/Exercises/Irritation/tasks/IrritationTask2';
import IrritationTask3 from './screens/Exercises/Irritation/tasks/IrritationTask3';
import IrritationTask4 from './screens/Exercises/Irritation/tasks/IrritationTask4';
import IrritationTask5 from './screens/Exercises/Irritation/tasks/IrritationTask5';
import IrritationTask6 from './screens/Exercises/Irritation/tasks/IrritationTask6';
import IrritationTask7 from './screens/Exercises/Irritation/tasks/IrritationTask7';
import IrritationTask8 from './screens/Exercises/Irritation/tasks/IrritationTask8';
import IrritationTask9 from './screens/Exercises/Irritation/tasks/IrritationTask9';
import IrritationTask10 from './screens/Exercises/Irritation/tasks/IrritationTask10';
import IrritationTask11 from './screens/Exercises/Irritation/tasks/IrritationTask11';
import IrritationTask12 from './screens/Exercises/Irritation/tasks/IrritationTask12';
import IrritationTask13 from './screens/Exercises/Irritation/tasks/IrritationTask13';
import IrritationTask14 from './screens/Exercises/Irritation/tasks/IrritationTask14';
import IrritationTask15 from './screens/Exercises/Irritation/tasks/IrritationTask15';
//Jealousy
import Jealousy from './screens/Exercises/Jealousy/Jealousy';
import JealousyTask1 from './screens/Exercises/Jealousy/tasks/JealousyTask1';
import JealousyTask2 from './screens/Exercises/Jealousy/tasks/JealousyTask2';
import JealousyTask3 from './screens/Exercises/Jealousy/tasks/JealousyTask3';
import JealousyTask4 from './screens/Exercises/Jealousy/tasks/JealousyTask4';
import JealousyTask5 from './screens/Exercises/Jealousy/tasks/JealousyTask5';
import JealousyTask6 from './screens/Exercises/Jealousy/tasks/JealousyTask6';
import JealousyTask7 from './screens/Exercises/Jealousy/tasks/JealousyTask7';
import JealousyTask8 from './screens/Exercises/Jealousy/tasks/JealousyTask8';
import JealousyTask9 from './screens/Exercises/Jealousy/tasks/JealousyTask9';
import JealousyTask10 from './screens/Exercises/Jealousy/tasks/JealousyTask10';
import JealousyTask11 from './screens/Exercises/Jealousy/tasks/JealousyTask11';
import JealousyTask12 from './screens/Exercises/Jealousy/tasks/JealousyTask12';
import JealousyTask13 from './screens/Exercises/Jealousy/tasks/JealousyTask13';
import JealousyTask14 from './screens/Exercises/Jealousy/tasks/JealousyTask14';
import JealousyTask15 from './screens/Exercises/Jealousy/tasks/JealousyTask15';
//Loneliness
import Loneliness from './screens/Exercises/Loneliness/Loneliness';
import LonelinessTask1 from './screens/Exercises/Loneliness/tasks/LonelinessTask1';
import LonelinessTask2 from './screens/Exercises/Loneliness/tasks/LonelinessTask2';
import LonelinessTask3 from './screens/Exercises/Loneliness/tasks/LonelinessTask3';
import LonelinessTask4 from './screens/Exercises/Loneliness/tasks/LonelinessTask4';
import LonelinessTask5 from './screens/Exercises/Loneliness/tasks/LonelinessTask5';
import LonelinessTask6 from './screens/Exercises/Loneliness/tasks/LonelinessTask6';
import LonelinessTask7 from './screens/Exercises/Loneliness/tasks/LonelinessTask7';
import LonelinessTask8 from './screens/Exercises/Loneliness/tasks/LonelinessTask8';
import LonelinessTask9 from './screens/Exercises/Loneliness/tasks/LonelinessTask9';
import LonelinessTask10 from './screens/Exercises/Loneliness/tasks/LonelinessTask10';
import LonelinessTask11 from './screens/Exercises/Loneliness/tasks/LonelinessTask11';
import LonelinessTask12 from './screens/Exercises/Loneliness/tasks/LonelinessTask12';
import LonelinessTask13 from './screens/Exercises/Loneliness/tasks/LonelinessTask13';
import LonelinessTask14 from './screens/Exercises/Loneliness/tasks/LonelinessTask14';
import LonelinessTask15 from './screens/Exercises/Loneliness/tasks/LonelinessTask15';
//Pain
import Pain from './screens/Exercises/Pain/Pain';
import PainTask1 from './screens/Exercises/Pain/tasks/PainTask1';
import PainTask2 from './screens/Exercises/Pain/tasks/PainTask2';
import PainTask3 from './screens/Exercises/Pain/tasks/PainTask3';
import PainTask4 from './screens/Exercises/Pain/tasks/PainTask4';
import PainTask5 from './screens/Exercises/Pain/tasks/PainTask5';
import PainTask6 from './screens/Exercises/Pain/tasks/PainTask6';
import PainTask7 from './screens/Exercises/Pain/tasks/PainTask7';
import PainTask8 from './screens/Exercises/Pain/tasks/PainTask8';
import PainTask9 from './screens/Exercises/Pain/tasks/PainTask9';
import PainTask10 from './screens/Exercises/Pain/tasks/PainTask10';
import PainTask11 from './screens/Exercises/Pain/tasks/PainTask11';
import PainTask12 from './screens/Exercises/Pain/tasks/PainTask12';
import PainTask13 from './screens/Exercises/Pain/tasks/PainTask13';
import PainTask14 from './screens/Exercises/Pain/tasks/PainTask14';
import PainTask15 from './screens/Exercises/Pain/tasks/PainTask15';
//Resentment
import Resentment from './screens/Exercises/Resentment/Resentment';
import ResentmentTask1 from './screens/Exercises/Resentment/tasks/ResentmentTask1';
import ResentmentTask2 from './screens/Exercises/Resentment/tasks/ResentmentTask2';
import ResentmentTask3 from './screens/Exercises/Resentment/tasks/ResentmentTask3';
import ResentmentTask4 from './screens/Exercises/Resentment/tasks/ResentmentTask4';
import ResentmentTask5 from './screens/Exercises/Resentment/tasks/ResentmentTask5';
//Sadness
import Sadness from './screens/Exercises/Sadness/Sadness';
import SadnessTask1 from './screens/Exercises/Sadness/tasks/SadnessTask1';
import SadnessTask2 from './screens/Exercises/Sadness/tasks/SadnessTask2';
import SadnessTask3 from './screens/Exercises/Sadness/tasks/SadnessTask3';
import SadnessTask4 from './screens/Exercises/Sadness/tasks/SadnessTask4';
import SadnessTask5 from './screens/Exercises/Sadness/tasks/SadnessTask5';
import SadnessTask6 from './screens/Exercises/Sadness/tasks/SadnessTask6';
import SadnessTask7 from './screens/Exercises/Sadness/tasks/SadnessTask7';
import SadnessTask8 from './screens/Exercises/Sadness/tasks/SadnessTask8';
import SadnessTask9 from './screens/Exercises/Sadness/tasks/SadnessTask9';
import SadnessTask10 from './screens/Exercises/Sadness/tasks/SadnessTask10';
import SadnessTask11 from './screens/Exercises/Sadness/tasks/SadnessTask11';
import SadnessTask12 from './screens/Exercises/Sadness/tasks/SadnessTask12';
import SadnessTask13 from './screens/Exercises/Sadness/tasks/SadnessTask13';
import SadnessTask14 from './screens/Exercises/Sadness/tasks/SadnessTask14';
import SadnessTask15 from './screens/Exercises/Sadness/tasks/SadnessTask15';
//Self Confidence
import SelfConfidence from './screens/Exercises/SelfConfidence/SelfConfidence';
import SelfConfidenceTask1 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask1';
import SelfConfidenceTask2 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask2';
import SelfConfidenceTask3 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask3';
import SelfConfidenceTask4 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask4';
import SelfConfidenceTask5 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask5';
import SelfConfidenceTask6 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask6';
import SelfConfidenceTask7 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask7';
import SelfConfidenceTask8 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask8';
import SelfConfidenceTask9 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask9';
import SelfConfidenceTask10 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask10';
import SelfConfidenceTask11 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask11';
import SelfConfidenceTask12 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask12';
import SelfConfidenceTask13 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask13';
import SelfConfidenceTask14 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask14';
import SelfConfidenceTask15 from './screens/Exercises/SelfConfidence/tasks/SelfConfidenceTask15';

//Shame
import Shame from './screens/Exercises/Shame/Shame';
import ShameTask1 from './screens/Exercises/Shame/tasks/ShameTask1';
import ShameTask2 from './screens/Exercises/Shame/tasks/ShameTask2';
import ShameTask3 from './screens/Exercises/Shame/tasks/ShameTask3';
import ShameTask4 from './screens/Exercises/Shame/tasks/ShameTask4';
import ShameTask5 from './screens/Exercises/Shame/tasks/ShameTask5';
//Shyness
import Shyness from './screens/Exercises/Shyness/Shyness';
import ShynessTask1 from './screens/Exercises/Shyness/tasks/ShynessTask1';
import ShynessTask2 from './screens/Exercises/Shyness/tasks/ShynessTask2';
import ShynessTask3 from './screens/Exercises/Shyness/tasks/ShynessTask3';
import ShynessTask4 from './screens/Exercises/Shyness/tasks/ShynessTask4';
import ShynessTask5 from './screens/Exercises/Shyness/tasks/ShynessTask5';
import ShynessTask6 from './screens/Exercises/Shyness/tasks/ShynessTask6';
import ShynessTask7 from './screens/Exercises/Shyness/tasks/ShynessTask7';
import ShynessTask8 from './screens/Exercises/Shyness/tasks/ShynessTask8';
import ShynessTask9 from './screens/Exercises/Shyness/tasks/ShynessTask9';
import ShynessTask10 from './screens/Exercises/Shyness/tasks/ShynessTask10';
import ShynessTask11 from './screens/Exercises/Shyness/tasks/ShynessTask11';
import ShynessTask12 from './screens/Exercises/Shyness/tasks/ShynessTask12';
import ShynessTask13 from './screens/Exercises/Shyness/tasks/ShynessTask13';
import ShynessTask14 from './screens/Exercises/Shyness/tasks/ShynessTask14';
import ShynessTask15 from './screens/Exercises/Shyness/tasks/ShynessTask15';
//Social Anxiety
import SocialAnxiety from './screens/Exercises/SocialAnxiety/SocialAnxiety';
import SocialAnxietyTask1 from './screens/Exercises/SocialAnxiety/tasks/SocialAnxietyTask1';
import SocialAnxietyTask2 from './screens/Exercises/SocialAnxiety/tasks/SocialAnxietyTask2';
import SocialAnxietyTask3 from './screens/Exercises/SocialAnxiety/tasks/SocialAnxietyTask3';
import SocialAnxietyTask4 from './screens/Exercises/SocialAnxiety/tasks/SocialAnxietyTask4';
import SocialAnxietyTask5 from './screens/Exercises/SocialAnxiety/tasks/SocialAnxietyTask5';

const AppStack = createStackNavigator<RootStackParamList>();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AppStack.Navigator initialRouteName='Welcome'>
        <AppStack.Screen name='Welcome' component={WelcomeScreen} options={{ headerShown: false }} />
        <AppStack.Screen
          name='SignUp'
          component={SignUpScreen}
          options={{
            headerStyle: { backgroundColor: '#F0F8FF', shadowOpacity: 0, elevation: 0 },
            headerTintColor: '#003366'
          }}
        />
        <AppStack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366'
          }}
        />
        <AppStack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366'
          }}
        />
        <AppStack.Screen
          name='Chatbot'
          component={ChatbotScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Mindwatch AI Companion'
          }}
        />
        <AppStack.Screen
          name='Journaling'
          component={JournalingScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Write your Journal!'
          }}
        />
        <AppStack.Screen
          name='JournalEntry'
          component={JournalEntryScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Self Discovery'
          }}
        />
        <AppStack.Screen
          name='BodyFeelingScreen'
          component={BodyFeelingScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Self Discovery'
          }}
        />
        <AppStack.Screen
          name='ReflectionScreen'
          component={ReflectionScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Self Discovery'
          }}
        />
        <AppStack.Screen
          name='TherapeuticQuestionsScreen'
          component={TherapeuticQuestionsScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Self Discovery'
          }}
        />
        <AppStack.Screen
          name='Islamic'
          component={IslamicScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Find Peace Through Faith'
          }}
        />

        <AppStack.Screen name='MainTabs' component={TabLayout} options={{ headerShown: false }} />
        <AppStack.Screen
          name='MoodTracking'
          component={MoodTrackingScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Mood Tracking'
          }}
        />
        {/* <AppStack.Screen
          name='HealthScreen'
          component={HealthScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Health'
          }}
        /> */}
        <AppStack.Screen
          name='Exercises'
          component={ExercisesScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'All Exercises'
          }}
        />
        <AppStack.Screen
          name='Impatience'
          component={ImpatienceScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Impatience'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask1'
          component={ImpatienceTask1Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask2'
          component={ImpatienceTask2Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask3'
          component={ImpatienceTask3Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask4'
          component={ImpatienceTask4Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask5'
          component={ImpatienceTask5Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask6'
          component={ImpatienceTask6Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask7'
          component={ImpatienceTask7Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask8'
          component={ImpatienceTask8Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask9'
          component={ImpatienceTask9Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask10'
          component={ImpatienceTask10Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask11'
          component={ImpatienceTask11Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask12'
          component={ImpatienceTask12Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask13'
          component={ImpatienceTask13Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask14'
          component={ImpatienceTask14Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ImpatienceTask15'
          component={ImpatienceTask15Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Anger'
          component={AngerScreen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Anger Management Tasks'
          }}
        />
        <AppStack.Screen
          name='AngerTask1'
          component={AngerTask1Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask2'
          component={AngerTask2Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask3'
          component={AngerTask3Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask4'
          component={AngerTask4Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask5'
          component={AngerTask5Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask6'
          component={AngerTask6Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask7'
          component={AngerTask7Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask8'
          component={AngerTask8Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask9'
          component={AngerTask9Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask10'
          component={AngerTask10Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask11'
          component={AngerTask11Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask12'
          component={AngerTask12Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask13'
          component={AngerTask13Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask14'
          component={AngerTask14Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='AngerTask15'
          component={AngerTask15Screen}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Anxiety'
          component={Anxiety}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Anxiety Management Tasks'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask1'
          component={AnxietyTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask2'
          component={AnxietyTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask3'
          component={AnxietyTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask4'
          component={AnxietyTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask5'
          component={AnxietyTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask6'
          component={AnxietyTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask7'
          component={AnxietyTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask8'
          component={AnxietyTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask9'
          component={AnxietyTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask10'
          component={AnxietyTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask11'
          component={AnxietyTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='AnxietyTask12'
          component={AnxietyTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='Breathing'
          component={Breathing}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Breathing'
          }}
        />
        <AppStack.Screen
          name='BreathingTask1'
          component={BreathingTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask2'
          component={BreathingTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask3'
          component={BreathingTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask4'
          component={BreathingTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask5'
          component={BreathingTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask6'
          component={BreathingTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask7'
          component={BreathingTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask8'
          component={BreathingTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask9'
          component={BreathingTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask10'
          component={BreathingTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask11'
          component={BreathingTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='BreathingTask12'
          component={BreathingTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='Depression'
          component={Depression}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Depression'
          }}
        />
        <AppStack.Screen
          name='DepressionTask1'
          component={DepressionTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask2'
          component={DepressionTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask3'
          component={DepressionTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask4'
          component={DepressionTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask5'
          component={DepressionTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask6'
          component={DepressionTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask7'
          component={DepressionTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask8'
          component={DepressionTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask9'
          component={DepressionTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask10'
          component={DepressionTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask11'
          component={DepressionTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask12'
          component={DepressionTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask13'
          component={DepressionTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask14'
          component={DepressionTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='DepressionTask15'
          component={DepressionTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Fatigue'
          component={Fatigue}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Fatigue'
          }}
        />
        <AppStack.Screen
          name='FatigueTask1'
          component={FatigueTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask2'
          component={FatigueTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask3'
          component={FatigueTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask4'
          component={FatigueTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask5'
          component={FatigueTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask6'
          component={FatigueTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask7'
          component={FatigueTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask8'
          component={FatigueTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask9'
          component={FatigueTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask10'
          component={FatigueTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask11'
          component={FatigueTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask12'
          component={FatigueTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask13'
          component={FatigueTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask14'
          component={FatigueTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FatigueTask15'
          component={FatigueTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Fear'
          component={Fear}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Fear'
          }}
        />
        <AppStack.Screen
          name='FearTask1'
          component={FearTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask2'
          component={FearTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask3'
          component={FearTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask4'
          component={FearTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask5'
          component={FearTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask6'
          component={FearTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask7'
          component={FearTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask8'
          component={FearTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask9'
          component={FearTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask10'
          component={FearTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask11'
          component={FearTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FearTask12'
          component={FearTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLoss'
          component={FearOfLoss}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Fear of Loss'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask1'
          component={FearOfLossTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask2'
          component={FearOfLossTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask3'
          component={FearOfLossTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask4'
          component={FearOfLossTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask5'
          component={FearOfLossTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask6'
          component={FearOfLossTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask7'
          component={FearOfLossTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask8'
          component={FearOfLossTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask9'
          component={FearOfLossTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask10'
          component={FearOfLossTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask11'
          component={FearOfLossTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FearOfLossTask12'
          component={FearOfLossTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='Forgiveness'
          component={Forgiveness}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Forgiveness'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask1'
          component={ForgivenessTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask2'
          component={ForgivenessTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask3'
          component={ForgivenessTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask4'
          component={ForgivenessTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask5'
          component={ForgivenessTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask6'
          component={ForgivenessTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask7'
          component={ForgivenessTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask8'
          component={ForgivenessTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask9'
          component={ForgivenessTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask10'
          component={ForgivenessTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask11'
          component={ForgivenessTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask12'
          component={ForgivenessTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask13'
          component={ForgivenessTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask14'
          component={ForgivenessTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ForgivenessTask15'
          component={ForgivenessTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Frustration'
          component={Frustration}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Frustration'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask1'
          component={FrustrationTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask2'
          component={FrustrationTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask3'
          component={FrustrationTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask4'
          component={FrustrationTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask5'
          component={FrustrationTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask6'
          component={FrustrationTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask7'
          component={FrustrationTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask8'
          component={FrustrationTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask9'
          component={FrustrationTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask10'
          component={FrustrationTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask11'
          component={FrustrationTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask12'
          component={FrustrationTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask13'
          component={FrustrationTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask14'
          component={FrustrationTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='FrustrationTask15'
          component={FrustrationTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Happiness'
          component={Happiness}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Happiness'
          }}
        />
        <AppStack.Screen
          name='HappinessTask1'
          component={HappinessTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask2'
          component={HappinessTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask3'
          component={HappinessTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask4'
          component={HappinessTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask5'
          component={HappinessTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask6'
          component={HappinessTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask7'
          component={HappinessTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask8'
          component={HappinessTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask9'
          component={HappinessTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask10'
          component={HappinessTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask11'
          component={HappinessTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask12'
          component={HappinessTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask13'
          component={HappinessTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask14'
          component={HappinessTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='HappinessTask15'
          component={HappinessTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />

        <AppStack.Screen
          name='Irritation'
          component={Irritation}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Irritation'
          }}
        />
        <AppStack.Screen
          name='IrritationTask1'
          component={IrritationTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask2'
          component={IrritationTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask3'
          component={IrritationTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />

        <AppStack.Screen
          name='IrritationTask4'
          component={IrritationTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask5'
          component={IrritationTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask6'
          component={IrritationTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask7'
          component={IrritationTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask8'
          component={IrritationTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask9'
          component={IrritationTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask10'
          component={IrritationTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask11'
          component={IrritationTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask12'
          component={IrritationTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask13'
          component={IrritationTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask14'
          component={IrritationTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='IrritationTask15'
          component={IrritationTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Jealousy'
          component={Jealousy}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Jealousy'
          }}
        />
        <AppStack.Screen
          name='JealousyTask1'
          component={JealousyTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask2'
          component={JealousyTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask3'
          component={JealousyTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask4'
          component={JealousyTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask5'
          component={JealousyTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask6'
          component={JealousyTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask7'
          component={JealousyTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask8'
          component={JealousyTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask9'
          component={JealousyTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask10'
          component={JealousyTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask11'
          component={JealousyTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask12'
          component={JealousyTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask13'
          component={JealousyTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask14'
          component={JealousyTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='JealousyTask15'
          component={JealousyTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />

        <AppStack.Screen
          name='Loneliness'
          component={Loneliness}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Loneliness'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask1'
          component={LonelinessTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask2'
          component={LonelinessTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask3'
          component={LonelinessTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask4'
          component={LonelinessTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask5'
          component={LonelinessTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask6'
          component={LonelinessTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask7'
          component={LonelinessTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask8'
          component={LonelinessTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask9'
          component={LonelinessTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask10'
          component={LonelinessTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask11'
          component={LonelinessTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask12'
          component={LonelinessTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask13'
          component={LonelinessTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask14'
          component={LonelinessTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='LonelinessTask15'
          component={LonelinessTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Pain'
          component={Pain}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Pain'
          }}
        />
        <AppStack.Screen
          name='PainTask1'
          component={PainTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask2'
          component={PainTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask3'
          component={PainTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask4'
          component={PainTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask5'
          component={PainTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask6'
          component={PainTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask7'
          component={PainTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask8'
          component={PainTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask9'
          component={PainTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask10'
          component={PainTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask11'
          component={PainTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask12'
          component={PainTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask13'
          component={PainTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask14'
          component={PainTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='PainTask15'
          component={PainTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Resentment'
          component={Resentment}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Resentment'
          }}
        />
        <AppStack.Screen
          name='ResentmentTask1'
          component={ResentmentTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ResentmentTask2'
          component={ResentmentTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ResentmentTask3'
          component={ResentmentTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ResentmentTask4'
          component={ResentmentTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ResentmentTask5'
          component={ResentmentTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Sadness'
          component={Sadness}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Sadness'
          }}
        />
        <AppStack.Screen
          name='SadnessTask1'
          component={SadnessTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask2'
          component={SadnessTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask3'
          component={SadnessTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask4'
          component={SadnessTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask5'
          component={SadnessTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask6'
          component={SadnessTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask7'
          component={SadnessTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask8'
          component={SadnessTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask9'
          component={SadnessTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask10'
          component={SadnessTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask11'
          component={SadnessTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask12'
          component={SadnessTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask13'
          component={SadnessTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask14'
          component={SadnessTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SadnessTask15'
          component={SadnessTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidence'
          component={SelfConfidence}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Self Confidence'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask1'
          component={SelfConfidenceTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask2'
          component={SelfConfidenceTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask3'
          component={SelfConfidenceTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask4'
          component={SelfConfidenceTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask5'
          component={SelfConfidenceTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask6'
          component={SelfConfidenceTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask7'
          component={SelfConfidenceTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask8'
          component={SelfConfidenceTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask9'
          component={SelfConfidenceTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask10'
          component={SelfConfidenceTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask11'
          component={SelfConfidenceTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask12'
          component={SelfConfidenceTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask13'
          component={SelfConfidenceTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask14'
          component={SelfConfidenceTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SelfConfidenceTask15'
          component={SelfConfidenceTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Shame'
          component={Shame}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Shame'
          }}
        />
        <AppStack.Screen
          name='ShameTask1'
          component={ShameTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ShameTask2'
          component={ShameTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ShameTask3'
          component={ShameTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ShameTask4'
          component={ShameTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ShameTask5'
          component={ShameTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='Shyness'
          component={Shyness}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Shyness'
          }}
        />
        <AppStack.Screen
          name='ShynessTask1'
          component={ShynessTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask2'
          component={ShynessTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask3'
          component={ShynessTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask4'
          component={ShynessTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask5'
          component={ShynessTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask6'
          component={ShynessTask6}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask7'
          component={ShynessTask7}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask8'
          component={ShynessTask8}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask9'
          component={ShynessTask9}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask10'
          component={ShynessTask10}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask11'
          component={ShynessTask11}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask12'
          component={ShynessTask12}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask13'
          component={ShynessTask13}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask14'
          component={ShynessTask14}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='ShynessTask15'
          component={ShynessTask15}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
        <AppStack.Screen
          name='SocialAnxiety'
          component={SocialAnxiety}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: 'Social Anxiety'
          }}
        />
        <AppStack.Screen
          name='SocialAnxietyTask1'
          component={SocialAnxietyTask1}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '1. Task'
          }}
        />
        <AppStack.Screen
          name='SocialAnxietyTask2'
          component={SocialAnxietyTask2}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '2. Task'
          }}
        />
        <AppStack.Screen
          name='SocialAnxietyTask3'
          component={SocialAnxietyTask3}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '3. Task'
          }}
        />
        <AppStack.Screen
          name='SocialAnxietyTask4'
          component={SocialAnxietyTask4}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '4. Task'
          }}
        />
        <AppStack.Screen
          name='SocialAnxietyTask5'
          component={SocialAnxietyTask5}
          options={{
            headerStyle: {
              backgroundColor: '#F0F8FF',
              shadowOpacity: 0,
              elevation: 0
            },
            headerTintColor: '#003366',
            title: '5. Task'
          }}
        />
      </AppStack.Navigator>

      <StatusBar style='auto' />
    </ThemeProvider>
  );
}
