const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy(['/api'], {
            target: 'https://xhmall-test.xiao100.com',
            changeOrigin: true,
            secure: false // https协议需要设置
        })
    )
}
