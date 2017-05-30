const webpack = require('webpack');



module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  resolve: {
    root: __dirname,
    alias: {
      main: 'app/components/main.js',
      nav: 'app/components/nav.js',
      'applicationStyles': 'app/styles/app.scss',
      timer: 'app/components/timer.js',
      countdown: 'app/components/countdown.js'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }]
  },
  devTool: 'cheap-module-eval-source-map'
};
