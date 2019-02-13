import Vue from "vue";
export default Vue.extend({
    template: `
        <div>
        <input type="number" v-model="a">
        <select name="s"  @change=selectType>
            <option :value="option.type" v-for="option in options"> {{option.type}} </option>
        </select>
        <input type="number" v-model="b"> 
        <span>=</span>
        <span>{{result}}</span>
        <input type="button" value='计算' @click="caculate">
        </div>
    `,
    created() {
        this.type = this.options[0].type;
    },
    // 注意:在子组件,这里不能写data字段,需要是data()方法
    data() {
        return {
            result: 0,
            a: 0,
            b: 0,
            type: '+',
            options: [
                {
                    type: '+',
                    name: "加"
                },
                {
                    type: '-',
                    name: "减"
                },
                {
                    type: '*',
                    name: "乘"
                },
                {
                    type: '/',
                    name: "除"
                }
            ]
        }
    },
    methods: {
        // 计算
        caculate() {
            switch (this.type) {
                case '+':
                    this.result = parseFloat(this.a) + parseFloat(this.b);
                    break;
                case '-':
                    this.result = parseFloat(this.a) - parseFloat(this.b);
                    break;
                case '*':
                    this.result = parseFloat(this.a) * parseFloat(this.b);
                    break;
                case '/':
                    this.result = parseFloat(this.a) / parseFloat(this.b);
                    break;
            }
        },
        selectType(target) {
            this.type = target.target.value;
        }
    }
})