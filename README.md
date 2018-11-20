# About
这是慕课网上[Vue+Webpack打造todo应用](https://www.imooc.com/learn/935)课程的源码

# 使用方法
```
git clone https://github.com/Jokcy/vue-todo-tech.git
```
进入项目目录，运行
```
npm install
```
然后执行
```
npm run dev
```
开始开发项目


#vue-loader
```
build/vue-loader.config.js
```
+ preserveWhitepace : true  template里面的空格去掉
+ extractCSS: true          vue文件中的css内容单独打包到一个文件中
+ hotReload: false          组建热重载功能
+ cssModules: {
            localIdentName: '[path]-[name]-[hash:base64:5]',   //生成唯一的class名字，类似于scoped
            camelCase: true,    //css类名转换为驼峰式
        },

vue-style-loader



# .eslintrc文件
安装包： 
```
npm i eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node -D

 npm i eslint-plugin-html -D    //识别.vue文件中的template

```
```
"parser": "babel-eslint"  //webpack和babel开发的项目会设置
```




# package.json
```
    "lint": "eslint --ext .js --ext .jsx --ext .vue client/"   //检验代码是否符合标准   client/表示检测client文件下的文件
    "lint-fix": "eslint --fix --ext .js --ext .jsx --ext .vue client/"    //自动修复lint的错误

```

```
    npm i eslint-loader babel-eslint -D    //
```

#webpack.config.base.js
```
modules-->rules:{
    {
        test: /\.(vue|js|jsx)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        enforce: 'pre'   //预处理  在对应loader处理前先进行eslint检测
      },
}
```




# bulid/template.html    
- 生成template模板    在webpack.config.practice.js中引入
```
new HTMLPlugin({
    template: path.join(__dirname, './template.html')
})
```