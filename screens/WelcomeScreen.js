import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PAN Card Registration</Text>
      <Text style={styles.subtitle}>Get started with secure registration using your PAN Card.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('VerifyOptionsScreen')}
      >
        <Text style={styles.buttonText}>New User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.buttonText}>Sign In</Text>
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

export default WelcomeScreen;
