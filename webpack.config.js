const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const CLIENT_DIR = path.resolve(__dirname, 'src', 'client');

module.exports = {
  entry: path.resolve(CLIENT_DIR, 'index.tsx'),
  devServer: {
    static: {
      directory: DIST_DIR, // Serve from dist
    },
    hot: true,
    open: true,
    historyApiFallback: true,
    port: 3000,
  },
  output: {
    path: DIST_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(m?js)$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        }
      },
      {
        test: /\.(png|jpg|gif|mp3|aac|ogg|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]'
        }
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ]
            }
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          'postcss-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(CLIENT_DIR, 'index.html'),
      filename: 'index.html',
      inject: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css'],
    alias: {
      '@': SRC_DIR,
    },
    modules: [
      'node_modules',
      SRC_DIR,
    ],
    fallback: {
      "crypto": false
    }
  },
}