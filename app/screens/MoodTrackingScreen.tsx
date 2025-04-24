import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, ScrollView, TextInput, Dimensions } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import CONFIG from '../../config';
import NavigationTab from '@/components/NavigationTab';
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

export default function MoodTrackingScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<{
    mood: string | null;
    stressLevel: string | null;
    facialStressLevel: string | null;
    biometricStressLevel: string | null;
    emotionData?: { [key: string]: number }; // Added for facial emotion distribution
  }>({
    mood: null,
    stressLevel: null,
    facialStressLevel: null,
    biometricStressLevel: null
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
      stressLevel: getStressValue(analysisResult.facialStressLevel),
      color: '#A5D8FF',
      legendFontColor: '#4A6FA5',
      legendFontSize: 14
    },
    {
      name: 'Biometric',
      stressLevel: getStressValue(analysisResult.biometricStressLevel),
      color: '#003366',
      legendFontColor: '#4A6FA5',
      legendFontSize: 14
    },
    {
      name: 'Overall',
      stressLevel: getStressValue(analysisResult.stressLevel),
      color: '#4A90E2',
      legendFontColor: '#4A6FA5',
      legendFontSize: 14
    }
  ];

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
          facialStressLevel: null,
          biometricStressLevel: null
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
      setAnalysisResult({
        mood: data.mood || 'Unknown',
        stressLevel: data.stressLevel || 'Moderate',
        facialStressLevel: data.facialStressLevel || 'Moderate',
        biometricStressLevel: data.biometricStressLevel || 'Moderate',
        emotionData: data.emotionData || {} // Fallback to empty object
      });
    } catch (error) {
      console.error('Error analyzing mood:', error);
      alert(`Analysis failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setAnalysisResult({
        mood: 'Error analyzing mood',
        stressLevel: 'Unknown',
        facialStressLevel: 'Unknown',
        biometricStressLevel: 'Unknown',
        emotionData: {}
      });
    } finally {
      setLoading(false);
    }
  };

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

          <Text style={styles.subHeading}>Upload or capture a photo to analyze your current emotional state</Text>

          <View style={styles.imageSelectionContainer}>
            <TouchableOpacity style={styles.imageOptionCard} onPress={() => pickImage(false)} disabled={loading}>
              <View style={[styles.iconContainer, styles.uploadIconContainer]}>
                <FontAwesome name='cloud-upload' size={28} color='#5E8BFF' />
              </View>
              <Text style={styles.imageOptionTitle}>Upload Image</Text>
              <Text style={styles.imageOptionDescription}>Select from your gallery</Text>
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

          <TouchableOpacity
            style={[styles.detectButton, (loading || (!image && !manualData.bloodPressure && !manualData.heartRate && !manualData.spo2)) && styles.disabledButton]}
            onPress={detectStress}
            disabled={loading || (!image && !manualData.bloodPressure && !manualData.heartRate && !manualData.spo2)}>
            <Ionicons name='analytics' size={24} color='white' />
            <Text style={styles.detectButtonText}>Analyze Mood & Stress</Text>
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
                  <Text style={[styles.resultValue, getStressLevelStyle(analysisResult.stressLevel)]}>{analysisResult.stressLevel}</Text>
                </View>

                <View style={styles.separator} />

                {/* Facial Analysis Section with Chart */}
                <Text style={styles.sectionTitle}>Facial Analysis</Text>
                {analysisResult.emotionData ? (
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
                      <Text style={[styles.resultSubValue, getStressLevelStyle(analysisResult.facialStressLevel)]}>{analysisResult.facialStressLevel}</Text>
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
                      <Text style={[styles.resultSubValue, getStressLevelStyle(analysisResult.biometricStressLevel)]}>{analysisResult.biometricStressLevel}</Text>
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
                    width={Dimensions.get('window').width - 30} // Adjusted width calculation
                    height={200}
                    chartConfig={chartConfig}
                    accessor='stressLevel'
                    backgroundColor='transparent'
                    paddingLeft='0' // Removed left padding
                    center={[10, 10]} // Adjust chart center position
                    style={styles.pieChart} // Added specific style
                    absolute
                  />
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

const getStressLevelStyle = (stressLevel: string | null) => {
  if (!stressLevel) return {};
  const level = stressLevel.toLowerCase();
  if (level.includes('low') || level.includes('relaxed')) return { color: '#4A90E2' };
  if (level.includes('moderate')) return { color: '#FFA500' };
  if (level.includes('high') || level.includes('stressed')) return { color: '#E74C3C' };
  return {};
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
    padding: 15,
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
    paddingHorizontal: 2,
    marginBottom: 8,
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#7A9CC6'
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
  }
});
