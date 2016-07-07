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
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg|mp3)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file'
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
