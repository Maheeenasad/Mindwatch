import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image, Modal } from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CONFIG from '../../config';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [resetStage, setResetStage] = useState<'request' | 'reset'>('request');
  const [resetCode, setResetCode] = useState('');
  const [verificationStage, setVerificationStage] = useState<'email' | 'code' | 'newPassword'>('email');

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

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }

    try {
      const response = await axios.post(`${CONFIG.SERVER_URL}/forgot-password`, {
        email: resetEmail
      });

      if (process.env.NODE_ENV !== 'production') {
        Alert.alert('Development Mode', `Your reset code: ${response.data.code}`, [{ text: 'OK', onPress: () => setVerificationStage('code') }]);
      } else {
        Alert.alert('Code Sent', 'Check your email for the 6-digit reset code', [{ text: 'OK', onPress: () => setVerificationStage('code') }]);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert('Error', error.response?.data.message || 'Failed to send reset code');
      } else {
        Alert.alert('Error', 'Failed to send reset code');
      }
    }
  };

  // New function to verify code
  const handleVerifyCode = async () => {
    if (!resetCode || resetCode.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit code');
      return;
    }

    try {
      // Just move to password reset screen if code looks valid
      // Actual verification happens when submitting new password
      setVerificationStage('newPassword');
    } catch (error) {
      Alert.alert('Error', 'Invalid verification code');
    }
  };

  // Updated handleResetPassword
  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await axios.post(`${CONFIG.SERVER_URL}/reset-password`, {
        email: resetEmail,
        code: resetCode,
        newPassword: newPassword
      });

      Alert.alert('Success', 'Password has been reset successfully', [
        {
          text: 'OK',
          onPress: () => {
            setShowForgotPasswordModal(false);
            setVerificationStage('email');
            setResetEmail('');
            setResetCode('');
            setNewPassword('');
            setConfirmPassword('');
          }
        }
      ]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert('Error', error.response?.data.message || 'Failed to reset password');
      } else {
        Alert.alert('Error', 'Failed to reset password');
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require('@/assets/mw-logo.png')} style={styles.logo} />

      {/* Email Field */}
      <TextInput placeholder='Enter your email' style={styles.input} value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' />

      {/* Password Field with Eye Icon */}
      <View style={styles.passwordContainer}>
        <TextInput placeholder='Enter your password' style={styles.passwordInput} secureTextEntry={!showPassword} value={password} onChangeText={setPassword} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color='#888' />
        </TouchableOpacity>
      </View>

      {/* Forgot Password Link */}
      <TouchableOpacity onPress={() => setShowForgotPasswordModal(true)}>
        <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Link to Sign Up */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>

      {/* Forgot Password Modal */}
      <Modal visible={showForgotPasswordModal} animationType='slide' transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {verificationStage === 'email' ? (
              <>
                <Text style={styles.modalTitle}>Reset Password</Text>
                <TextInput placeholder='Enter your email' style={styles.modalInput} value={resetEmail} onChangeText={setResetEmail} keyboardType='email-address' autoCapitalize='none' />
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setShowForgotPasswordModal(false)}>
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.modalButton, styles.submitButton]} onPress={handleForgotPassword}>
                    <Text style={styles.modalButtonText}>Send Code</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : verificationStage === 'code' ? (
              <>
                <Text style={styles.modalTitle}>Enter Verification Code</Text>
                <TextInput placeholder='6-digit code' style={styles.modalInput} value={resetCode} onChangeText={setResetCode} keyboardType='numeric' maxLength={6} />
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setVerificationStage('email')}>
                    <Text style={styles.modalButtonText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.modalButton, styles.submitButton]} onPress={handleVerifyCode}>
                    <Text style={styles.modalButtonText}>Verify</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Create New Password</Text>
                <TextInput placeholder='New Password' style={styles.modalInput} secureTextEntry={true} value={newPassword} onChangeText={setNewPassword} />
                <TextInput placeholder='Confirm New Password' style={styles.modalInput} secureTextEntry={true} value={confirmPassword} onChangeText={setConfirmPassword} />
                <View style={styles.modalButtonContainer}>
                  <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={() => setVerificationStage('code')}>
                    <Text style={styles.modalButtonText}>Back</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.modalButton, styles.submitButton]} onPress={handleResetPassword}>
                    <Text style={styles.modalButtonText}>Reset Password</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    // textDecorationLine: 'underline',
    fontSize: 16
  },
  forgotPasswordLink: {
    color: '#003366',
    alignSelf: 'flex-end',
    marginBottom: 20,
    fontSize: 14
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#003366'
  },
  modalInput: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalButton: {
    padding: 12,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center'
  },
  cancelButton: {
    backgroundColor: '#ccc'
  },
  submitButton: {
    backgroundColor: '#003366'
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  codeInput: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 24,
    textAlign: 'center',
    letterSpacing: 8
  }
});
