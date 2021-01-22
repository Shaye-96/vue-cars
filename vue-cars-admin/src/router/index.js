import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";
import Login from "../views/login/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    redirect: "/login",
    hidden: true
}, {
    path: "/login",
    name: "Login",
    component: Login,
    hidden: true
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
        hidden: true,
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