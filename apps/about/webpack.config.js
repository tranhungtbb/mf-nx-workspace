// const { withModuleFederation } = require('@nx/angular/module-federation');
// const config = require('./module-federation.config');
// module.exports = withModuleFederation(config);


const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4201/',
    uniqueName: 'mdmfabout',
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'about',
      library: { type: 'var', name: 'about' },
      filename: 'remoteEntry.js',
      exposes: {
        AboutModule: './apps/about/src/app/about/about.module.ts',
      },
      shared: {
        '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true },
      },
    }),
  ],
};
