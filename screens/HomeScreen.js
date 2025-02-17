import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  console.log("HomeScreen component is rendering!");
  return (
    <View style={styles.container}>
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


      {/* Add more buttons/navigation as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // A slightly off-white background
    padding: 20, // Add some padding
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 100, // Adjust size as needed
    marginBottom: 20,
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
});

export default HomeScreen;