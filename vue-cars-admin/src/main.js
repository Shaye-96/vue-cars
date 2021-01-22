import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// sha1 加密
import sha1 from "sha1";

// elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$sha1 = sha1
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");