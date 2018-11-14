const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    entry: {
        main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/app.js']
    },
    output: {
        filename: '[name].js'
    },
    mode: 'development',
    module: {
        rules: [
        //     {
        //     enforce: 'pre',
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: 'eslint-loader',
        //     options: {
        //         emitWarning: true,
        //         failOnError: false,
        //         failOnWarning: false
        //     }
        // },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                    //options: { minimize: true }
                }
            ]
        },
        {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    },
    devServer: {
        host: '0.0.0.0',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
})