var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/entry.jsx'],
    output: {
        path: 'public',
        filename: 'fables.js'
    },
    plugins: [new HtmlWebpackPlugin({
      title: 'Fabel',
      template: require('html-webpack-template'),
      appMountId:"container"
    })],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            },
            {
              test: /.jsx?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                presets: ['es2015', 'react'],
                plugins: ["transform-object-rest-spread"]
              }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3003,
        contentBase: './public'
    }
};
