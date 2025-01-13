import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PANUpload() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Upload a clear image of your PAN card.</Text>
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