import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { extractPanNumber } from '../utils/PANUtils';

export default function PANScan({ onPanExtracted }) {
  const handleScan = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      alert('Camera access is required to scan PAN card.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      const panDetails = await extractPanNumber(result.uri);
      onPanExtracted(panDetails);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Place your PAN card inside the box to scan.</Text>
      <Button title="Scan PAN Card" onPress={handleScan} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});
