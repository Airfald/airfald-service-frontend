const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(proxy('/api',{
        target:'https://xhmall-test.xiao100.com',
        secure:false,
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
 }
