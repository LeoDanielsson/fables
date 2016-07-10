var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', './src/js/entry.js'],
    output: {
        path: 'public',
        filename: 'fables.js'
    },
    plugins: [new HtmlWebpackPlugin({title: 'Fabel'})],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
                loader: "file?name=[name].[ext]"
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        port: 3003,
        contentBase: './public'
    }
};
