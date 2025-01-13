import * as Tesseract from 'tesseract.js';

export async function extractPanNumber(imageUri) {
  try {
    const result = await Tesseract.recognize(imageUri, 'eng');
    const text = result.data.text;

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
