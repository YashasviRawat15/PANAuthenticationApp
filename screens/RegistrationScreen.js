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
      <Text style={styles.title}>Registration Screen</Text>
      <PANScan onPanExtracted={handlePanExtracted} />
      <PANUpload onPanExtracted={handlePanExtracted} />
      {panDetails && (
        <Text style={styles.result}>
          {panDetails.panNumber || `Error: ${panDetails.error}`}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    color: 'green',
  },
});
