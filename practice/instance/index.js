import Vue from 'vue'


const app = new Vue({
    // el:'#root',
    template: '<div>{{text}} {{obj.a}}</div>',
    data: {
        text: 0,
        obj: {}
    },
    // watch: {
    //     text(newText,oldText){
    //         console.log(`${oldText} : ${newText}`)
    //     }
    // }
})


app.$mount('#root'); //挂在到html上  相当于 el:'#root'


// let i = 0;
setInterval(() => {
    // i++
    // app.text += 1;
    // app.text += 1;
    // app.text += 1;
    // app.text += 1;
    // app.text += 1;
    // app.text += 1;
    /*
    app.obj.a = i
    app.$forceUpdate() //强制组件重新渲染
    */
    // app.$set(app.obj, 'a', i) //效果相当于上面的两句
    //options 里面的data通过vue在初始化对象时被修改过，与$options.data不是同一个对象，所以修改不起作用
    // app.$options.data.text += 1

    // app.$data.text += 1   //挂载在vue实例根对象上的text与$data上的text是同一个属性 代理到$data上
}, 1000)


// console.log(app.$data)
// console.log(app.props)
// console.log(app.$el)        //html节点的引用
// console.log(app.$options)       //new Vue 对象里面的所有配置项
// app.$options.render = (h) => {
//     return h('div', {} , 'new render function')      //有值重新渲染时才会生效
// }

// console.log(app.$root)                          //vue实例
// console.log(app.$root === app)                  //true
// console.log(app.$children)
// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)
// console.log(app.$isServer)                          //服务端渲染时



// 方法


// watch
// // watch  相当于 在vue实例中的watch
// const unWatch = app.$watch('text',(newText,oldText) => {
//     console.log(`${newText} : ${oldText}`)
// })
// //销毁watch    -----  通过$watch创建的watch 必须要手动销毁，
// setTimeout(() => {
//     unWatch()
// },2000)



// 事件监听
// app.$on('test', (a, b) => {
//     console.log(`test emited ${a} ${b}`)
// })
// app.$once('test', (a, b) => {
//     console.log(`test emited ${a} ${b}`)
// })
// setInterval(()=>{
//     app.$emit('test', 1, 2)
// },1000)

// app.$forceUpdate()           //强制组件渲染