module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@io': './src/store/io',
          '@reducers': './src/store/reducers',
          '@actions': './src/store/actions',
          '@containers': './src/containers',
          '@common': './src/common',
          '@elements': './src/components/elements',
          '@utils': './src/store/utils',
          '@helpers': './src/helpers',
          '@types': './src/store/types',
          '@screens': './src/components/screens',
          '@structures': './src/components/structures',
        },
      },
    ],
  ],
};
