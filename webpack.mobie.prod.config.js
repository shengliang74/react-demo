const common = require('./webpack.common.js');
const {merge} = require('webpack-merge');



module.exports = merge(common, {
    /*入口*/
    entry: {
        index: ['babel-polyfill', path.join(__dirname, './src/index.js')]
    },
    mode: "production",
    devtool: 'source-map',
    
})