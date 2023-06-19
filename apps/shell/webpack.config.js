const { withModuleFederation } = require('@nx/angular/module-federation');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require('../../package.json').dependencies;


// use nx/angular/module-federation

// module.exports = withModuleFederation({
//     ...config,
//     remotes: [
//         ['about', 'http://localhost:4201']
//     ],
//     library : [
//         {
//           "@fast-food-app/share": {
//             "singleton": true,
//             "import": "libs/share/src/index.ts"
//         },
//       }]
// });

// use webpack module-federation
module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'shell',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true },
        '@fast-food-app/share': {
            singleton : true,
            import : 'libs/share/src/index.ts'
        },
      }
    })
  ],
};