import { manipulateAsync } from 'expo-image-manipulator';
import Tesseract from 'tesseract.js';

export async function extractPanNumber(imageUri) {
  try {
    // Preprocess image: Resize and convert to grayscale
    const manipulatedImage = await manipulateAsync(
      imageUri,
      [{ resize: { width: 800 } }],
      { compress: 1, format: 'jpeg' }
    );

    const worker = await Tesseract.createWorker();

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    const { data: { text } } = await worker.recognize(manipulatedImage.uri);

    const panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/g;
    const matches = text.match(panRegex);

    if (matches && matches.length > 0) {
      return { panNumber: matches[0] };
    } else {
      throw new Error('PAN number not found in the image.');
    }
  } catch (error) {
    console.error('Error extracting PAN number:', error);
    return { error: error.message };
  }
}
