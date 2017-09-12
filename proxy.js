module.exports = {
    '/api': {
        target: 'http://news-at.zhihu.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        }
    }
};