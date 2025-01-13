import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import { extractPANFromImage } from '../utils/PANUtils';

const ScanPanScreen = ({ navigation }) => {
  const [panNumber, setPanNumber] = useState('');

  const handleScanPAN = async () => {
    try {
      const result = await ImagePicker.launchCamera({ mediaType: 'photo' });
      if (result.assets && result.assets[0]?.uri) {
        const imagePath = result.assets[0].uri;
        const extractedPAN = await extractPANFromImage(imagePath);
        setPanNumber(extractedPAN);
        Alert.alert('PAN Scanned', `Extracted PAN Number: ${extractedPAN}`);
      } else {
        Alert.alert('Error', 'Failed to capture the image.');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to extract PAN number.');
    }
  };

  const handleUploadPAN = async () => {
    try {
      const result = await ImagePicker.launchImageLibrary({ mediaType: 'photo' });
      if (result.assets && result.assets[0]?.uri) {
        const imagePath = result.assets[0].uri;
        const extractedPAN = await extractPANFromImage(imagePath);
        setPanNumber(extractedPAN);
        Alert.alert('PAN Uploaded', `Extracted PAN Number: ${extractedPAN}`);
      } else {
        Alert.alert('Error', 'No image selected.');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to extract PAN number.');
    }
  };

  const handleProceed = () => {
    if (!panNumber) {
      Alert.alert('Error', 'Please scan or upload a valid PAN card first.');
      return;
    }
    navigation.navigate('RegistrationScreen', { panNumber });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your PAN Card</Text>
      <TextInput
        style={styles.input}
        placeholder="Extracted PAN Number"
        value={panNumber}
        editable={false}
      />
      <View style={styles.buttonContainer}>
        <Button title="Scan PAN" onPress={handleScanPAN} />
        <Button title="Upload PAN" onPress={handleUploadPAN} />
      </View>
      <Button title="Proceed to Register" onPress={handleProceed} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
});

export default ScanPanScreen;
