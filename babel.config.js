module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', "module:metro-react-native-babel-preset"],
    plugins: ["nativewind/babel", ["babel-plugin-inline-import",
    {
      "extensions": [".svg"]
    }
  ]], 
  };
};
