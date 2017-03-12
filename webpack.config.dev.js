import webpack from 'webpack';
// Package path from npm
import path from 'path';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('development')
};

export default {
  // dev tool option
  devtool: 'cheap-module-eval-source-map',
  // entry points for application, can use to inject middleware into application
  entry: [
    'eventsource-polyfill', //neccessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note reloads the page if hot reloading fails
    './src/index' //js entry point
  ],
  // bundling target configuration, bundling specifically for web
  target: 'web',
  // configuration for deployment of the webpack pundle
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Tell webpacks dev server where our code is
  devServer: {
    contentBase: './src'
  },
  // Plugins for webpacks
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //Replace modules without having to do complete browser refresh
    new webpack.NoEmitOnErrorsPlugin(),  //Prevents errors from breaking hotreloading
    new webpack.LoaderOptionsPlugin({
      //Whether loaders should be in debug mode or not. debug will be removed as of webpack 3.
      debug: true
    }),
    new webpack.DefinePlugin(GLOBALS)
  ],
  // Tell Webpacks the types of files we want to handle ... webapcks only knows how to handle js files natively
  module: {
    rules: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), use: [{loader: 'babel-loader'}]},
      {test: /(\.css)$/, use: ['style-loader', 'css-loader']},
      {test: /(\.less)$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: ['file-loader']},
      {test: /\.(woff|woff2)$/, use: ['url-loader?prefix=font/&limit=5000']},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=application/octet-stream']},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: ['url-loader?limit=10000&mimetype=image/svg+xml']}
    ]
  }
};
