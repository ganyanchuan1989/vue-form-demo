// vue.config.js
module.exports = {
  // 选项...
  css: { extract: false },
  // 配置webpack
  configureWebpack: config => {
    // 开启分离js
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          default: false
          // vendor: {
          // test: /[\\/]node_modules[\\/]/,
          // name(module) {
          //   // get the name. E.g. node_modules/packageName/not/this/part.js
          //   // or node_modules/packageName
          //   const packageName = module.context.match(
          //     /[\\/]node_modules[\\/](.*?)([\\/]|$)/
          //   )[1];
          //   // npm package names are URL-safe, but some servers don't like @ symbols
          //   return `npm.${packageName.replace("@", "")}`;
          // }
          // }
        }
      }
    };
  }
};
