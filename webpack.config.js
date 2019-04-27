module.exports = {
  mode: 'development',
  entry: {
    'app': ['./app/src/js/app.js']
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval-source-map'
}
