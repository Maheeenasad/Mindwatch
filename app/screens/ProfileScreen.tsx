import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import CONFIG from '../../config';
import { MaterialIcons } from '@expo/vector-icons';

interface FamilyMember {
  name: string;
  contact: string;
  _id?: string;
}

export default function ProfileScreen({ navigation }: { navigation: NavigationProp<any> }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(true);
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [newFamilyMember, setNewFamilyMember] = useState<FamilyMember>({ name: '', contact: '' });

  const fetchProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const response = await axios.get(`${CONFIG.SERVER_URL}/profile`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setName(response.data.name);
      setEmail(response.data.email);
      setFamilyMembers(response.data.familyMembers || []);
      setLoading(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch profile');
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      await axios.put(
        `${CONFIG.SERVER_URL}/profile`,
        { name, email },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      await AsyncStorage.setItem('userName', name);
      Alert.alert('Success', 'Profile updated successfully');
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile');
    }
  };

  const changePassword = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      await axios.put(
        `${CONFIG.SERVER_URL}/profile/change-password`,
        { currentPassword, newPassword },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      Alert.alert('Success', 'Password updated successfully');
      setCurrentPassword('');
      setNewPassword('');
    } catch (error) {
      Alert.alert('Error', (error as any).response?.data.message || 'Failed to update password');
    }
  };

  // Update the removeFamilyMember function to:
  const removeFamilyMember = async (index: number) => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      const memberToRemove = familyMembers[index];

      // Remove from local state first for immediate UI update
      const updatedMembers = [...familyMembers];
      updatedMembers.splice(index, 1);
      setFamilyMembers(updatedMembers);

      // Update backend
      await axios.put(`${CONFIG.SERVER_URL}/profile/family`, { familyMembers: updatedMembers }, { headers: { Authorization: `Bearer ${token}` } });

      Alert.alert('Success', 'Family member removed');
    } catch (error) {
      Alert.alert('Error', 'Failed to remove family member');
      // Revert if failed
      setFamilyMembers(familyMembers);
    }
  };

  // Update the addFamilyMember function to:
  const addFamilyMember = async () => {
    if (!newFamilyMember.name || !newFamilyMember.contact) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const token = await AsyncStorage.getItem('userToken');
      const updatedMembers = [...familyMembers, newFamilyMember];

      // Update backend first
      const response = await axios.put(`${CONFIG.SERVER_URL}/profile/family`, { familyMembers: updatedMembers }, { headers: { Authorization: `Bearer ${token}` } });

      // Then update local state with the confirmed data from server
      setFamilyMembers(response.data.familyMembers);
      setNewFamilyMember({ name: '', contact: '' });
      Alert.alert('Success', 'Family member added');
    } catch (error) {
      Alert.alert('Error', 'Failed to add family member');
    }
  };

  const updateFamilyDetails = async () => {
    try {
      const token = await AsyncStorage.getItem('userToken');
      await axios.put(`${CONFIG.SERVER_URL}/profile/family`, { familyMembers }, { headers: { Authorization: `Bearer ${token}` } });
      Alert.alert('Success', 'Family details updated');
    } catch (error) {
      Alert.alert('Error', 'Failed to update family details');
    }
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      Alert.alert('Success', 'Logged out successfully');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }]
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to log out');
    }
  };

  const deleteAccount = async () => {
    Alert.alert('Delete Account', 'Are you sure you want to delete your account? This action cannot be undone.', [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            const token = await AsyncStorage.getItem('userToken');
            await axios.delete(`${CONFIG.SERVER_URL}/profile/delete`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            await AsyncStorage.removeItem('userToken');
            Alert.alert('Success', 'Your account has been deleted');
            navigation.reset({
              index: 0,
              routes: [{ name: 'Login' }]
            });
          } catch (error) {
            Alert.alert('Error', 'Failed to delete account');
          }
        }
      }
    ]);
  };

  const renderFamilyMember = ({ item, index }: { item: FamilyMember; index: number }) => (
    <View style={styles.familyMemberItem}>
      <View style={styles.familyMemberInfo}>
        <Text style={styles.familyMemberName}>{item.name}</Text>
        <Text style={styles.familyMemberContact}>{item.contact}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeFamilyMember(index)}>
        <MaterialIcons name='delete' size={20} color='#B71C1C' />
      </TouchableOpacity>
    </View>
  );

  const renderProfileSection = () => (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name='person' size={24} color='#003366' />
        <Text style={styles.sectionTitle}>General Information</Text>
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder='Enter your name' style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder='Enter your email' style={styles.input} value={email} onChangeText={setEmail} keyboardType='email-address' />
      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={updateProfile}>
        <Text style={styles.buttonText}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );

  const renderPasswordSection = () => (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name='lock' size={24} color='#003366' />
        <Text style={styles.sectionTitle}>Change Password</Text>
      </View>
      <Text style={styles.label}>Current Password</Text>
      <TextInput placeholder='Enter current password' style={styles.input} secureTextEntry value={currentPassword} onChangeText={setCurrentPassword} />
      <Text style={styles.label}>New Password</Text>
      <TextInput placeholder='Enter new password' style={styles.input} secureTextEntry value={newPassword} onChangeText={setNewPassword} />
      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={changePassword}>
        <Text style={styles.buttonText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFamilySection = () => (
    <View style={styles.card}>
      <View style={styles.sectionHeader}>
        <MaterialIcons name='family-restroom' size={24} color='#003366' />
        <Text style={styles.sectionTitle}>Family Members</Text>
      </View>

      {familyMembers.length > 0 ? (
        <View style={styles.familyListContainer}>
          {familyMembers.map((member, index) => (
            <View key={index} style={styles.familyMemberItem}>
              <View style={styles.familyMemberInfo}>
                <Text style={styles.familyMemberName}>{member.name}</Text>
                <Text style={styles.familyMemberContact}>{member.contact}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFamilyMember(index)}>
                <MaterialIcons name='delete' size={20} color='#B71C1C' />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.noFamilyText}>No family members added yet</Text>
      )}

      <Text style={styles.label}>New Family Member Name</Text>
      <TextInput placeholder='Enter name' style={styles.input} value={newFamilyMember.name} onChangeText={text => setNewFamilyMember({ ...newFamilyMember, name: text })} />

      <Text style={styles.label}>Contact Number</Text>
      <TextInput
        placeholder='Enter contact number'
        style={styles.input}
        keyboardType='phone-pad'
        value={newFamilyMember.contact}
        onChangeText={text => setNewFamilyMember({ ...newFamilyMember, contact: text })}
      />

      <View style={styles.addButtonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={addFamilyMember}>
          <MaterialIcons name='add' size={24} color='#FFF' />
          <Text style={styles.addButtonText}>Add Family Member</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={updateFamilyDetails}>
        <Text style={styles.buttonText}>Save Family Details</Text>
      </TouchableOpacity>
    </View>
  );

  const renderActionButtons = () => (
    <View style={styles.actionsContainer}>
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={logout}>
        <MaterialIcons name='logout' size={20} color='#FFF' />
        <Text style={styles.buttonText}> Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteAccount}>
        <MaterialIcons name='delete-forever' size={20} color='#FFF' />
        <Text style={styles.buttonText}> Delete Account</Text>
      </TouchableOpacity>
    </View>
  );

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
    <FlatList
      contentContainerStyle={styles.scrollContainer}
      data={[{}]}
      renderItem={() => (
        <View style={styles.container}>
          {renderProfileSection()}
          {renderPasswordSection()}
          {renderFamilySection()}
          {renderActionButtons()}
        </View>
      )}
      keyExtractor={() => 'profile-screen'}
    />
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
    backgroundColor: '#F0F8FF'
  },
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F0F8FF'
  },
  header: {
    marginBottom: 20,
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#003366',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    paddingBottom: 10
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#003366',
    marginLeft: 10
  },
  label: {
    fontSize: 14,
    color: '#003366',
    marginBottom: 5,
    fontWeight: '500'
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    backgroundColor: '#FFF',
    fontSize: 16,
    color: '#333'
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 10
  },
  saveButton: {
    backgroundColor: '#003366'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600'
  },
  logoutButton: {
    backgroundColor: '#D32F2F',
    marginBottom: 10
  },
  deleteButton: {
    backgroundColor: '#B71C1C'
  },
  actionsContainer: {
    marginTop: 10
  },
  familyListContainer: {
    maxHeight: 150,
    marginBottom: 15
  },
  noFamilyText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 15,
    fontStyle: 'italic'
  },
  familyMemberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 8
  },
  familyMemberInfo: {
    flex: 1
  },
  familyMemberName: {
    fontWeight: '500',
    color: '#003366'
  },
  familyMemberContact: {
    color: '#666',
    fontSize: 14
  },
  removeButton: {
    padding: 5
  },
  addButtonContainer: {
    marginBottom: 15
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: '#FFF',
    marginLeft: 8,
    fontWeight: '600'
  }
});
