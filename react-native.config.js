module.exports = {
  assets: ['./assets/fonts'], // Add custom font assets to be linked
  dependencies: {
    // Add native module dependencies here
    'react-native-maps': {
      platforms: {
        android: null, // disable Android platform linking
      },
    },
  },
  project: {
    ios: {},
    android: {},
  },
};

