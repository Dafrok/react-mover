const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './src'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
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
      {test: /\.scss$/, exclude: /node_modules/, loader: "style!css!postcss!sass"}
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
      inject: true
    //   template: '../templates/index.html'
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
