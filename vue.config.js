module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.97.33.178', //代理的目标
                changeOrigin: true //代理的时候是否要改变地址
            }
        }
    }
}