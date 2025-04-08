import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import axios from 'axios';
import CONFIG from '../../config';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/types';
import Markdown from 'react-native-markdown-display';

export default function ChatbotScreen() {
  const navigation = useNavigation();

  type Message = {
    text: string;
    sender: 'user' | 'bot';
    screen?: keyof RootStackParamList; // Ensure it matches your navigation stack
  };

  const [messages, setMessages] = useState<Message[]>([{ text: 'Hi, I’m Mindwatch! How can I help you today?', sender: 'bot' }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const emotionToExercise: Record<string, string> = {
    angry: 'Anger',
    anxious: 'Anxiety',
    stressed: 'Breathing',
    depressed: 'Depression',
    fatigued: 'Fatigue',
    afraid: 'Fear',
    scared: 'Fear',
    fear: 'Fear',
    'fear of loss': 'FearOfLoss',
    forgiveness: 'Forgiveness',
    frustrated: 'Frustration',
    happy: 'Happiness',
    impatient: 'Impatience',
    irritated: 'Irritation',
    jealousy: 'Jealousy',
    jealous: 'Jealousy',
    lonely: 'Loneliness',
    pain: 'Pain',
    sad: 'Sadness',
    'self confidence': 'SelfConfidence',
    shy: 'Shyness'
  };

  const detectEmotion = (message: string): keyof RootStackParamList | null => {
    const words = message.toLowerCase().split(' ');
    const foundEmotion = words.find(word => word in emotionToExercise);

    if (foundEmotion) {
      return emotionToExercise[foundEmotion] as keyof RootStackParamList;
    }

    return null;
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [...messages, { text: input, sender: 'user' }];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(`${CONFIG.SERVER_URL}/chat`, { message: input });
      const botMessage: string = response.data.reply;
      let suggestedExercise = detectEmotion(input);

      if (suggestedExercise) {
        setMessages([
          ...newMessages,
          { text: botMessage, sender: 'bot' },
          {
            text: `I noticed you're feeling this way. Would you like to try a ${suggestedExercise} exercise?`,
            sender: 'bot',
            screen: suggestedExercise as keyof RootStackParamList
          }
        ]);
      } else {
        setMessages([...newMessages, { text: botMessage, sender: 'bot' }]);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatArea} ref={scrollViewRef}>
        {messages.map((msg, index) => (
          <View key={index} style={[styles.messageContainer, msg.sender === 'user' ? styles.userContainer : styles.botContainer, msg.sender === 'bot' && index === 0 ? styles.firstBotMessage : {}]}>
            {msg.sender === 'bot' && index === 0 && <LottieView source={require('../../assets/icons/robot.json')} autoPlay loop style={styles.robotAnimation} />}

            <View style={[styles.message, msg.sender === 'user' ? styles.userMsg : styles.botMsg]}>
              <Markdown
                style={{
                  text: { color: msg.sender === 'user' ? '#003366' : '#fff', fontSize: 16 },
                  bullet_list_icon: { color: msg.sender === 'user' ? '#003366' : '#fff' },
                  ordered_list_icon: { color: msg.sender === 'user' ? '#003366' : '#fff' }
                }}>
                {msg.text}
              </Markdown>
            </View>
            {msg.screen && (
              <TouchableOpacity
                style={styles.suggestionButton}
                onPress={() => {
                  console.log('Navigating to:', msg.screen);
                  if (msg.screen) {
                    navigation.navigate(msg.screen);
                  }
                }}>
                <Text style={styles.suggestionText}>Try {msg.screen} Exercise</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {loading && <LottieView source={require('../../assets/icons/typing.json')} autoPlay loop style={styles.typingAnimation} />}
      </ScrollView>
      <View style={styles.inputArea}>
        <TextInput style={styles.input} value={input} onChangeText={setInput} placeholder='Type a message...' placeholderTextColor='#666' />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Ionicons name='send' size={24} color='#fff' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F0F8FF' },
  chatArea: { flex: 1, paddingHorizontal: 20 },
  messageContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  userContainer: { alignSelf: 'flex-end' },
  botContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'column'
  },

  firstBotMessage: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  message: { maxWidth: '75%', padding: 14, borderRadius: 20, flexDirection: 'row', alignItems: 'center' },
  userMsg: { backgroundColor: '#A5D8FF', alignSelf: 'flex-end' },
  botMsg: { backgroundColor: '#003366', alignSelf: 'flex-start' },
  userText: { color: '#003366', fontSize: 16 },
  botText: { color: '#fff', fontSize: 16 },
  messageText: { flex: 1 },
  typingAnimation: { width: 90, height: 50, alignSelf: 'center', marginBottom: 10 },
  robotAnimation: { width: 75, height: 75 },
  inputArea: { flexDirection: 'row', padding: 12, borderRadius: 30, backgroundColor: 'rgba(171, 208, 230, 0.96)', marginBottom: 20, marginHorizontal: 10, alignItems: 'center' },
  input: { flex: 1, padding: 14, color: '#003366', fontSize: 16 },
  sendButton: { marginLeft: 10, backgroundColor: '#003366', padding: 14, borderRadius: 30 },
  suggestionButton: { marginTop: 5, padding: 10, backgroundColor: '#4CAF50', borderRadius: 15, alignSelf: 'flex-start' },
  suggestionText: { color: '#fff', fontWeight: 'bold' }
});
