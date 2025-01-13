# PAN Card Scanning and Registration App

This is a **React Native** mobile application that allows users to scan their PAN (Permanent Account Number) card using the device's camera or upload an image of the PAN card from the gallery. Once the PAN number is extracted from the image, the user can proceed with the registration process, where the extracted PAN number is displayed in the corresponding field.

## Features

- **Scan PAN Card**: Use the device's camera to capture an image of the PAN card.
- **Upload PAN Card**: Upload an image of the PAN card from the gallery.
- **Extract PAN Number**: Uses Optical Character Recognition (OCR) to extract the PAN number from the image.
- **Registration Form**: Displays the extracted PAN number in a registration form field.
- **Improved UI**: A clean and responsive UI that provides a seamless experience.

## Tech Stack

- **React Native**: For building the mobile application.
- **Tesseract.js**: A powerful OCR (Optical Character Recognition) library for extracting text from images.
- **React Native Image Picker**: For uploading images from the gallery.
- **React Native Camera**: For scanning the PAN card using the camera.

## Prerequisites

Before starting, make sure you have the following installed on your system:

- Node.js (v14 or above)
- npm or yarn
- React Native CLI
- Xcode (macOS) or Android Studio (Windows/Linux)
- React Native dependencies (`react-native-image-picker`, `react-native-camera`)

## Setup

1. **Clone the repository**:
   Clone the project from the GitHub repository:

   ```bash
   git clone https://github.com/YashasviRawat15/PANAuthenticationApp.git
   ```

2. **Install dependencies**:
   Navigate to the project directory and install the required dependencies.

   ```bash
   cd my-app
   npm install
   ```

3. **Install the necessary React Native dependencies**:

   - Install `react-native-image-picker` for image upload functionality.
   - Install `react-native-camera` for scanning functionality.
   - Install `tesseract.js` for text recognition (OCR).

   ```bash
   npm install react-native-image-picker react-native-camera tesseract.js
   ```

4. **Link Native Modules**:
   Some dependencies like `react-native-camera` may require linking. Run the following commands:

   ```bash
   npx react-native link react-native-camera
   npx react-native link react-native-image-picker
   ```

5. **Run the project**:
   You can now run the project on an emulator or a physical device.

   - For iOS:

     ```bash
     npx react-native run-ios
     ```

   - For Android:

     ```bash
     npx react-native run-android
     ```

## App Flow

1. **Home Screen (PAN Scanning/Uploading)**:
   - The user is presented with the option to either **Scan** or **Upload** the PAN card image.
   - If the **Scan** button is clicked, the app opens the camera and allows the user to capture the PAN card image.
   - If the **Upload** button is clicked, the app opens the image picker, allowing the user to choose an image from their gallery.

2. **Extract PAN Number**:
   - Once the image is captured/uploaded, the app uses `Tesseract.js` (OCR) to extract the PAN number from the image.
   - The extracted PAN number is then displayed in the PAN number field of the registration form.

3. **Proceed to Registration**:
   - After the PAN number is extracted, the user can click **Proceed to Register**.
   - The app can redirect the user to the registration screen (which can be expanded as part of the app).

## Code Overview

### App.js (Main Screen)

#### State Management:

- `imageUri`: Stores the URI of the image captured/uploaded by the user.
- `panNumber`: Stores the extracted PAN number from the image.
- `isScanning`: A state variable used to show a loading spinner when the scanning process is in progress.

#### Functions:

- `handleScan`: Initiates the scanning process using the device's camera. It uses the `launchCamera` method from the `react-native-camera` package.
- `handleUpload`: Allows the user to upload an image from their device gallery using `react-native-image-picker`.
- `extractPanNumberFromImage`: Extracts the PAN number using the OCR functionality provided by `tesseract.js`.

### panutils.js (PAN Extraction Logic)

This utility file contains the function `extractPanNumber`, which performs the OCR operation to extract the PAN number from the provided image.

- **OCR with Tesseract.js**: The image URI is passed to `Tesseract.recognize`, which processes the image and extracts the text.
- **PAN Validation**: The text extracted is then matched with a regex pattern that defines the format of a PAN number (`[A-Z]{5}[0-9]{4}[A-Z]{1}`).

### styles.js (UI Styling)

- Uses `React Native StyleSheet` to style various components such as buttons, inputs, and images.
- Provides responsiveness and adjusts the UI for both mobile devices and tablets.
