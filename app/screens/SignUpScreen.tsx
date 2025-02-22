import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types'; // Adjust the path as necessary
import AsyncStorage from "@react-native-async-storage/async-storage";
import CONFIG from "../../config";

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Use the typed navigation

  const handleSignUp = async () => {
    if (password !== repeatPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${CONFIG.SERVER_URL}/register`, {
        name,
        email,
        password,
      });

      const { token } = response.data; // Get the token from the response
      await AsyncStorage.setItem("userToken", token); // Save the token locally
      await AsyncStorage.setItem("userName", name);

      Alert.alert("Success", response.data.message);
      setTimeout(() => navigation.navigate("MainTabs"), 100);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert("Error", error.response?.data.message || "An error occurred");
      } else {
        Alert.alert("Error", "An unexpected error occurred");
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo or Image */}
      <Image 
        source={require('@/assets/mw-logo.png')} 
        style={styles.logo}
      />

      {/* Input fields for Sign Up */}
      <TextInput
        placeholder="Enter your name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Enter your email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Enter your password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Repeat your password"
        style={styles.input}
        secureTextEntry
        value={repeatPassword}
        onChangeText={setRepeatPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Link to Login */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 200, // Adjust width for proper visibility
    height: 200, // Adjust height to keep aspect ratio
    marginBottom: 30,
    resizeMode: 'contain', // Ensure logo is fully visible without cropping
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#003366', // Light blue button color
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff', // Dark blue for the button text
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#003366', // Dark blue for the link
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
