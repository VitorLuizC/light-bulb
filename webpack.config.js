const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { optimize, DefinePlugin, LoaderOptionsPlugin } = require('webpack')

const vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use: {
    loader: 'vue-loader',
    options: {
      stylus: ExtractTextPlugin.extract({
        use: 'css-loader',
        fallback: 'vue-style-loader'
      })
    }
  }
}

const babel = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        [
          'es2015',
          {
            modules: false
          }
        ]
      ]
    }
  }
}

const image = {
  test: /\.(png|jpe?g|svg)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '/img/[name].[ext]?[hash]'
      }
    },
    'image-webpack-loader'
  ]
}

const font = {
  test: /\.woff2?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '/font/[name].[ext]?[hash]'
      }
    }
  ]
}

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, './dist'),
    publicPath: path.join(__dirname, './dist')
  },
  module: {
    rules: [ vue, babel, image, font ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    compress: true,
    port: 9000
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ],
  performance: { hints: false },
  devtool: '#source-map'
}

/**
 * @param {string} env
 * @returns {Webpack.Configuration}
 */
module.exports = env => {
  if (env === 'production') {
    config.devtool = false
    config.plugins = (config.plugins || []).concat([
      new DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new optimize.UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      }),
      new LoaderOptionsPlugin({
        minimize: true
      })
    ])
  }

  return config
}
