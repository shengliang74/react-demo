const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CheckerPlugin } = require('awesome-typescript-loader')

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const isProd = process.env.NODE_ENV == 'prod';
const isDebug = true;

module.exports = {
    /*入口*/
    entry: {
        index: ['babel-polyfill', path.join(__dirname, './src/index.js')]
    },
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: isProd ? 'js/[name].[chunkhash].js' : 'js/[name].js',           //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js',   //chunk生成的配置
        publicPath: "/"
    },
    module: {
        rules: [{
            test: /\.tsx?$/, loader: "awesome-typescript-loader"
        }, {
            test: /\.js(x?)$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "postcss-loader"
                }, {
                    loader: "sass-loader"
                }],
                // 在开发环境使用 style-loader
                fallback: "style-loader"
            })
        },{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        },{
            test: /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: '[name].[ext]?[hash]'
            }
        }, {
            test: /\.(eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
            loader: 'file-loader',
            query: {
                name: isDebug ? '[path][name].[ext]?[hash:8]' : '[hash:8].[ext]',
            }
        }, {
            test: /\.html$/,
            use: {
                loader: 'html-loader',
                options: {
                    attributes: {
                        list: [
                            {
                                tag: 'img',
                                attribute: 'src',
                                type: 'src',
                            },
                        ]
                    }
                }
            }
        }]
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", '.jsx'],
        alias: {
            "@": path.join(__dirname, './src'),
            "$pages": path.join(__dirname, './src/pages'),
            "$component": path.join(__dirname, './src/component'),
            "$router": path.join(__dirname, './src/router'),
            "$style": path.join(__dirname, './src/style')
        }
    },
    plugins: [
        new CheckerPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            favicon: path.resolve(__dirname, "./src/assets/th.jpg"),
            filename: "index.html",
            template: path.resolve(__dirname, "./src/index.html"),
            excludeChunks: ['edit']
        }),
        new HtmlWebpackPlugin({
            filename: "indexPc.html",
            template: path.resolve(__dirname, "./src/indexPc.html"),
        }),
        extractSass,
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2,
                },
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom|antd)[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
        // runtimeChunk: { name: "runtime" },


    },
};