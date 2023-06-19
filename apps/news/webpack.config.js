
// const { withModuleFederation } = require('@nx/angular/module-federation');
// const config = require('./module-federation.config');
// module.exports = withModuleFederation(config);


const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4203/',
    uniqueName: 'news',
  },
  optimization: {
    runtimeChunk: false,
    splitChunks: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'news',
      library: { type: 'var', name: 'news' },
      filename: 'remoteEntry.js',
      exposes: {
        NewsModule: './apps/news/src/app/news/news.module.ts',
      },
      shared: {
        '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true },
      },
    }),
  ],
};
