var webpack = require('webpack');

module.exports = {
  output: {
    path: '../build',
    filename: 'test.bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.hbs$/, loader: 'handlebars', exclude: /node_modules/ }
    ]
  },
  debug: true,
  devtool: 'source-map',
  resolve: {
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  }
};