import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PANScan from '../components/PANScan';
import PANUpload from '../components/PANUpload';

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration Screen</Text>
      <PANScan />
      <PANUpload />
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
});
