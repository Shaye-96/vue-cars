import router from "./index";
import {
    getToken,
    removeToken,
    removeUserName
} from "../utils/app.js"

// 白名单
const whiteRouter = ['/login']
router.beforeEach((to, from, next) => {
    if (getToken()) {
        if (to.path === "/login") {
            removeToken();
            removeUserName();
        }
        next()
    } else {
        console.log('Token不存在', whiteRouter.indexOf('/login'))
        if (whiteRouter.indexOf(to.path) !== -1) {
            next()
        } else {
            next("/login")
        }
    }
})