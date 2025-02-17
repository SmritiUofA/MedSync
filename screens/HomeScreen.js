import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Image, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'; // For making API requests

const HomeScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const flatListRef = useRef(); // Ref for the FlatList

  const DEEPSEEK_API_KEY = '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'; // Replace with your actual GroqCloud API key
  const DEEPSEEK_API_URL = 'https://api.groq.com/openai/v1/chat/completions'; // GroqCloud API endpoint

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    const newMessage = { text: userInput, sender: 'user' };
    setMessages([...messages, newMessage]);
    setUserInput('');
    setIsLoading(true); // Set loading to true

    try {
      const response = await axios.post(DEEPSEEK_API_URL, {
        model: "llama-3.3-70b-versatile", // Or the specific model you're using
        messages: [{ role: "system", content: "You are a helpful medical assistant.  Provide information based on reliable medical sources.  If you are unsure, say 'I am not qualified to give medical advice. Please consult a doctor.'" }, // Important system message
          ...messages.map(m => ({ role: m.sender === 'user' ? 'user' : 'assistant', content: m.text })),
          { role: "user", content: userInput }],
        temperature: 0.5, // Optional parameters
        max_completion_tokens: 1024,
        top_p: 1, // Include chat history
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${DEEPSEEK_API_KEY}`,
        },
      });

      const botReply = response.data.choices[0].message.content;

      setMessages(currentMessages => [...currentMessages, { text: botReply, sender: 'bot' }]);

    } catch (error) {
      console.error('DeepSeek API Error:', error);
      setMessages(currentMessages => [...currentMessages, { text: 'Error communicating with the AI.', sender: 'bot' }]);
    } finally {
      setIsLoading(false); // Set loading to false after request
    }
  };

  // Scroll to the bottom when new messages are added
  useEffect(() => {
    if (messages.length > 0) {
      flatListRef.current.scrollToOffset({ offest: 0, animated: true });
    }
  }, [messages]);

  return (
    <SafeAreaView style={styles.safeArea}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>MedSync</Text>
      <Text style={styles.subtitle}>Your Medication Companion</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('MedicationList')} // Navigate!
      >
        <Text style={styles.buttonText}>View Medications</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Scan')} // Navigate to Scan screen
      >
        <Text style={styles.buttonText}>Scan Prescription</Text>
      </TouchableOpacity>

      <View style={styles.chatContainer}> {/* Added a chatContainer View */}
          <FlatList
            ref={flatListRef}
            data={messages}
            renderItem={({ item }) => (
              <View style={item.sender === 'user' ? styles.userMessage : styles.botMessage}>
                <Text>{item.text}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}

          />
          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Type your message..."
              value={userInput}
              onChangeText={setUserInput}
              returnKeyType="send" // Show "send" on the keyboard
              onSubmitEditing={sendMessage} // Send message on pressing "send"
            />
            <Button title={isLoading ? "Sending..." : "Send"} onPress={sendMessage} disabled={isLoading} /> {/* Disable button while loading */}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: { // Style for the main content area
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // A slightly off-white background
    padding: 20, // Add some padding
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333', // A darker color
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666', // A lighter color
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff', // A nice blue color
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,  // Space between buttons
    width: '80%', // Make buttons take up most of the screen width
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chatContainer: {  // Style for the chat area
    width: '100%',
    flex: 1,       // Takes up available space
    padding: 10,   // Add some padding
  },
  userMessage: {
    backgroundColor: '#DCF8C8', // Light green
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    alignSelf: 'flex-end', // Align to the right
  },
  botMessage: {
    backgroundColor: '#E5E7EB', // Light gray
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    alignSelf: 'flex-start', // Align to the left
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginRight: 10,
  },
});

export default HomeScreen;