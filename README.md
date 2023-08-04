# FireBolt ⚡

[![Node.js Package](https://github.com/AreaLayer/FireBolt/actions/workflows/npm-publish.yml/badge.svg?branch=main)](https://github.com/AreaLayer/FireBolt/actions/workflows/npm-publish.yml)

App wallet for Android  and iOs with Nostr, HyperCore, Nostr, Lightning Network, TBD, CoinJoin and PayJoin

<p align="center">
  <a href="https://github.com/AreaLayer/FireBolt" title="AreaLayer">
    <img alt="FireBolt" src="./src/assets/firebolt_logo_readme.png" width="150"></img>
  </a>
</p>

<h3 align="center">FireBolt</h3>


---

**⚠️ Alpha software may put your money at risk.**

**⚠️ We recommend using only small amounts.**

 Android - Download latest APK (Soon)

iPhone - Download latest TestFlight app (Soon)

---
## Overview

Save your self sovereign

Firebolt is a wallet designed by a Bitcoiner for Bitcoiners looking for privacy using Payjoin, Lightning Network, Coinjoin, Bitcoin, Hypercore, Nostr and TBD

Each individual has their own identity using Nostr or TBD according to their preference

## The problem

Central Banks, inflations and cetralized social media

## Firebolt's solution

Firebolt offers a Bitcoin wallet that supports both on-chain and lightning transactions. The application runs a custom, non-routing Lightning node created with the Lightning Development Kit on the user's mobile phone. By default, you connect to Area Layer's Electrum-Bitcoin Core server, but you can also connect to your own server. We onboard users to Lightning through our lightning service provider (LSP) Timelight.

Users can back up their Bitcoin and Lightning keys with a standard BIP-39 seed and optional password. Lightning channels data is only saved in our sever if you use our Lightning Node, if not we'll not save your lightning channel data

The other main features Firebolt supports are as follows:

📱 Contact list via Npub or DID

🪙 Payments via Lightning Network

⚛️ Coinjoin and Payjoin for privacy

## Feature

- Lightning Network (LND/LDK/CLN/Greenlight)

- Nostr

- Bitcoin

- HyperCore 

- TBD

- LSP

- CoinJoin 

- Multisig 

- PayJoin

- Bitcoin-only

- Backup using Nostr keys and BIP-39

- Management Nostr Keys

- Contact list via Nostr (NPub) and DID (Web 5)

## Roadmap

- [ ] Mainnet

- [X] Testnet

- [X] CoinJoin Fee

- [x] LSP

- [x] LDK integration 

- [x] GreenLight integration

- [X] LND integration

- [X] Taproot, Segwit and Legacy

- [x] Multisig

- [x] Miniscript

- [x] CoinJoin Algorithm powered by CoinJoinXT

- [x] CoinSwap implementation for privacy during mixing

- [x] Coin Select

- [x] UI/UX

- [x] TBD 

- [x] PayJoin (BIP-78) integration beta (WIP)

- [x] Seed via BIP-32

- [x] Contact List

- [x] Backup via BIP-39 via Nostr and Hypercore

- [x] Nostr client 

- [ ] Beta app

- [ ] PWA

## Run App (Dev Mode)

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

## Contribution

[Check the details here](https://github.com/AreaLayer/FireBolt/blob/main/CONTRIBUTING.md)
