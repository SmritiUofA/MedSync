import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MedicationCard from '../components/MedicationCard';

export default function RemindersScreen() {
  const [medications, setMedications] = useState([
    { id: '1', name: 'Aspirin', time: '8:00 AM' },
    { id: '2', name: 'Metformin', time: '12:00 PM' },
    { id: '3', name: 'Lisinopril', time: '6:00 PM' }
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scheduled Medications</Text>
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MedicationCard medication={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 }
});
