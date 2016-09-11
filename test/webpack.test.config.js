module.exports = {
  entry: './test/test.js',
  output: {
    path: './build',
    filename: 'test.bundle.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.css$/, loader: "null" },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.hbs$/, loader: 'handlebars', exclude: /node_modules/ }
    ]
  },
  target: 'node',
  devtool: 'source-map-support',
  resolve: {
    alias: {
      'handlebars': 'handlebars/dist/handlebars.js'
    }
  }
};