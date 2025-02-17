import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import * as TextRecognition from 'react-native-text-recognition';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null); // Store the camera ref in state
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [scannedText, setScannedText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // Add processing state
  const [cameraReady, setCameraReady] = useState(false); // Camera Ready state
  const cameraRef = useRef(); // Ref for the camera

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (camera && cameraReady) { // Check if camera ref exists AND is ready
      setIsProcessing(true); // Set processing to true
      try {
        const photo = await camera.takePictureAsync(); // Use camera from state
        setCapturedPhoto(photo.uri);
        await processImage(photo.uri);
      } catch (error) {
        console.error("Error taking picture:", error);
      } finally {
        setIsProcessing(false); // Set processing to false
      }
    } else {
      console.warn("Camera is not ready yet!"); // Warn if camera is not ready
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

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        ref={(r) => { 
          setCamera(r); // Set camera ref in state
          if (r) setCameraReady(true); // Set cameraReady when ref is available
          else setCameraReady(false); // Set cameraReady to false if ref is null
        }} 
        onCameraReady={() => setCameraReady(true)} // Alternative to set cameraReady
      />
      <TouchableOpacity 
        style={[styles.button, isProcessing && styles.buttonDisabled]} // Disable button while processing
        onPress={takePicture}
        disabled={isProcessing} // Disable while processing
      >
        {isProcessing ? (
          <ActivityIndicator color="white" /> // Show indicator while processing
        ) : (
          <Text style={styles.buttonText}>Capture Prescription</Text>
        )}
      </TouchableOpacity>
      {capturedPhoto && <Image source={{ uri: capturedPhoto }} style={styles.preview} />}
      {scannedText ? (
        <View style={styles.textBox}>
          <Text style={styles.scannedText}>{scannedText}</Text>
        </View>
      ) : null}
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
  scannedText: { fontSize: 16, textAlign: 'center' },
  buttonDisabled: { backgroundColor: 'gray'}
});
