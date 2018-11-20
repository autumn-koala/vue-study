import Vue from 'vue';


const app = new Vue({
    // el: "#root",
    template: '<div>{{text}}</div>',
    data: {
        text: 0
    },
    beforeCreate() {
        console.log(this.$el, 'beforeCreate')       //undefined "beforeCreate"
    },

    //跟数据有关的可以放在created里面或者mounted
    created() {
        console.log(this.$el, 'created')        //undefined "created"
    },
    beforeMount() {
        console.log(this.$el, 'beforeMount')        // <div id="root"></div> "beforeMount"
    },

    //跟dom有关的放在mounted中 跟数据有关的可以放在created里面或者mounted
    mounted() {
        console.log(this.$el, 'mounted')        //<div>0</div> "mounted"
    },
    beforeUpdate() {
        console.log(this, 'beforeUpdate')
    },
    updated() {
        console.log(this, 'updated')
    },
    activated() {       //在组件章节讲解
        console.log(this, 'activated')
    },
    deactivated() {     //在组件章节讲解
        console.log(this, 'deactivated')
    },
    beforeDestroy() {
        console.log(this, 'beforeDestroy')
    },
    destroyed() {
        console.log(this, 'destroyed')
    },
})

app.$mount('#root') //beforeMount、mounted在节点挂载后执行
// setInterval(() => {
//     app.text = app.text += 1        //beforeUpdate、updated在数据更新时执行
// },1000)

// setTimeout(() => {
//     app.$destroy()      //组件销毁  beforeDestroy、destroyed组件销毁时执行
// }, 1000);