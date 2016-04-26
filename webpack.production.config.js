const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './lib'),
  entry: [
    './mover.js',
  ],
  externals: [{
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }],
  output: {
    path: path.join(__dirname, './'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'react-mover'
  },
  module: {
    loaders: [
      {test: /\.js?$/, exclude: /node_modules/, loader: "babel"}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
    })
  ]
}
