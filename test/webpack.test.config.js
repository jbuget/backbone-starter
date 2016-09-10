module.exports = {
  entry: './test/test.js',
  output: {
    path: './tmp',
    filename: 'test.bundle.js'
  },
  module: {
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