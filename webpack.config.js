const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { DefinePlugin, LoaderOptionsPlugin } = webpack
const { UglifyJsPlugin } = webpack.optimize;

const vue = {
  test: /\.vue$/,
  exclude: /node_modules/,
  use: {
    loader: 'vue-loader',
    options: {
      loaders: {
        stylus: ExtractTextPlugin.extract({
          use: ['css-loader', 'stylus-loader'],
          fallback: 'vue-style-loader'
        })
      }
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
        ['es2015', { modules: false }]
      ]
    }
  }
}

const pug = {
  test: /\.pug$/,
  use: {
    loader: 'pug-loader',
    options: {
      pretty: true
    }
  }
}

const image = {
  test: /\.(png|jpe?g|svg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '/img/[name].[ext]?[hash]'
      }
    },
    {
      loader: 'image-webpack-loader',
      options: {}
    }
  ]
}

const font = {
  test: /\.woff2?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '/font/[name].[ext]'
      }
    }
  ]
}

const config = {
  entry: './src/index.js',
  output: {
    filename: 'js/[name].js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [ vue, babel, pug, image, font ]
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
    new ExtractTextPlugin('./css/style.css'),
    new HtmlPlugin({
      template: 'src/view.pug',
      filename: 'index.html'
    })
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
      new LoaderOptionsPlugin({
        minimize: true
      }),
      new UglifyJsPlugin({
        sourceMap: false,
        compress: {
          warnings: false
        }
      })
    ])
  }

  return config
}
