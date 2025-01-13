import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const VerifyOptionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your PAN Card</Text>
      <Text style={styles.subtitle}>Upload or scan your PAN Card to proceed.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScanPANScreen')}
      >
        <Text style={styles.buttonText}>Scan PAN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('UploadPANScreen')}
      >
        <Text style={styles.buttonText}>Upload PAN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  button: { backgroundColor: '#0056F6', padding: 15, marginVertical: 10, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default VerifyOptionsScreen;
