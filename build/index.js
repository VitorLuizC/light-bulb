const path = require('path')
const getPlugins = require('./webpack.plugins')
const getLoaders = require('./webpack.loaders')

/**
 * Environment.
 * @typedef {('development'|'production')} Environment
 */

/**
 * Gets the right configuration in the defined environment.
 * @param {Environment} env
 * @returns {webpack.Configuration}
 */
function getConfiguration(env) {
  /**
   * Defines default environment to 'development'.
   * @private
   */
  env = ['development', 'production'].includes(env) ? env : 'development'

  /**
   * Webpack configuration.
   * @type {webpack.Configuration}
   * @private
   */
  const configuration = {
    entry: {
      main: path.resolve(__dirname, '../src'),
      vendors: ['babel-polyfill']
    },
    output: {
      filename: 'js/[name].js',
      path: path.resolve(__dirname, '../dist')
    },
    resolve: {
      extensions: ['.js', '.vue']
    },
    module: {
      rules: getLoaders(env)
    },
    plugins: getPlugins(env),
    devtool: env === 'development' ? 'source-map' : false,
    performance: {
      hints: env !== 'development' ? 'warning' : false
    }
  }

  return configuration
}

module.exports = getConfiguration
