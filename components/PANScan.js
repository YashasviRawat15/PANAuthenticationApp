import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PANScan() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Place your PAN card inside the box to scan.</Text>
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
  },
});