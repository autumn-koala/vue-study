import Vue from 'vue'


const data = {
    text: 0
}
const component = {
    template: `
    <div>
        <input type="text" v-model.number="text" />
    </div>
    `,
    data() {
        return data
    }
}

// Vue.component('CompOne',component)      //全局注册组件

new Vue({
    components: {
        CompOne: component
    },
    el: '#root',
    template: `
        <div>
            <comp-one></comp-one>
            <comp-one></comp-one>
        </div>
    `
})