module.exports = {
  mode: 'development',
  entry: {
    app: ['./app/src/ts/app.ts']
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.webpack.js', '.web.js', '.js']
  }
};

if (process.env.NODE_ENV !== 'production') {
  module.exports.devtool = 'inline-source-map';
}
