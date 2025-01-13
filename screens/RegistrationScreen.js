import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PANScan from '../components/PANScan';
import PANUpload from '../components/PANUpload';

export default function RegistrationScreen() {
  const [panDetails, setPanDetails] = useState(null);

  const handlePanExtracted = (details) => {
    setPanDetails(details);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAN Verification</Text>
      <PANScan onPanExtracted={handlePanExtracted} />
      <PANUpload onPanExtracted={handlePanExtracted} />
      {panDetails && (
        <Text style={[styles.result, panDetails.error ? styles.errorText : styles.successText]}>
          {panDetails.panNumber || `Error: ${panDetails.error}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9', // Light background color for a softer look
    justifyContent: 'center', 
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center', // Center the title
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center', // Center the result text
    padding: 10,
    borderRadius: 8,
    width: '80%',
    marginBottom: 20,
  },
  successText: {
    backgroundColor: '#e0f7e0', // Light green background for success
    color: '#388e3c', // Dark green text for success
  },
  errorText: {
    backgroundColor: '#ffebee', // Light red background for error
    color: '#d32f2f', // Dark red text for error
  },
});
