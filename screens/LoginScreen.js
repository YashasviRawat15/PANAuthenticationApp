import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAN Verification</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.buttonText}>Go to Registration</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f9', // Light background for a soft look
    padding: 20, // Padding for screen edges
  },
  title: {
    fontSize: 32, // Larger title for prominence
    fontWeight: 'bold',
    color: '#333', // Dark text color for contrast
    marginBottom: 30, // Space between title and button
  },
  button: {
    backgroundColor: '#0066cc', // Blue button background
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center the text inside the button
  },
  buttonText: {
    fontSize: 18,
    color: 'white', // White text for contrast
    fontWeight: '600', // Slightly bold text for clarity
  },
});
