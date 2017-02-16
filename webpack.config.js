
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: "./src/main.ts",
    output: {
        path: 'prod',
        filename: "./bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'] // note if using webpack 1 you'd also need a '' in the array as well
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
                test: /\.tsx?$/,
                loader: 'babel-loader!ts-loader'
            }
        ]
    }
}

