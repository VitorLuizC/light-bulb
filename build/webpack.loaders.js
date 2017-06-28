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
  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: env === 'development' ? false : {
        autoprefixer: false
      }
    }
  }

  const vueLoadersOptions = {
    loaders: {
      stylus: ExtractTextPlugin.extract({
        publicPath: '../',
        use: [cssLoader, 'stylus-loader'],
        fallback: 'vue-style-loader'
      })
    }
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
      test: /\.pug$/,
      use: {
        loader: 'pug-loader',
        options: {
          pretty: env === 'development',
          doctype: 'html'
        }
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
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'img/[name].[ext]'
          }
        }
        // , https://github.com/tcoopman/image-webpack-loader/issues/98
        // 'image-webpack-loader'
      ]
    }
  ]

  return loaders
}

module.exports = getLoaders
