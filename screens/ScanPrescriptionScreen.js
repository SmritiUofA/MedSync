import React, { useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text, ActivityIndicator } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";

export default function ScanPrescriptionScreen() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scan Your Prescription</Text>

      {image && <Image source={{ uri: image }} style={styles.image} />}

      {loading ? (
        <ActivityIndicator animating={true} color="#007AFF" />
      ) : (
        <Button mode="contained" onPress={pickImage} style={styles.button}>
          Select Prescription
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
  },
});
