/* globals __dirname */
'use strict';

var Webpack     = require('webpack');
var HtmlWebpack = require('html-webpack-plugin');
var path        = require('path');

module.exports = {
    entry: [
        './app/bootstrap.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:9000'
    ],
    module: {
        loaders: [
            {
                test    : /\.(jsx|js)$/,
                loaders : ['babel', 'react-hot'],
                exclude : /node_modules/
            },
            {
                test    : /\.scss$/,
                loader  : 'style!css!autoprefixer!sass?outputStyle=nested&includePaths[]=' + path.resolve(__dirname, 'node_modules'),
                include : /scss/
            },
            {
                test   : /\.css$/,
                loader : 'style-loader!css-loader'
            }
        ]
    },
    output: {
        filename   : 'demo.js',
        path       : path.resolve(__dirname, 'build'),
        publicPath : '/'
    },
    resolve : {
        extensions : ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpack({
            template : './app/index.html'
        }),
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.optimize.OccurenceOrderPlugin()
    ]
};
