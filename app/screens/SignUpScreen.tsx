import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types'; // Adjust the path as necessary
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from '../../config';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSignUp = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;

    if (!nameRegex.test(name)) {
      Alert.alert('Invalid Name', 'Name should contain only letters and spaces.');
      return;
    }

    if (!strongPasswordRegex.test(password)) {
      Alert.alert('Weak Password', 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.');
      return;
    }

    if (password !== repeatPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`${CONFIG.SERVER_URL}/register`, { name, email, password });

      const { token } = response.data;
      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userName', name);

      Alert.alert('Success', response.data.message);
      setTimeout(() => navigation.navigate('MainTabs'), 100);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert('Error', error.response?.data.message || 'An error occurred');
      } else {
        Alert.alert('Error', 'An unexpected error occurred');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('@/assets/mw-logo.png')} style={styles.logo} />

      <TextInput placeholder='Enter your name' style={styles.input} value={name} onChangeText={setName} />
      <TextInput placeholder='Enter your email' style={styles.input} value={email} onChangeText={setEmail} />

      {/* Password Field */}
      <View style={styles.passwordContainer}>
        <TextInput placeholder='Enter your password' style={styles.passwordInput} secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name='eye' size={24} color='#888' />
        </TouchableOpacity>
      </View>

      {/* Repeat Password Field */}
      <View style={styles.passwordContainer}>
        <TextInput placeholder='Repeat your password' style={styles.passwordInput} secureTextEntry={!showRepeatPassword} value={repeatPassword} onChangeText={setRepeatPassword} />
        <TouchableOpacity onPress={() => setShowRepeatPassword(!showRepeatPassword)}>
          <Ionicons name='eye' size={24} color='#888' />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Light blue background color
    paddingHorizontal: 20
  },
  logo: {
    width: 200, // Adjust width for proper visibility
    height: 200, // Adjust height to keep aspect ratio
    marginBottom: 30,
    resizeMode: 'contain' // Ensure logo is fully visible without cropping
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#003366', // Light blue button color
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff', // Dark blue for the button text
    fontSize: 18,
    fontWeight: 'bold'
  },
  link: {
    color: '#003366', // Dark blue for the link
    textDecorationLine: 'underline',
    fontSize: 16
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    // paddingHorizontal: 10,
    paddingEnd: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15
  },
  passwordInput: {
    flex: 1,
    padding: 15,
    fontSize: 16
  }
});
