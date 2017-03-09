import webpack from 'webpack';
// Package path from npm
import path from 'path';

export default {
  // so we can see debug info
  debug: true,
  // dev tool option
  devtool: 'cheap-module-eval-source-map',
  // Webpack displays list of files it's bundling
  noInfo: false,
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
    path: __dirname + '/dist', //Note: Physical files are only output by the production build task 'npm run build'
    publicPath: '/',
    filename: 'bundle.js'
  },
  // Tell webpacks dev server where aour code is
  devServer: {
    contentBase: './src'
  },
  // Plugins for webpacks
  plugins: [
    new webpack.HotModuleReplacementPlugin(), //Replace modules without having to do complete browser refresh
    new webpack.NoErrorsPlugin()  //Prevents errors from breaking hotreloading
  ],
  // Tell Webpacks the types of files we want to handle ... webapcks only knows how to handle js files natively
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}, // compile javascript with babel
      //for css
      {test: /(\.css)$/, loaders: ['style', 'css']},
      //and for LESS
      {test: /(\.less)$/, loaders: ['style', 'css', 'less']},
      // recommended settings for font files
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }

};
