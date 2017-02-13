



var HtmlWebpackPlugin = require('html-webpack-plugin');
//const Webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//require("./src/main.css");
//var extractCSS = new ExtractTextPlugin('./src/main.css');

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
                exclude: /\/node_modules\//,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }





}

