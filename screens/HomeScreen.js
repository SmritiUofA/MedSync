import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MedSync</Text>
      <Text style={styles.subtitle}>AI-Powered Medication Management & Health Tracker</Text>
      
      <Button
        mode="contained"
        onPress={() => navigation.navigate('PrescriptionScanner')}
        style={styles.button}
      >
        Scan Prescription
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('Reminders')}
        style={styles.button}
      >
        Set Reminders
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SideEffectTracker')}
        style={styles.button}
      >
        Track Side Effects
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('CaregiverSupport')}
        style={styles.button}
      >
        Family & Caregiver Support
      </Button>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('VoiceCommands')}
        style={styles.button}
      >
        Voice Commands & Audio Assistance
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#007AFF',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    color: '#555',
  },
  button: {
    marginTop: 10,
    width: '80%',
  },
});

export default HomeScreen;