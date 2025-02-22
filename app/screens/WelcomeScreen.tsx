import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/types";

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Logo or Image */}
      <Image 
        source={require('@/assets/mw-logo.png')} 
        style={styles.logo}
      />
      
      {/* Title */}
      <Text style={styles.title}>Welcome to Mindwatch</Text>

      {/* Welcoming Quote */}
      <Text style={styles.quote}>Your mind matters, and it's time to watch over it.</Text>

      {/* Buttons for Login and Sign Up */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.signUpButton]}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F8FF", // Background color
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,  // Adjust width for proper visibility
    height: 200,  // Adjust height to keep aspect ratio
    marginBottom: 30,
    resizeMode: 'contain', // Ensure logo is fully visible without cropping
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003366", // Title color
    marginBottom: 10,
    textAlign: "center",
  },
  quote: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#003366", // Lighter blue for the quote text
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#7DC7FF", // Light blue button color
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
   
  },
  signUpButton: {
    backgroundColor: "#003366", // Dark blue for sign-up button
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
