const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: 8089,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        // host: '192.168.0.106'
        host: '127.0.0.1'
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})