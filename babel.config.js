module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@assets': './assets',
            '@config': './config',
            '@components': './src/components',
            '@contexts': './src/contexts',
            '@interfaces': './src/interfaces',
            '@navigation': './src/navigation',
            '@screens': './src/screens',
            '@services': './src/services',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
