/* eslint-disable @typescript-eslint/no-var-requires */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        processNestedWorklets: true,
      },
    ],
    ['react-native-worklets-core/plugin'],
  ],
};