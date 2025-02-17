import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { List, FAB } from "react-native-paper";
import Voice from 'react-native-voice';

function MedicationInput() {
  const [medicationName, setMedicationName] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const initializeVoice = async () => {
      const isAvailable = await Voice.isAvailable();
      if (isAvailable) {
        Voice.onSpeechStart = () => setIsListening(true);
        Voice.onSpeechEnd = () => setIsListening(false);
        Voice.onSpeechResults = (event) => {
          const transcript = event.value[0];
          setMedicationName(transcript);
        };
        Voice.onSpeechError = (event) => console.error('Speech recognition error:', event.error);
      } else {
        console.warn("Voice recognition is not available on this device.");
      }
    };

    initializeVoice(); // Call the initialization function

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  const startListening = async () => {
    try {
      await Voice.start('en-US'); // Specify language (optional)
    } catch (error) {
      console.error('Error starting speech recognition:', error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
    } catch (error) {
      console.error('Error stopping speech recognition:', error);
    }
  };

  const handleAddMedication = () => {
    if (medicationName.trim() !== '') { // Prevent adding empty medications
      onMedicationAdded(medicationName); // Call the callback with the medication name
      setMedicationName(''); // Clear the input field
    }
    return (
      <View>
        <TextInput
          value={medicationName}
          onChangeText={setMedicationName}
          placeholder="Medication Name"
        />
        <Button title={isListening ? 'Listening...' : 'Start Listening'} onPress={startListening} disabled={isListening} />
        <Button title="Add Medication" onPress={handleAddMedication} disabled={!medicationName} /> {/* Add button */}
      </View>
    );
  }
};

export default function MedicationListScreen() {
  const [medications, setMedications] = useState([
    { id: "1", name: "Paracetamol", time: "Morning" },
    { id: "2", name: "Metformin", time: "Evening" },
  ]);
  const [isAddingMedication, setIsAddingMedication] = useState(false); // State to control MedicationInput visibility

  const handleMedicationAdded = (newMedication) => {
    const newMedicationObj = { id: Date.now().toString(), name: newMedication, time: "To be decided" }; // Add ID and default time
    setMedications([...medications, newMedicationObj]);
    setIsAddingMedication(false); // Close the input area
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Medications</Text>

      {isAddingMedication ? ( // Conditionally render the input area
        <MedicationInput onMedicationAdded={handleMedicationAdded} />
      ) : null}

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => setIsAddingMedication(!isAddingMedication)} // Toggle input area
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F8F9FA",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    backgroundColor: "#007AFF",
  },
});
