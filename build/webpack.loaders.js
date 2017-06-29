const rucksack = require('rucksack-css')
const poststylus = require('poststylus')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Environment.
 * @typedef {('development'|'production')} Environment
 */

/**
 * Gets the right configuration in the defined environment.
 * @param {Environment} env
 * @returns {Array.<webpack.Rule>}
 */
function getLoaders(env) {
  const styleLoaders = [
    {
      loader: 'css-loader',
      options: {
        minimize: env === 'development' ? false : {
          autoprefixer: false
        }
      }
    },
    {
      loader: 'stylus-loader',
      options: {
        'include css': true,
        define: { env },
        use: poststylus(
          rucksack({ autoprefixer: true })
        )
      }
    }
  ]

  const vueLoadersOptions = {
    loaders: {
      stylus: ExtractTextPlugin.extract({
        publicPath: '../',
        use: styleLoaders,
        fallback: 'vue-style-loader'
      })
    }
  }

  const imageLoaders = [
    {
      loader: 'file-loader',
      options: {
        name: 'img/[name].[ext]'
      }
    }
  ]

  if (env !== 'development') {
    imageLoaders.push(
      {
        loader: 'image-webpack-loader',
        options: {
          verbose: true,
          progressive: true,
          optimizationLevel: 7,
          interlaced: false,
        }
      }
    )
  }

  /**
   * Webpack loaders.
   * @type {Array.<webpack.Rule>}
   * @private
   */
  const loaders = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: {
        loader: 'vue-loader',
        options: vueLoadersOptions
      }
    },
    {
      test: /\.woff2?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'font/[name].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(png|jpe?g|svg)$/,
      use: imageLoaders
    }
  ]

  return loaders
}

module.exports = getLoaders
