import webpack from 'webpack';
// Package path from npm
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  // prod tool option
  devtool: 'source-map',
  // entry points for application, can use to inject middleware into application
  entry: './src/index', //js entry point
  // bundling target configuration, bundling specifically for web
  target: 'web',
  // configuration for deployment of the webpack pundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Tell webpacks dev server where our code is
  devServer: {
    contentBase: './dist'
  },
  // Plugins for webpacks
  plugins: [
    //----------------------------------------------------------------------//
    // Occurrence order                                                     //
    // The plugin is no longer needed and occurrence order is on by default.//
    // https://gist.github.com/sokra/27b24881210b56bbaff7#occurrence-order  //
    //----------------------------------------------------------------------//
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  // Tell Webpacks the types of files we want to handle ... webapcks only knows how to handle js files natively
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: [{loader: 'babel-loader'}]},
      {test: /(\.css)$/, use: ExtractTextPlugin.extract('css?sourceMap')},
      {test: /(\.less)$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
      {test: /\.(woff|woff2)$/, use: ['url-loader?prefix=font/&limit=5000']},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=application/octet-stream']},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=image/svg+xml']}
    ]
  }
};
