const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/'
    },
    target: 'web',
    devtool: '#source-map',
    resolve: {
        extensions: [".js", ".css", ".scss", ".png", ".jpg", ".jpeg", ".gif"]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.(png|jpg|jpeg|gif|ico)$/i,
            use: {
                loader: 'url-loader'
            }
        }]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            excludeChunks: ['server']
        })
    ]
}