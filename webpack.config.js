const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const { extractStyle, rules } = require('./webpack.rules.js')
const { DefinePlugin, LoaderOptionsPlugin } = webpack
const { UglifyJsPlugin, CommonsChunkPlugin } = webpack.optimize;

const config = {
  entry: {
    main: './src/index.js',
    vendors: 'babel-polyfill'
  },
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, './dist')
  },
  module: { rules },
  plugins: [
    extractStyle,
    new HtmlPlugin({
      template: 'src/index.pug',
      filename: 'index.html'
    })
  ],
  performance: { hints: false },
  devtool: 'source-map'
}

/**
 * @param {string} env
 * @returns {Webpack.Configuration}
 */
module.exports = env => {
  const isProd = (env === 'production')

  if (isProd) {
    config.devtool = false
    config.plugins = (config.plugins || []).concat([
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      }),
      new CommonsChunkPlugin({
        name: 'vendors'
      })
    ])
  }

  return config
}
