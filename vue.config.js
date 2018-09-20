const webpack = require('webpack')

module.exports = {
  chainWebpack: (chain) => {
    chain
      .plugin('define')
      .use(webpack.DefinePlugin, [{ 'process.env.HOST': JSON.stringify('https://example.com') }])
  }
}
