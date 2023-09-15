const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@components': './src/components',
      '@utils': './src/utils',
    },
    sourceExts: ['js', 'ts', 'tsx', 'svg', 'json'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
