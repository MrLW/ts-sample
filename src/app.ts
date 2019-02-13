import Vue from 'vue';
import MyCaculate from './Caculate';
new Vue({
    el: "#app",
    template: `
       <my-caculate></my-caculate>
    `,
    components:{
        MyCaculate
    }
})