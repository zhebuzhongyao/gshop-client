module.exports = {
    //配置代理，这种方式更加灵活
    devServer: {
      proxy: {
          //请求地址以/api开头
        '/api': {
          target: 'http://localhost:4000',//转发的路径
          changeOrigin: true,//支持跨域
          pathRewrite: {//重写路径
            '^/api': '', // rewrite path
          },
        }
      }
    }
  }