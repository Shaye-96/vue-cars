import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/login",
    hidden: true,
    meta: {
        name: "登录"
    }
}, {
    path: "/login",
    name: "Login",
    component: Login,
    hidden: true,
    meta: {
        name: "登录"
    }
}, {
    path: "/home",
    name: "Home",
    meta: {
        name: "控制台"
    },
    component: Home,
    redirect: "/console",
    children: [{
        path: "/console",
        name: "Console",
        meta: {
            name: "首页"
        },
        component: () =>
            import ("../views/console/index.vue")
    }]
}, {
    path: "/info",
    name: "Info",
    meta: {
        name: "信息管理"
    },
    component: Home,
    children: [{
        path: "/consoleasd",
        name: "Console",
        meta: {
            name: "控制台"
        },
        component: () =>
            import ("../views/console/index.vue")
    }]
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;