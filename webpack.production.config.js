const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './lib'),
  entry: [
    './mover.js',
  ],
  output: {
    path: path.join(__dirname, './'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "babel"}
    ]
  }
}
