const path = require('path');
const cssNext = require('postcss-cssnext');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/app'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /(?!spec)(\.js$)/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        test:   /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader?sourceMap=inline'
        ]
      }
    ]
  },
  postcss: function () {
    console.log(__dirname + '/dist');;;;;;;;;;;;;;;;;;;;;
    return [cssNext];
  }
};
