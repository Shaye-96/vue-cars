import service from "@/utils/request.js"

/**
 * 获取验证码
 */
export function getVcode() {
    service.request({
        method: 'post',
        url: '/getSms/',
        data: {
            username: '1111111@qq.com',
            module: 'login'
        }
    })
}
/**
 * 登录
 */

/**
 * 注册
 */