module.exports = {
    context: __dirname + '/app',
    entry: './app.js',
    output: {
        path: __dirname + '/app',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.html$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'raw-loader'
                }
            }
        ]
    }
};
