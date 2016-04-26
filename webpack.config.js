const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: [
    './demo.js',
  ],
  output: {
    path: path.join(__dirname, './dist'),
    publicPath: "./dist",
    filename: 'demo.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "react-hot!babel"},
      {test: /\.styl$/, exclude: /node_modules/, loader: "style!css!postcss!stylus"}
    ]
  },
  postcss: [autoprefixer],
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./node_modules")]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-mover',
      filename: '../index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    })
  ]
}
