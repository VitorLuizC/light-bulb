const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { DefinePlugin, optimize } = require('webpack')
const { UglifyJsPlugin, CommonsChunkPlugin } = optimize

/**
 * Environment.
 * @typedef {('development'|'production')} Environment
 */

/**
 * Gets plugins in the defined environment.
 * @param {Environment} env
 * @returns {Array.<webpack.Plugin>}
 */
function getPlugins(env) {
  /**
   * Webpack plugins.
   * @type {Array.<webpack.Plugin>}
   * @private
   */
  const plugins = [
    new ExtractTextPlugin('css/style.css'),
    new HtmlPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    })
  ]

  if (env !== 'development')
    plugins.push(
      new DefinePlugin({
        'process.env': {
          ENV: true
        }
      }),
      new CommonsChunkPlugin({
        name: 'vendors'
      }),
      new UglifyJsPlugin()
    )

  return plugins
}

module.exports = getPlugins
