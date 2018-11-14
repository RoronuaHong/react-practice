import path from 'path'
import webpack from 'webpack'
import express from 'express'
import config from '../../webpack.dev.config.js'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
const opn = require('opn')

const HOST = '127.0.0.1'
const PORT = process.env.PORT || 7713
const app = express(),
    DIST_DIR = __dirname,
    HTML_FILE = path.join(DIST_DIR, './index.html'),
    compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}))

app.use(webpackHotMiddleware(compiler))

app.get('*', (req, res, next) => {
    res.sendFile(HTML_FILE, (err) => {
        if(err) {
            res.status(500).send(err)
        }
    })
})

app.listen(PORT, HOST, () => {
    opn(`http://${HOST}:${PORT}`, { app: 'google chrome' })
    console.log(`http://${HOST}:${PORT}`)
    console.log(`The app listening on port ${PORT}!\n`)
})