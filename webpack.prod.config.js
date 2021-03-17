const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');
const env = require("./src/config/dev.env")
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "production",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            "process.env":env
        })
    ]
})