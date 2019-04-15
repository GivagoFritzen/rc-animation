const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: path.resolve('dist'),

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },

      {
        test: [/\.css$/],
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  }
}
