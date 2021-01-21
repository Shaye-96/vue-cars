import service from "@/utils/request.js"

/**
 * 获取验证码
 */
export function getVcode(data) {
    return service.request({
        method: 'post',
        url: '/getSms/',
        data
    })
}
/**
 * 登录
 */

/**
 * 注册
 */