import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";
// import User from "../views/user/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Index",
    component: Index,
    children: [{
        path: "/user",
        name: "User",
        component: () =>
            import ("../views/user/index.vue")
    }, {
        path: "/safe",
        name: "Safe",
        component: () =>
            import ("../views/safe/index.vue")
    }, {
        path: "/password",
        name: "Password",
        component: () =>
            import ("../views/password/index.vue")
    }]
}];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;