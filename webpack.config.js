// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: './src/app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: path.resolve(__dirname, 'public'),
        filename: 'bundle-[name].js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
