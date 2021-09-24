const Webpack = require('webpack') 
const WebpackDevServer = require('webpack-dev-server')

const webpackConfig = require('./webpack.config')
const compiler = Webpack(webpackConfig)

const PORT = 3008

const devServer = new WebpackDevServer({
    bonjour: true,
    compress: true,
    port: PORT,
}, compiler)

devServer.startCallback(() => {
    console.log('webpack dev server on http://localhost:3008')
})