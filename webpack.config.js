var HtmlWebpackPlugin = require('html-webpack-plugin');
var htmlWebpackTemplate = require('html-webpack-template');
var path = require('path');

function buildConfig(env) {
  var analytics = (env === 'prod') && {
    trackingId: 'UA-92249813-1',
    pageViewOnLoad: true
  };
  return {
    entry: ['./src/js/entry.jsx'],
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'fables.js',
        publicPath: ''
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Fabel',
      template: htmlWebpackTemplate,
      appMountId: 'container',
      baseHref: '/',
      mobile: true,
      googleAnalytics: analytics
    })],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
                query: {
                  presets: ['es2015', 'react'],
                  plugins: ['transform-object-rest-spread']
              }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3003,
        contentBase: './public',
        historyApiFallback: true
    }
  };
};

module.exports = buildConfig;
