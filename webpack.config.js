const webpack = require('webpack')
const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

const { NODE_ENV }  = process.env

module.exports = {
  mode: NODE_ENV,
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: NODE_ENV === 'development' 
      ? '/' 
      : './',
    clean: true,
  },
  resolve: { 
    extensions: ["*", ".js", ".jsx"],
    alias: {
      Darkpanda: path.resolve(__dirname, 'src')

    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new WebpackManifestPlugin(),

    new HtmlWebpackPlugin({
      title: 'darkpanda',
      template: path.resolve(__dirname, './index.html'),
    }),
    
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ], 

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}