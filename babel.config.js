module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          /**
           * Regular expression is used to match all files inside `./src` directory and map each `.src/folder/[..]` to `~folder/[..]` path
           */
          '@Auth': './src/modules/Auth/',
          '@Home': './src/modules/Home/',
          '@commons': './src/commons/',
          '@components': './src/components/',
          '@redux': './src/redux/',
          '@assets': './src/assets/',
          '@baseUrl': './src/baseUrl.js',
        },
      },
    ],
  ],
};
