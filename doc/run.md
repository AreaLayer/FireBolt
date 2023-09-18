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

Remember that the steps might vary depending on the specific framework you're using and any additional requirements of your app.

Keep in mind that running JavaScript apps on Android involves several components working together, so issues can arise at different stages. Be prepared to troubleshoot and refer to the documentation for the framework you're using for more specific guidance.


### Run App for PWA
