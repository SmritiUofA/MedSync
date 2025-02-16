import React, { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { List, FAB, Text } from "react-native-paper";

export default function MedicationListScreen() {
  const [medications, setMedications] = useState([
    { id: "1", name: "Paracetamol", time: "Morning" },
    { id: "2", name: "Metformin", time: "Evening" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Medications</Text>

      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <List.Item title={item.name} description={`Time: ${item.time}`} left={(props) => <List.Icon {...props} icon="pill" />} />
        )}
      />

      <FAB icon="plus" style={styles.fab} onPress={() => alert("Add new medication feature coming soon!")} />
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
