import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 存储基本数据
        isCollapseAside: JSON.parse(window.sessionStorage.getItem('isCollapseAside')) || false,
        // 例子
        count: 10
    },
    getters: {
        // 类似与计算属性
        count: state => state.count + 10, // 不会改变state.count 的值，通过state 和 getters 取到是值不一样
    },
    mutations: {
        // 同步，更改 state 里面变量的值
        SET_COLLAPSE(state) {
            state.isCollapseAside = !state.isCollapseAside
            window.sessionStorage.setItem('isCollapseAside', JSON.stringify(state.isCollapseAside))
        },
        SET_COUNT(state, value) {
            state.count = value
        }
    },
    actions: {
        // 异步，类似mutation
        // 1. 处理同步操作
        example(content, val) {
            console.log('默认参数content', content, '传入值', val)
            content.commit(SET_COUNT)
        },
        // 2. 异步，接口A、B，B接口需要A接口的参数 
        login(content, requestData) {
            return new Promise((resolve, reject) => {
                Login(requestData)
                    .then(response => {
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
        // 调用 this.$store.dispatch(login,requestData).then(res=>{ 请求接口 B }).catch(err=>{})
    },
    modules: {
        // 模块化Vuex
    }
});
/**
 * state 存储基本数据类型，取值方式有两种
 * 1> 直接获取 this.$store.state.isCollapseAside
 * 2> 通过getter获取 this.$store.getters.isCollapseAside
 * 
 * mutations 更改 state 里面变量的值  调用 this.$store.commit('SET_COUNT', 100)
 * 
 * actions 调用 this.$store.dispatch(actionName)
 * 1. 通过异步进行同步操作，视图触发action，action再触发mutation
 * 2. 多用于处理业务代码，异步请求
 */

/**
 * 缓存
 * sessionStorage临时，localStorage长期：5M
 * cookie
 */