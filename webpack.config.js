
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/main",
    output: {
        path: 'prod',
        filename: "./bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            path: 'prod',
            title: 'My App',
            filename: 'index.html',
            template: 'src/index.html',
            hash: true
        })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }

}

