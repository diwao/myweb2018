const webpack = require('webpack');

module.exports = {
  entry: {
    'app': ['./app/src/js/app.js']
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-map'
}
