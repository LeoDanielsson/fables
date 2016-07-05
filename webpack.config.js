var path = require('path');

module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'fables.js'
    },
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
            loader:'url?limit=10000&mimetype=application/font-woff'
          },
          {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file'
          },
          {
            test: /\.handlebars$/,
            loader: "handlebars-loader"
          }
        ]
    },
    devtool: 'source-map'
};
