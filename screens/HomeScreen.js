import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MedSync</Text>
      <Text style={styles.subtitle}>AI-Powered Medication Management & Health Tracker</Text>
      
      <Button
        title="Scan Prescription"
        onPress={() => navigation.navigate('PrescriptionScanner')}
      />
      <Button
        title="Set Reminders"
        onPress={() => navigation.navigate('Reminders')}
      />
      <Button
        title="Track Side Effects"
        onPress={() => navigation.navigate('SideEffectTracker')}
      />
      <Button
        title="Family & Caregiver Support"
        onPress={() => navigation.navigate('CaregiverSupport')}
      />
      <Button
        title="Voice Commands & Audio Assistance"
        onPress={() => navigation.navigate('VoiceCommands')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
  },
});

export default HomeScreen;