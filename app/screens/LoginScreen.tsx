import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CONFIG from "../../config";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${CONFIG.SERVER_URL}/login`, {
        email,
        password,
      });

      const { token, name } = response.data;
      const userName = name || "Guest";

      await AsyncStorage.setItem("userToken", token);
      await AsyncStorage.setItem("userName", userName);

      navigation.navigate("MainTabs");
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
      
      {/* Input fields for Login */}
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
      
      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link to Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF", // Light blue background color
    paddingHorizontal: 20,
  },
  logo: {
    width: 200, // Adjust width for proper visibility
    height: 200, // Adjust height to keep aspect ratio
    marginBottom: 30,
    resizeMode: 'contain', // Ensure logo is fully visible without cropping
  },
  input: {
    width: "100%",
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#003366", // Light blue button color
    borderRadius: 8,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff", // Dark blue for the button text
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    color: "#003366", // Dark blue for the link
    textDecorationLine: "underline",
    fontSize: 16,
  },
});
