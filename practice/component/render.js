import Vue from 'vue'

const childComponent = {
    template:`<div>child component: {{data.value}}</div>`,
    inject: ['yeye','data'],
    mounted(){
        console.log(this.yeye, this.value)
    }
}

const component = {
    components:{
        childComponent
    },
    // 具名插槽
    // template: `
    //     <div :style="style">
    //         <div class="header">
    //             <slot name="header"></slot>
    //         </div>
    //         <div class="body">
    //             <slot name="body"></slot>
    //         </div>
    //     </div>
    // `,

    // scoped slot 作用域插槽
    template: `
        <div :style="style">
            <slot :value="value" aaa="111"></slot>
            <child-component></child-component>
        </div>
    `,
    data(){
        return {
            style: {
                width: '200px',
                height: '200px',
                border: '1px solid #aaa'
            },
            value: 'component value'
        }
    }
}

new Vue({
    components:{
        CompOne: component
    },
    el: '#root',
    data(){
        return {
            value: '123'
        }
    },
    provide(){
        const data = {}
        
        Object.defineProperty(data, 'value' ,{
            get: () => this.value,
            enumerable: true
        })

        return {
            yeye: this,
            data
        }
    },
    mounted(){
        console.log(this.$refs.comp,this.$refs.span)
    },

    // 具名插槽
    // template: `
    //     <div>
    //         <comp-one>
    //             <span slot="header">this is header</span>
    //             <span slot="body">this is body</span>
    //         </comp-one>
    //     </div>
    // `,


    // scoped slot 作用域插槽
    template: `
        <div>
            <comp-one ref="comp">
                <span slot-scope="props" ref="span">{{props.value}} {{props.aaa}} {{value}}</span>
            </comp-one>
            <input type="text" v-model="value" />
        </div>
    `,
}) 