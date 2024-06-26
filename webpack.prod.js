const { merge } = require('webpack-merge');
var webpack = require('webpack')
var path = require('path')
var common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        filename: '[name].min.js',
        path: path.resolve(__dirname, 'build'),
        library: 'opensheetmusicdisplay',
        libraryTarget: 'umd'
    },
    mode: 'production',
    optimization: {
        minimize: true
        // splitChunks: {
        //     chunks: 'all',
        //     name: false
        // }
    },
    plugins: [
        // build optimization plugins
        new CleanWebpackPlugin({
            verbose: false,
            dry: false,
            cleanOnceBeforeBuildPatterns: ['**/*', '!statistics.html*']
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true
        })
    ]
})
