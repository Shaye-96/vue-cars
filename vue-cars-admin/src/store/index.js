import Vue from "vue";
import Vuex from "vuex";
import cookie from "js-cookie";

// Cookie
import {
    setToken,
    setUserName,
    setPassFlag,
    getToken,
    getUserName,
    getPassFlag
} from "@/utils/app";
// API
import { Login } from "@/api/login.js";

// 模块
import exampleModules from "./example.js"

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        // 存储基本数据

        // Aside 是否折叠
        isCollapseAside: JSON.parse(window.sessionStorage.getItem('isCollapseAside')) || false,
        // 用户信息
        token: getToken() || '',
        username: getUserName() || '',
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
        // 存储用户信息
        SET_TOKEN(state, value) {
            state.token = value
        },
        SET_USERNAME(state, value) {
            state.username = value
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
                        resolve(response);
                        // 存到 vuex 状态管理器
                        content.commit('SET_TOKEN', response.data.token);
                        content.commit('SET_USERNAME', response.data.username);
                        // 存到cookie
                        setToken(response.data.token);
                        setUserName(response.data.username);
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        }
        // 调用 详见 login 页面的 login()
    },
    modules: {
        // 模块化Vuex
        exampleModules
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