module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: __dirname,
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
          }
        ]
    },
    devtool: 'source-map'
};
