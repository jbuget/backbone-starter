var webpack = require('webpack');

module.exports = {
  entry: './test/test.js',
  output: {
    path: './build/test',
    filename: 'test.bundle.js'
  },
  module: {
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
  },
  node: {
    fs: 'empty',
    child_process: 'empty'
  }

};