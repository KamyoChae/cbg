module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://jianghu.cbg.163.com/cgi/api/",
                changeOrigin: true,
                secure: false, // 如果是https接口，需要配置这个参数
                pathRewrite: {     // pathRewrite表示路径重写，key表示一个正则，value表示别名 
                    '^/api': ''   // 即用 '/api'表示'http://localhost:3000/api'
                }
            }
        }
    }
};