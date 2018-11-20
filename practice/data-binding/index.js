import Vue from 'vue'



new Vue({
    el: '#root',
    // template: `
    //     <div :id="aaa" @click="handleClick">
    //         <p v-html="html"></p>
    //     </div>
    // `,
    template: `
        <div 
            :class="[{active : !isActive}]"
            :style="[styles, styles2]"
        >
            <p v-html="html"></p>
            <p>{{getJoinedArr(arr)}}</p>
        </div>
    `,
    data: {
        isActive: false,
        arr: [1, 2, 3],
        html: '<span>456</span>',
        aaa: 'main',
        styles: {
            color: 'red',
            appearance:'none'
        },
        styles2: {
            color: 'block'
        }
    },
    methods: {
        handleClick() {
            alert('clicked')
        },
        getJoinedArr(arr) {
            return arr.join('-')
        }
    }
})