## Run App (Dev Mode) for Android

Running Fiirebolt. Here's a step-by-step guide:

**1. Install Required Software:**
Before you start, ensure you have the following installed on your computer:

- Android Studio: This includes the Android SDK and an emulator to run Android apps on your computer.
- Node.js: Required to run JavaScript code on your computer.

**2. Set Up Android Emulator:**
If you're planning to run the app on an emulator, open Android Studio and set up an emulator by following these steps:

- Launch Android Studio.
- Go to "Tools" > "AVD Manager."
- Click "Create Virtual Device."
- Choose a device definition and select a system image with Google Play support.
- Follow the prompts to create the emulator.

**3. Create Your JavaScript App:**
Assuming you have your JavaScript app code ready, make sure it's structured properly for a mobile environment. You might want to use a framework like React Native, Ionic, or Cordova to build a mobile app using JavaScript.

**4. Install Required Packages:**
Navigate to your project's root directory using a terminal or command prompt and install any necessary packages:

```bash
npm install firebolt
```

**5. Build the App:**
Depending on the framework you're using, build your app for the Android platform. For example, if you're using React Native:

```bash
npx react-native run-android
```

This command will build and deploy your app to the Android device or emulator.

**6. Connect Android Device:**
If you're using a physical Android device, connect it to your computer via USB and enable USB debugging in the developer options on your device.

**7. Run the App:**
Once the app is built and your device or emulator is ready, you can run the app using the following command (if you're using React Native):

```bash
npx react-native start
```

This starts the Metro bundler, which bundles your JavaScript code and serves it to your app.

**8. Monitor and Debug:**
You can monitor your app's output and debug it using the developer tools provided by your chosen framework or by using browser developer tools if your app runs in a WebView.

## Run App (Dev Mode) for iOS

Running Fiirebolt on iOS. Here's a step-by-step guide:

**1. Install Required Software:**
Before you start, ensure you have the following software installed on your Mac computer:

- Xcode: This includes the iOS SDK and the development tools necessary for building and running iOS apps.
- Node.js: Required to run JavaScript code on your computer.

**2. Set Up iOS Simulator:**
If you plan to run the app on an iOS simulator, open Xcode and set up a simulator by following these steps:

- Launch Xcode.
- Go to "Xcode" > "Preferences."
- In the "Locations" tab, make sure you have the correct version of Xcode Command Line Tools selected.
- Create a new iOS simulator device in Xcode by going to "Xcode" > "Preferences" > "Components." Find the simulator version you want to use and click "Download."

**3. Create Your JavaScript App:**
Assuming you have your JavaScript app code ready, ensure it's structured properly for a mobile environment. Consider using a framework like React Native, Ionic, or Cordova to build a mobile app using JavaScript.

**4. Install Required Packages:**
Navigate to your project's root directory using a terminal or command prompt and install any necessary packages:

```bash
npm install firebolt
```

**5. Build the App:**
Depending on the framework you're using, build your app for the iOS platform. For example, if you're using React Native:

```bash
npx react-native run-ios
```

This command will build and deploy your app to the iOS simulator.

**6. Connect iOS Device:**
If you're using a physical iOS device, connect it to your Mac computer via USB.

**7. Run the App:**
Once the app is built, you can run it on the iOS simulator or a physical iOS device using the following command (if you're using React Native):

```bash
npx react-native start
```

This starts the Metro bundler, which bundles your JavaScript code and serves it to your app.

**8. Monitor and Debug:**
You can monitor your app's output and debug it using the developer tools provided by your chosen framework or by using browser developer tools if your app runs in a WebView.


## Run App (User mode)

Soon
