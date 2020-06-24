const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const isDebug = true;

// var pxtorem = require('postcss-pxtorem');

module.exports = {
    mode:"development",
    /*入口*/
    entry: {
        index:path.join(__dirname, './src/index.js'),
        edit:path.join(__dirname, './src/edit.js')
    },
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/[name].[hash].js',           //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js',   //chunk生成的配置
        publicPath: "/"
    },
    devServer: {
        port: 8089,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        // host: '192.168.0.106'
        host: '127.0.0.1'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
         },{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                },{
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader"
                }],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        },{
             test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            loader: 'file-loader',
            query: {
            name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
            }
        }]
    },
    devtool: 'inline-source-map',
    resolve: {
        alias: {
            "$pages": path.join(__dirname, 'src/pages'),
            "$pagesMobile": path.join(__dirname, 'src/pages-mobile'),
            "$component": path.join(__dirname, 'src/component'),
            "$router": path.join(__dirname, 'src/router'),
            "$style": path.join(__dirname, 'src/style')
        }
    },
    plugins:[
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, "./src/assets/th.jpg"),  
            filename: "index.html",
            template: path.resolve(__dirname, "./src/index.html"),
            excludeChunks: ['edit']
        }),
        new HtmlWebpackPlugin({
            favicon:path.resolve(__dirname, "./src/assets/th.jpg"),
            filename: "edit.html",
            template: path.resolve(__dirname, "./src/edit.html"),
            excludeChunks: ['index']
        }),
        extractSass
    ]
};