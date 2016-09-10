var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.hbs$/, loader: 'handlebars', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ],
  debug: true,
  devtool: 'eval',
  resolve: {
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  }
};