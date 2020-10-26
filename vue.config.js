module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? ''
        : '/',
    configureWebpack: {
        devtool: 'source-map'
    },
    //test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    //loader: 'url-loader',
    //options: {
    //    limit: 10000,
    //    name: utils.assetsPath('img/[name].[hash:7].[ext]')
    //}

}


