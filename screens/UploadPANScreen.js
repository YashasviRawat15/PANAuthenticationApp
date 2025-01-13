import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UploadPANScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleProceed = () => {
    if (selectedImage) {
      // Add verification logic here (e.g., upload the image to a server)
      navigation.navigate('RegistrationScreen'); // Proceed to next step
    } else {
      alert('Please upload a PAN card image before proceeding.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload PAN</Text>
      <Text style={styles.subtitle}>
        Upload a clear image (JPEG, PNG, or PDF format) of your PAN card.
      </Text>

      {selectedImage ? (
        <Image source={{ uri: selectedImage }} style={styles.imagePreview} />
      ) : (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>No Image Selected</Text>
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload PAN</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.proceedButton} onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed with PAN Verification</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
  imagePlaceholder: {
    width: 200,
    height: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imagePlaceholderText: { color: '#888' },
  imagePreview: { width: 200, height: 150, marginBottom: 20, borderRadius: 8 },
  button: { backgroundColor: '#0056F6', padding: 15, marginVertical: 10, borderRadius: 8 },
  proceedButton: { backgroundColor: '#28A745', padding: 15, marginVertical: 10, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default UploadPANScreen;
