import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as TextRecognition from 'react-native-text-recognition';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [scannedText, setScannedText] = useState('');

  let cameraRef;

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setCapturedPhoto(photo.uri);
      processImage(photo.uri);
    }
  };

  const processImage = async (imageUri) => {
    try {
      const recognizedText = await TextRecognition.recognize(imageUri);
      setScannedText(recognizedText.join('\n'));
    } catch (error) {
      console.log('Error processing image:', error);
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission === null ? (
        <TouchableOpacity style={styles.button} onPress={requestCameraPermission}>
          <Text style={styles.buttonText}>Grant Camera Access</Text>
        </TouchableOpacity>
      ) : (
        <>
          <Camera style={styles.camera} ref={(ref) => (cameraRef = ref)} />
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.buttonText}>Capture Prescription</Text>
          </TouchableOpacity>
          {capturedPhoto && <Image source={{ uri: capturedPhoto }} style={styles.preview} />}
          {scannedText ? (
            <View style={styles.textBox}>
              <Text style={styles.scannedText}>{scannedText}</Text>
            </View>
          ) : null}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { width: 300, height: 400, borderRadius: 10, marginBottom: 20 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 18 },
  preview: { width: 200, height: 200, marginTop: 20, borderRadius: 10 },
  textBox: { padding: 15, backgroundColor: '#f8f9fa', marginTop: 20, borderRadius: 8 },
  scannedText: { fontSize: 16, textAlign: 'center' }
});
