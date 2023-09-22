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

Please note that the specific steps may vary depending on the framework you're using and any additional requirements of your app. Running JavaScript apps on iOS involves several components working together, so be prepared to troubleshoot and refer to the documentation for the framework you're using for more specific guidance.

Certainly, here's a guide for running your Progressive Web App (PWA) in development mode:

## Run PWA (Dev Mode)

Running your Progressive Web App (PWA) in development mode. Here's a step-by-step guide:

**1. Install Required Software:**
Before you start, ensure you have the following software installed on your computer:

- Node.js: Required to run JavaScript code on your computer.
- A modern web browser (e.g., Google Chrome or Mozilla Firefox) with developer tools.

**2. Create Your PWA:**
Assuming you have your PWA code ready, make sure it follows the PWA guidelines for a reliable, installable, and engaging web app. Ensure your PWA is registered as a service worker to enable offline access and caching.

**3. Install Required Packages:**
Navigate to your project's root directory using a terminal or command prompt and install any necessary packages, such as a build tool or a development server if your project requires it. For instance:

```bash
npm install webpack-dev-server --save-dev
```

**4. Build and Serve Your PWA:**
Depending on your project setup, you may need to build your PWA for development. Use the appropriate build tool or bundler (e.g., Webpack, Parcel, or Rollup) and a development server to serve your PWA locally. Here's an example using webpack-dev-server:

```bash
npx webpack-dev-server --mode development
```

This command will build and serve your PWA on a local development server.

**5. Access Your PWA:**
Open your web browser and navigate to the address provided by your development server, typically `http://localhost:8080` or another port specified during setup.

**6. Monitor and Debug:**
Use the developer tools provided by your web browser to monitor your PWA's output, inspect elements, and debug JavaScript code. Pay attention to any errors or warnings in the console.

**7. Test on Mobile Devices:**
To ensure your PWA works well on mobile devices, use your mobile browser or a tool like the "Device Mode" in Chrome DevTools to simulate various mobile devices and screen sizes.

**8. Progressive Enhancement:**
Consider implementing progressive enhancement techniques to provide a seamless experience on a wide range of devices and network conditions.

Remember that the steps may vary depending on your specific project setup, build tools, and development server. Make sure your PWA adheres to best practices for web performance, security, and accessibility. Additionally, test your PWA on different browsers and devices to ensure compatibility and a smooth user experience.

### Run App for PWA
