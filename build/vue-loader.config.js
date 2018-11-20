// const docsLoader = require.resolve('./doc-loader')


module.exports = (isDev) => {
    return {
        preserveWhitepace: true,
        extractCSS:  !isDev,
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true,    //css类名转换为驼峰式
        },
        // hotReload: false,  //根据环境变量生成
        // loaders: {
        //     'docs': docsLoader,  //把docs的内容输出到组件的options上
        // },
        // preLoader: {
        // },
        // postLoader: {
        // }
    }
}