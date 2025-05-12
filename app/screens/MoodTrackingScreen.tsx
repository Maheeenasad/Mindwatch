import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView, TextInput, Dimensions, Modal, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import CONFIG from '../../config';
import NavigationTab from '@/components/NavigationTab';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const exercises = [
  { name: 'Anger', image: require('@/assets/exercises/Anger.jpg'), screen: 'Anger' },
  { name: 'Anxiety', image: require('@/assets/exercises/Anxiety.jpg'), screen: 'Anxiety' },
  { name: 'Breathing', image: require('@/assets/exercises/Breathing.jpg'), screen: 'Breathing' },
  { name: 'Depression', image: require('@/assets/exercises/Depression.jpg'), screen: 'Depression' },
  { name: 'Fatigue', image: require('@/assets/exercises/Fatigue.jpg'), screen: 'Fatigue' },
  { name: 'Fear', image: require('@/assets/exercises/Fear.jpg'), screen: 'Fear' },
  { name: 'Fear of Loss', image: require('@/assets/exercises/FearOfLoss.jpg'), screen: 'FearOfLoss' },
  { name: 'Forgiveness', image: require('@/assets/exercises/Forgiveness.jpg'), screen: 'Forgiveness' },
  { name: 'Frustration', image: require('@/assets/exercises/Frustration.jpg'), screen: 'Frustration' },
  { name: 'Happiness', image: require('@/assets/exercises/Happiness.jpg'), screen: 'Happiness' },
  { name: 'Impatience', image: require('@/assets/exercises/Impatience.jpg'), screen: 'Impatience' },
  { name: 'Irritation', image: require('@/assets/exercises/Irritation.jpg'), screen: 'Irritation' },
  { name: 'Jealousy', image: require('@/assets/exercises/Jealousy.jpg'), screen: 'Jealousy' },
  { name: 'Loneliness', image: require('@/assets/exercises/Loneliness.jpg'), screen: 'Loneliness' },
  { name: 'Pain', image: require('@/assets/exercises/Pain.jpg'), screen: 'Pain' },
  { name: 'Sadness', image: require('@/assets/exercises/Sadness.jpg'), screen: 'Sadness' },
  { name: 'Self Confidence', image: require('@/assets/exercises/SelfConfidence.jpg'), screen: 'SelfConfidence' },
  { name: 'Shyness', image: require('@/assets/exercises/Shyness.jpg'), screen: 'Shyness' }
];

export default function MoodTrackingScreen() {
  const [historyButtonVisible, setHistoryButtonVisible] = useState(false);
  interface AnalysisRecord {
    _id: string;
    timestamp: Date;
    mood: string;
    stressLevel: string;
    stressPercentage: number;
    facialStressLevel: string;
    facialStressPercentage: number;
    biometricStressLevel: string;
    biometricStressPercentage: number;
    emotionData: { [key: string]: number };
    biometricData?: {
      bloodPressure: string;
      heartRate: string;
      spo2: string;
    };
  }

  const [historyRecords, setHistoryRecords] = useState<AnalysisRecord[]>([]);
  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const navigation = useNavigation();
  const [analysisResult, setAnalysisResult] = useState<{
    mood: string | null;
    stressLevel: string | null;
    stressPercentage: number | null;
    facialStressLevel: string | null;
    facialStressPercentage: number | null;
    biometricStressLevel: string | null;
    biometricStressPercentage: number | null;
    emotionData?: { [key: string]: number };
  }>({
    mood: null,
    stressLevel: null,
    stressPercentage: null,
    facialStressLevel: null,
    facialStressPercentage: null,
    biometricStressLevel: null,
    biometricStressPercentage: null
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [imageUploaded, setImageUploaded] = useState<boolean>(false);
  const [manualData, setManualData] = useState({
    bloodPressure: '',
    heartRate: '',
    spo2: ''
  });

  // Chart configuration
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 51, 102, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(107, 124, 147, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#5E8BFF'
    }
  };

  const screenWidth = Dimensions.get('window').width - 40;

  // Convert stress level to numerical value for charts
  const getStressValue = (level: string | null): number => {
    if (!level) return 0;
    switch (level.toLowerCase()) {
      case 'low':
        return 1;
      case 'moderate':
        return 2;
      case 'high':
        return 3;
      default:
        return 0;
    }
  };

  // Data for biometric chart
  const biometricChartData = {
    labels: ['Blood Pressure', 'Heart Rate', 'Blood Oxygen'],
    datasets: [
      {
        data: [
          manualData.bloodPressure ? parseInt(manualData.bloodPressure.split('/')[0]) || 0 : 0,
          manualData.heartRate ? parseInt(manualData.heartRate) || 0 : 0,
          manualData.spo2 ? parseInt(manualData.spo2) || 0 : 0
        ],
        color: (opacity = 1) => `rgba(94, 139, 255, ${opacity})`,
        strokeWidth: 2
      }
    ],
    barColors: ['#5E8BFF', '#FF7E5E', '#4CAF50']
  };

  // Data for stress comparison chart
  const stressComparisonData = [
    {
      name: 'Facial',
      stressLevel: analysisResult.facialStressPercentage !== null ? analysisResult.facialStressPercentage : 0,
      color: '#A5D8FF',
      legendFontColor: '#4A6FA5',
      legendFontSize: 14
    },
    ...(analysisResult.biometricStressPercentage !== null
      ? [
          {
            name: 'Biometric',
            stressLevel: analysisResult.biometricStressPercentage,
            color: '#003366',
            legendFontColor: '#4A6FA5',
            legendFontSize: 14
          }
        ]
      : []),
    {
      name: 'Overall',
      stressLevel: analysisResult.stressPercentage !== null ? analysisResult.stressPercentage : 0,
      color: '#4A90E2',
      legendFontColor: '#4A6FA5',
      legendFontSize: 14
    }
  ].filter(item => item.stressLevel > 0); // Only include items with positive values

  const getStressRecommendations = (percentage: number | null, mood: string | null) => {
    // Default to moderate if null
    const safePercentage = percentage ?? 50;

    // Base recommendations
    let recommendations = {
      message: '',
      suggestions: [] as string[],
      exercises: [] as { name: string; image: any; screen: string }[]
    };

    // Mood-specific exercises
    const moodExercises: { [key: string]: string[] } = {
      Angry: ['Anger', 'Breathing', 'Forgiveness'],
      Anxious: ['Anxiety', 'Breathing', 'Fear'],
      Happy: ['Happiness', 'Self Confidence'],
      Sad: ['Depression', 'Sadness', 'Happiness'],
      Fearful: ['Fear', 'Breathing', 'Self Confidence'],
      Neutral: ['Breathing', 'Happiness']
    };

    // Stress level based recommendations
    if (safePercentage < 30) {
      recommendations.message = "You're doing great! Keep up your healthy habits.";
      recommendations.suggestions = ['Practice gratitude journaling', 'Enjoy a relaxing walk in nature', 'Try some light stretching or yoga'];
    } else if (safePercentage < 60) {
      recommendations.message = "You're experiencing moderate stress. Try these techniques:";
      recommendations.suggestions = ['Take 5 deep breaths (inhale 4s, hold 4s, exhale 6s)', 'Listen to calming music for 10 minutes', 'Do a quick 5-minute mindfulness meditation'];
    } else if (safePercentage < 80) {
      recommendations.message = "You're experiencing high stress. Consider these actions:";
      recommendations.suggestions = ['Take a 15-minute break from your current activity', 'Drink some water and have a healthy snack', 'Call a friend or family member to talk'];
    } else {
      recommendations.message = "You're experiencing very high stress. Please prioritize self-care:";
      recommendations.suggestions = ['Practice progressive muscle relaxation', 'Consider talking to a professional if this persists', 'Engage in 30 minutes of physical activity'];
    }

    // Add mood-specific exercises
    if (mood) {
      const normalizedMood = mood.toLowerCase();
      let matchedMood = 'Neutral';

      // Find the best matching mood
      for (const [key, _] of Object.entries(moodExercises)) {
        if (normalizedMood.includes(key.toLowerCase())) {
          matchedMood = key;
          break;
        }
      }

      // Get exercises for this mood
      const moodExerciseNames = moodExercises[matchedMood] || moodExercises['Neutral'];
      recommendations.exercises = exercises.filter(ex => moodExerciseNames.includes(ex.name));
    }

    // Add general stress-relief exercises if no mood-specific ones found
    if (recommendations.exercises.length === 0) {
      const generalExercises = ['Breathing', 'Happiness', 'Self Confidence'];
      recommendations.exercises = exercises.filter(ex => generalExercises.includes(ex.name));
    }

    return recommendations;
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const handleInputChange = (name: string, value: string) => {
    setManualData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const pickImage = async (fromCamera: boolean) => {
    try {
      setLoading(true);
      const options: ImagePicker.ImagePickerOptions = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3] as [number, number],
        quality: 0.7,
        base64: true
      };

      const result = fromCamera ? await ImagePicker.launchCameraAsync(options) : await ImagePicker.launchImageLibraryAsync(options);

      if (!result.canceled && result.assets && result.assets[0].uri) {
        setImage(result.assets[0].uri);
        setImageUploaded(true);
        setAnalysisResult({
          mood: null,
          stressLevel: null,
          stressPercentage: null,
          facialStressLevel: null,
          facialStressPercentage: null,
          biometricStressLevel: null,
          biometricStressPercentage: null
        });
      }
    } catch (error) {
      console.error('Error picking image:', error);
      alert('Error selecting image. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const detectStress = async () => {
    if (!image && !manualData.bloodPressure && !manualData.heartRate && !manualData.spo2) {
      alert('Please provide either an image or biometric data');
      return;
    }

    try {
      setLoading(true);
      let base64Image = null;

      if (image) {
        try {
          base64Image = await FileSystem.readAsStringAsync(image, {
            encoding: FileSystem.EncodingType.Base64
          });
        } catch (fileError) {
          console.error('Error reading image:', fileError);
          throw new Error('Failed to process image');
        }
      }

      const response = await fetch(`${CONFIG.SERVER_URL}/analyze-mood`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: base64Image,
          biometrics: manualData
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Network response was not ok');
      }

      const data = await response.json();

      const newAnalysisResult = {
        mood: image ? data.mood || 'Unknown' : 'N/A',
        stressLevel: data.stressLevel || 'N/A',
        stressPercentage: data.stressPercentage,
        facialStressLevel: image ? data.facialStressLevel || 'N/A' : 'N/A',
        facialStressPercentage: data.facialStressPercentage,
        biometricStressLevel: manualData.bloodPressure || manualData.heartRate || manualData.spo2 ? data.biometricStressLevel || 'N/A' : 'N/A',
        biometricStressPercentage: data.biometricStressPercentage,
        emotionData: image ? data.emotionData || {} : {}
      };

      // Handle case where no face was detected
      if (data.error === 'No face detected') {
        setAnalysisResult({
          mood: 'No face detected',
          stressLevel: 'N/A',
          stressPercentage: null,
          facialStressLevel: 'N/A',
          facialStressPercentage: null,
          biometricStressLevel: manualData.bloodPressure || manualData.heartRate || manualData.spo2 ? data.biometricStressLevel || 'N/A' : 'N/A',
          biometricStressPercentage: manualData.bloodPressure || manualData.heartRate || manualData.spo2 ? (data.biometricStressPercentage !== null ? data.biometricStressPercentage : null) : null,
          emotionData: {}
        });
        return;
      }

      // Convert string stress levels to percentages
      const facialPercentage = image && data.facialStressLevel ? (data.facialStressLevel.toLowerCase() === 'low' ? 25 : data.facialStressLevel.toLowerCase() === 'moderate' ? 50 : 85) : null;

      const biometricPercentage =
        (manualData.bloodPressure || manualData.heartRate || manualData.spo2) && data.biometricStressLevel
          ? data.biometricStressLevel.toLowerCase() === 'low'
            ? 25
            : data.biometricStressLevel.toLowerCase() === 'moderate'
            ? 50
            : 85
          : null;

      const overallPercentage = data.stressLevel ? (data.stressLevel.toLowerCase() === 'low' ? 25 : data.stressLevel.toLowerCase() === 'moderate' ? 50 : 85) : null;

      setAnalysisResult({
        mood: image ? data.mood || 'Unknown' : 'N/A',
        stressLevel: data.stressLevel || 'N/A',
        stressPercentage: overallPercentage,
        facialStressLevel: image ? data.facialStressLevel || 'N/A' : 'N/A',
        facialStressPercentage: facialPercentage,
        biometricStressLevel: manualData.bloodPressure || manualData.heartRate || manualData.spo2 ? data.biometricStressLevel || 'N/A' : 'N/A',
        biometricStressPercentage: biometricPercentage,
        emotionData: image ? data.emotionData || {} : {}
      });
      setAnalysisResult(newAnalysisResult);
      if (data.mood) {
        await saveAnalysis(newAnalysisResult); // Pass the data directly
        setHistoryButtonVisible(true);
      }
    } catch (error) {
      console.error('Error detecting stress:', error);
      alert('Error analyzing mood and stress. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const saveAnalysis = async (analysisData: typeof analysisResult) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.log('No token found');
        return;
      }

      const recordData = {
        mood: analysisData.mood,
        stressLevel: analysisData.stressLevel,
        stressPercentage: analysisData.stressPercentage,
        facialStressLevel: analysisData.facialStressLevel,
        facialStressPercentage: analysisData.facialStressPercentage,
        biometricStressLevel: analysisData.biometricStressLevel,
        biometricStressPercentage: analysisData.biometricStressPercentage,
        emotionData: analysisData.emotionData,
        biometricData: manualData
      };

      console.log('Saving analysis with data:', recordData);

      const response = await axios.post(`${CONFIG.SERVER_URL}/save-analysis`, {
        token,
        analysisData: recordData
      });

      console.log('Save response:', response.data);
    } catch (error) {
      console.error('Error saving analysis:', error);
    }
  };

  const fetchHistory = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      if (!token) {
        console.log('No token found for history fetch');
        return;
      }

      console.log('Fetching history with token:', token);
      const response = await axios.get(`${CONFIG.SERVER_URL}/analysis-history`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      console.log('History data received:', response.data);
      setHistoryRecords(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      if (showHistoryModal) {
        fetchHistory();
      }
    }, [showHistoryModal])
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          <Text style={styles.mainHeading}>Mood & Stress Analysis</Text>
          <Text style={styles.subHeading1}>Understand your mood patterns through facial and biometric analysis</Text>

          <View style={styles.stats}>
            <View style={styles.statCard}>
              <View style={styles.iconContainer}>
                <FontAwesome name='thermometer' size={24} color='#FF7E5E' />
              </View>
              <TextInput
                style={styles.input}
                placeholder='120/80'
                value={manualData.bloodPressure}
                onChangeText={text => handleInputChange('bloodPressure', text)}
                keyboardType='numbers-and-punctuation'
                placeholderTextColor='#888'
              />
              <Text style={styles.statLabel}>Blood Pressure</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.iconContainer}>
                <FontAwesome name='heartbeat' size={24} color='#FF5E5E' />
              </View>
              <TextInput
                style={styles.input}
                placeholder='72'
                value={manualData.heartRate}
                onChangeText={text => handleInputChange('heartRate', text)}
                keyboardType='numeric'
                placeholderTextColor='#888'
              />
              <Text style={styles.statLabel}>Heart Rate (bpm)</Text>
            </View>

            <View style={styles.statCard}>
              <View style={styles.iconContainer}>
                <FontAwesome name='tint' size={24} color='#5E8BFF' />
              </View>
              <TextInput style={styles.input} placeholder='98' value={manualData.spo2} onChangeText={text => handleInputChange('spo2', text)} keyboardType='numeric' placeholderTextColor='#888' />
              <Text style={styles.statLabel}>SpO2 (%)</Text>
            </View>
          </View>

          <Text style={styles.subHeading}>Upload or capture a photo of your face to analyze your current emotional state</Text>

          <View style={styles.imageSelectionContainer}>
            <TouchableOpacity style={styles.imageOptionCard} onPress={() => pickImage(false)} disabled={loading}>
              <View style={[styles.iconContainer, styles.uploadIconContainer]}>
                <FontAwesome name='cloud-upload' size={28} color='#5E8BFF' />
              </View>
              <Text style={styles.imageOptionTitle}>Upload Image</Text>
              <Text style={styles.imageOptionDescription}>Select from gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.imageOptionCard} onPress={() => pickImage(true)} disabled={loading}>
              <View style={[styles.iconContainer, styles.cameraIconContainer]}>
                <MaterialIcons name='photo-camera' size={28} color='#FF7E5E' />
              </View>
              <Text style={styles.imageOptionTitle}>Take Photo</Text>
              <Text style={styles.imageOptionDescription}>Use your camera</Text>
            </TouchableOpacity>
          </View>

          {image && (
            <View style={styles.imagePreviewContainer}>
              <Image source={{ uri: image }} style={styles.preview} resizeMode='contain' onError={e => console.log('Image error:', e.nativeEvent.error)} />
              {imageUploaded && !analysisResult.mood && <Text style={styles.imageUploadedText}>Image ready for analysis</Text>}
            </View>
          )}

          {/* Analyze Button */}

          <TouchableOpacity
            style={[styles.detectButton, (loading || (!image && !manualData.bloodPressure && !manualData.heartRate && !manualData.spo2)) && styles.disabledButton]}
            onPress={detectStress}
            disabled={loading || (!image && !manualData.bloodPressure && !manualData.heartRate && !manualData.spo2)}>
            <Ionicons name='analytics' size={24} color='white' />
            <Text style={styles.detectButtonText}>Analyze Mood & Stress</Text>
          </TouchableOpacity>

          {/* History Button - Always enabled */}
          <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('MoodHistory')}>
            <Ionicons name='time-outline' size={24} color='white' />
            <Text style={styles.historyButtonText}>View History</Text>
          </TouchableOpacity>

          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size='large' color='#003366' />
              <Text style={styles.loadingText}>Analyzing your data...</Text>
            </View>
          ) : analysisResult.mood ? (
            <View style={styles.resultContainer}>
              <View style={styles.resultCard}>
                <Text style={styles.resultTitle}>Analysis Results</Text>

                {/* Mood and Overall Stress */}
                <View style={styles.resultRow}>
                  <Text style={styles.resultLabel}>Mood:</Text>
                  <Text style={styles.resultValue}>{analysisResult.mood}</Text>
                </View>
                <View style={styles.resultRow}>
                  <Text style={styles.resultLabel}>Overall Stress:</Text>
                  <Text style={[styles.resultValue, getStressLevelStyle(analysisResult.stressPercentage)]}>{analysisResult.stressPercentage}%</Text>
                </View>

                {/* Stress Level Visualization */}
                <View style={styles.stressMeterContainer}>
                  <View style={styles.stressMeterBackground}>
                    <View
                      style={[
                        styles.stressMeterFill,
                        {
                          width: `${Math.min(100, analysisResult.stressPercentage || 0)}%`,
                          backgroundColor: getStressMeterColor(analysisResult.stressPercentage || 0)
                        }
                      ]}
                    />
                  </View>
                  <View style={styles.stressMeterLabels}>
                    <Text>Relaxed</Text>
                    <Text>Moderate</Text>
                    <Text>Stressed</Text>
                    <Text>Very Stressed</Text>
                  </View>
                </View>

                <View style={styles.separator} />

                {/* Facial Analysis Section with Chart */}
                <Text style={styles.sectionTitle}>Facial Analysis</Text>
                {image && analysisResult.emotionData ? (
                  <View style={styles.chartContainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.horizontalScrollContainer} contentContainerStyle={styles.chartWrapper}>
                      <BarChart
                        data={{
                          labels: Object.keys(analysisResult.emotionData),
                          datasets: [
                            {
                              data: Object.values(analysisResult.emotionData)
                            }
                          ]
                        }}
                        width={Object.keys(analysisResult.emotionData).length * 60}
                        height={220}
                        yAxisLabel=''
                        yAxisSuffix='%'
                        chartConfig={{
                          ...chartConfig,
                          color: (opacity = 1) => `rgba(0, 0, 128, ${opacity})`,
                          barPercentage: 0.8
                        }}
                        style={styles.chart}
                        fromZero
                        showBarTops={false}
                        withInnerLines={false}
                        verticalLabelRotation={0}
                      />
                    </ScrollView>
                    <View style={styles.resultRow}>
                      <Text style={styles.resultSubLabel}>Stress Level:</Text>
                      <Text style={[styles.resultSubValue, getStressLevelStyle(analysisResult.facialStressPercentage)]}>
                        {analysisResult.facialStressPercentage !== null ? `${analysisResult.facialStressPercentage}%` : 'N/A'}
                      </Text>
                    </View>
                  </View>
                ) : (
                  <Text style={styles.noDataText}>No facial data available</Text>
                )}

                <View style={styles.separator} />

                {/* Biometric Analysis Section with Chart */}
                <Text style={styles.sectionTitle}>Biometric Analysis</Text>
                {manualData.bloodPressure || manualData.heartRate || manualData.spo2 ? (
                  <View style={styles.chartContainer}>
                    <LineChart
                      data={biometricChartData}
                      width={screenWidth}
                      height={220}
                      chartConfig={{
                        ...chartConfig,
                        color: (opacity = 1) => `rgba(94, 139, 255, ${opacity})`
                      }}
                      bezier
                      style={styles.chart}
                    />
                    <View style={styles.resultRow}>
                      <Text style={styles.resultSubLabel}>Stress Level:</Text>
                      <Text style={[styles.resultSubValue, getStressLevelStyle(analysisResult.biometricStressPercentage)]}>{analysisResult.biometricStressPercentage}%</Text>
                    </View>
                  </View>
                ) : (
                  <Text style={styles.noDataText}>No biometric data provided</Text>
                )}

                <View style={styles.separator} />

                {/* Stress Comparison Chart */}
                <Text style={styles.sectionTitle}>Stress Comparison</Text>
                <View style={styles.chartContainer}>
                  <PieChart
                    data={stressComparisonData}
                    width={Dimensions.get('window').width - 30}
                    height={200}
                    chartConfig={chartConfig}
                    accessor='stressLevel'
                    backgroundColor='transparent'
                    paddingLeft='0'
                    center={[10, 10]}
                    style={styles.pieChart}
                    absolute
                  />
                  {analysisResult.biometricStressPercentage === null && <Text style={styles.noDataText}>No biometric data provided</Text>}
                </View>

                <View style={styles.separator} />

                {/* Recommendations Section */}
                <View style={styles.recommendationsContainer}>
                  <Text style={styles.recommendationHeader}>{getStressRecommendations(analysisResult.stressPercentage, analysisResult.mood).message}</Text>

                  {/* Suggestions */}
                  {getStressRecommendations(analysisResult.stressPercentage, analysisResult.mood).suggestions.map((item, index) => (
                    <View key={`suggestion-${index}`} style={styles.suggestionItem}>
                      <Text style={styles.bullet}>•</Text>
                      <Text style={styles.suggestionText}>{item}</Text>
                    </View>
                  ))}

                  {/* Recommended Exercises */}
                  {getStressRecommendations(analysisResult.stressPercentage, analysisResult.mood).exercises.length > 0 && (
                    <>
                      <Text style={styles.exerciseHeader}>Recommended Exercises:</Text>
                      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {getStressRecommendations(analysisResult.stressPercentage, analysisResult.mood).exercises.map((exercise, index) => (
                          <TouchableOpacity key={`exercise-${index}`} style={styles.exerciseCard} onPress={() => navigation.navigate(exercise.screen)}>
                            <Image source={exercise.image} style={styles.exerciseImage} />
                            <Text style={styles.exerciseName}>{exercise.name}</Text>
                          </TouchableOpacity>
                        ))}
                      </ScrollView>
                    </>
                  )}
                </View>
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>

      <NavigationTab />
    </View>
  );
}

const getStressMeterColor = (percentage: number | null) => {
  const safePercentage = percentage || 0;
  if (safePercentage < 30) return '#4CAF50'; // Green
  if (safePercentage < 60) return '#FFC107'; // Amber
  if (safePercentage < 80) return '#FF9800'; // Orange
  return '#F44336'; // Red
};

const getStressLevelStyle = (percentage: number | null) => {
  const safePercentage = percentage || 0;
  if (safePercentage < 30) return { color: '#4CAF50' }; // Green
  if (safePercentage < 60) return { color: '#FFC107' }; // Amber
  if (safePercentage < 80) return { color: '#FF9800' }; // Orange
  return { color: '#F44336' }; // Red
};

const getMoodColor = (mood: string | null) => {
  if (!mood) return '#333';
  switch (mood.toLowerCase()) {
    case 'happy':
      return '#4CAF50';
    case 'sad':
      return '#2196F3';
    case 'angry':
      return '#F44336';
    case 'fearful':
      return '#9C27B0';
    case 'neutral':
      return '#9E9E9E';
    default:
      return '#333';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF'
  },
  scrollContent: {
    paddingBottom: 100,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  screen: {
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    paddingVertical: 15
  },
  imagePreviewContainer: {
    alignItems: 'center',
    marginBottom: 20,
    width: '100%'
  },
  preview: {
    width: 220,
    height: 220,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#A5D8FF',
    backgroundColor: '#f8f8f8'
  },
  imageUploadedText: {
    marginTop: 10,
    color: '#003366',
    fontWeight: '600'
  },
  mainHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#003366',
    marginBottom: 20,
    marginTop: 40,
    textAlign: 'center'
  },
  subHeading: {
    fontSize: 15,
    color: '#6B7C93',
    marginBottom: 25,
    paddingHorizontal: 30,
    textAlign: 'center',
    lineHeight: 22
  },
  subHeading1: {
    fontSize: 15,
    color: '#6B7C93',
    marginBottom: 25,
    paddingHorizontal: 30,
    marginTop: -10,
    textAlign: 'center',
    lineHeight: 22
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20
  },
  loadingText: {
    marginTop: 12,
    color: '#003366',
    fontSize: 16
  },
  resultContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 15
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#2E4A7D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2E4A7D',
    marginBottom: 15,
    textAlign: 'center'
  },
  resultRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center'
  },
  resultLabel: {
    fontSize: 16,
    color: '#6B7C93',
    fontWeight: '600'
  },
  resultValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E4A7D'
  },
  separator: {
    height: 1,
    backgroundColor: '#E6EFFF',
    marginVertical: 10,
    width: '100%'
  },
  resultSubLabel: {
    fontSize: 14,
    color: '#6B7C93',
    fontWeight: '500'
  },
  resultSubValue: {
    fontSize: 14,
    fontWeight: '600'
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 18,
    paddingHorizontal: 5,
    flexWrap: 'wrap'
  },
  statCard: {
    alignItems: 'center',
    width: '30%',
    minWidth: 100,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#F0F5FF'
  },
  input: {
    height: 45,
    width: '100%',
    borderColor: '#7A9CC6',
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10, // increased from 2
    marginBottom: 8,
    backgroundColor: 'white',
    textAlign: 'center', // centers both text and caret
    fontSize: 16,
    fontWeight: '600',
    color: '#7A9CC6',
    writingDirection: 'ltr' // 👈 force left-to-right
  },

  statLabel: {
    fontSize: 14,
    color: '#7A9CC6',
    fontWeight: '600',
    textAlign: 'center'
  },
  imageSelectionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20
  },
  imageOptionCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 14,
    marginHorizontal: 8,
    alignItems: 'center',
    shadowColor: '#2E4A7D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    maxWidth: 160
  },
  uploadIconContainer: {
    backgroundColor: '#E6EFFF'
  },
  cameraIconContainer: {
    backgroundColor: '#FFECE6'
  },
  imageOptionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E4A7D',
    marginBottom: 5,
    textAlign: 'center'
  },
  imageOptionDescription: {
    fontSize: 13,
    color: '#6B7C93',
    textAlign: 'center'
  },
  detectButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003366',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    width: '85%',
    shadowColor: '#2E4A7D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },
  disabledButton: {
    backgroundColor: '#003366'
  },
  detectButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 10
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E4A7D',
    marginBottom: 10,
    marginTop: 5
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
    overflow: 'hidden'
  },
  pieChart: {
    marginLeft: 15,
    alignSelf: 'center' // Centers the chart
  },
  chartContainer: {
    overflow: 'visible',
    borderRadius: 16,
    marginBottom: 10,
    width: '100%'
  },
  noDataText: {
    color: '#6B7C93',
    textAlign: 'center',
    marginVertical: 10
  },
  horizontalScrollContainer: {
    width: '100%',
    height: 250
  },
  chartWrapper: {
    width: 440
  },
  stressMeterContainer: {
    marginVertical: 15,
    width: '100%'
  },
  stressMeterBackground: {
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 5
  },
  stressMeterFill: {
    height: '100%',
    borderRadius: 10
  },
  stressMeterLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  recommendationsContainer: {
    marginTop: 15,
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10
  },
  recommendationsTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333'
  },
  suggestionItem: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'flex-start'
  },
  bullet: {
    marginRight: 8,
    fontSize: 16,
    color: '#003366'
  },
  suggestionText: {
    flex: 1,
    fontSize: 14,
    color: '#555'
  },
  recommendationHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
    marginBottom: 10
  },
  exerciseHeader: {
    fontSize: 16,
    fontWeight: '600',
    color: '#003366',
    marginTop: 15,
    marginBottom: 10
  },
  exerciseCard: {
    width: 120,
    marginRight: 15,
    alignItems: 'center'
  },
  exerciseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5
  },
  exerciseName: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333'
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7DC7FF',
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    width: '85%',
    shadowColor: '#2E4A7D',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6
  },
  historyButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 10
  }
});
