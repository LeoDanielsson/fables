const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackTemplate = require('html-webpack-template');

module.exports = {
    entry: ['./src/js/entry.jsx'],
    output: {
        path: './public',
        filename: 'fables.js',
        publicPath: '/'
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Fabel',
      template: htmlWebpackTemplate,
      appMountId: 'container',
      baseHref: '/',
      mobile: true
    })],
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
