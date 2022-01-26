module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '^~/(.+)': './src/\\1',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
