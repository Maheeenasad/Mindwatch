import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp } from '@react-navigation/native';
import CONFIG from "../../config";

export default function ProfileScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      const response = await axios.get(`${CONFIG.SERVER_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setName(response.data.name);
      setEmail(response.data.email);
      setLoading(false);
    } catch (error) {
      Alert.alert("Error", "Failed to fetch profile");
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      await axios.put(
        "http://192.168.100.8:5000/profile",
        { name, email },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await AsyncStorage.setItem("userName", name);
      Alert.alert("Success", "Profile updated successfully");
    } catch (error) {
      Alert.alert("Error", "Failed to update profile");
    }
  };

  const changePassword = async () => {
    try {
      const token = await AsyncStorage.getItem("userToken");
      await axios.put(
        "http://192.168.100.8:5000/profile/change-password",
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      Alert.alert("Success", "Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
    } catch (error) {
      Alert.alert(
        "Error",
        (error as any).response?.data.message || "Failed to update password"
      );
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem("userToken");
      Alert.alert("Success", "Logged out successfully");
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      Alert.alert("Error", "Failed to log out");
    }
  };

  const deleteAccount = async () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              const token = await AsyncStorage.getItem("userToken");
              await axios.delete("http://192.168.100.8:5000/profile/delete", {
                headers: { Authorization: `Bearer ${token}` },
              });
              await AsyncStorage.removeItem("userToken");
              Alert.alert("Success", "Your account has been deleted");
              navigation.reset({
                index: 0,
                routes: [{ name: "Login" }],
              });
            } catch (error) {
              Alert.alert("Error", "Failed to delete account");
            }
          },
        },
      ]
    );
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>General</Text>

      <TextInput
        placeholder="Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TouchableOpacity style={styles.button} onPress={updateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Change Password</Text>
      <TextInput
        placeholder="Current Password"
        style={styles.input}
        secureTextEntry
        value={currentPassword}
        onChangeText={setCurrentPassword}
      />
      <TextInput
        placeholder="New Password"
        style={styles.input}
        secureTextEntry
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TouchableOpacity style={styles.button} onPress={changePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={deleteAccount}>
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#F0F8FF", // Light blue background color
  },
  loadingText: {
    fontSize: 20,
    color: "#333",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003366", // Dark blue color for title
    marginBottom: 30,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366", // Dark blue for section titles
    marginTop: 30,
    marginBottom: 10,
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 8,
    backgroundColor: "#FFF",
    fontSize: 16,
    color: "#333",
  },
  button: {
    backgroundColor: "#003366", // Light blue button color
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff", // Dark blue for the button text
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#FF7043", // Lighter orange-red for logout
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#FF7043", // Lighter red for delete account
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
});
