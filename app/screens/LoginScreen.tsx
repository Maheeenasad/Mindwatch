import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from '../../config';
import { Ionicons } from '@expo/vector-icons'; // 👈 import this

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈 add toggle state

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${CONFIG.SERVER_URL}/login`, {
        email,
        password
      });

      const { token, name } = response.data;
      const userName = name || 'Guest';

      await AsyncStorage.setItem('userToken', token);
      await AsyncStorage.setItem('userName', userName);

      navigation.navigate('MainTabs');
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
      {/* Logo */}
      <Image source={require('@/assets/mw-logo.png')} style={styles.logo} />

      {/* Email Field */}
      <TextInput placeholder='Enter your email' style={styles.input} value={email} onChangeText={setEmail} />

      {/* Password Field with Eye Icon */}
      <View style={styles.passwordContainer}>
        <TextInput placeholder='Enter your password' style={styles.passwordInput} secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color='#888' />
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link to Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    paddingHorizontal: 20
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    resizeMode: 'contain'
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#003366',
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  link: {
    color: '#003366',
    textDecorationLine: 'underline',
    fontSize: 16
  }
});
