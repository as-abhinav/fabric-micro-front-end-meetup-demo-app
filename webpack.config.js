const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');

const isProd = process.env.NODE_ENV === 'production';
// console.log(isProd, process.env.NODE_ENV);
const mode = () => (isProd ? 'production' : 'development');
const enableDevTools = () => (isProd ? 'none' : 'source-map');

const env = dotenv.config().parsed;

// const getEnvKeys = env => {
//   const envKeys = Object.keys(env).reduce((prev, next) => {
//     prev[`process.env.${next}`] = JSON.stringify(env[next]);
//     return prev;
//   }, {});

//   return envKeys;
// };

module.exports = {
  mode: mode(),
  entry: {
    main: './index.js'
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    },
    modules: [path.resolve(__dirname, 'node_modules')]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'API_KEY',
      'AUTH_DOMAIN',
      'DB_URL',
      'PROJECT_ID',
      'STORAGE_BUCKET',
      'MESSAGING_SENDER_ID'
    ]),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      // favicon: '/images/favicon.png',
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      template: './template/index.html'
    }),
    new CopyPlugin([{ from: './images', to: './images' }])
  ],
  devtool: enableDevTools(),
  devServer: {
    historyApiFallback: true
  }
};
