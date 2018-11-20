import Vue from 'vue'

new Vue({
    el: '#root',
    template: `
        <div>
            <p>Name : {{name}}</p>
            <p>Name : {{getName()}}</p>
            <p>Number : {{number}}</p>
            <p>FullName:{{fullName}}</p>
            <p><input type="text" v-model="number" /></p>
            <p>FirstName: <input type="text" v-model="firstName" /></p>
            <p>LastName: <input type="text" v-model="lastName" /></p>
            <p>Name: <input type="text" v-model="name" /></p>


        </div>
    `,
    data: {
        firstName: '史',
        lastName: '锞锞',
        number: 0,
        fullName: ''
    },
    //
    computed: {
        // name() {
        //     console.log('name')
        //     return `${this.firstName} ${this.lastName}`
        // }
        name: {
            get() {
                console.log('name')
                return `${this.firstName} ${this.lastName}`
            },
            set(name) {
                const names = name.split(' ');
                this.firstName = names[0],
                    this.lastName = names[1]
            }
        }
    },
    watch: {
        // firstName(newName, oldName) {
        //     this.fullName = newName + ' ' + this.lastName
        // },
        firstName: {
            handler(newName, oldName) {
                this.fullName = newName + ' ' + this.lastName
            },
            immediate: true,    //会立即执行
            deep:true,
        }

    },
    methods: {
        getName() {
            console.log('getName')
            return `${this.firstName} ${this.lastName}`
        }
    }
})