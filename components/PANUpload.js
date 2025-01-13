import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { extractPanNumber } from '../utils/PANUtils';

export default function PANUpload({ onPanExtracted }) {
  const handleUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
      <Text style={styles.text}>Upload a clear image of your PAN card.</Text>
      <Button title="Upload PAN Card" onPress={handleUpload} />
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
