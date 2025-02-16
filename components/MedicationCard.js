import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const MedicationCard = ({ medication }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.medicationName}>{medication.name}</Text>
      <Text style={styles.medicationTime}>Time: {medication.time}</Text>
      {/* Add other details here */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicationTime: {
    fontSize: 16,
  },
});

export default MedicationCard;
