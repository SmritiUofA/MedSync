import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MedicationCard({ medication }) {
  return (
    <View style={styles.card}>
      <Text style={styles.medName}>{medication.name}</Text>
      <Text style={styles.medTime}>Take at: {medication.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#f1f1f1', borderRadius: 8, marginBottom: 10 },
  medName: { fontSize: 18, fontWeight: 'bold' },
  medTime: { fontSize: 16, color: '#555' }
});
