import cookie from "js-cookie";

const TOKEN = "admin_token";
const USERNAME = "username";
const PASSFLAG = "rememberPassword";
const USERINFO = "userInfo";

// TOKEN
export function setToken(value) {
    return cookie.set(TOKEN, value)
}
export function getToken() {
    return cookie.get(TOKEN)
}
export function removeToken() {
    return cookie.remove(TOKEN)
}

// USERNAME
export function setUserName(value) {
    return cookie.set(USERNAME, value)
}
export function getUserName() {
    return cookie.get(USERNAME)
}
export function removeUserName() {
    return cookie.remove(USERNAME)
}

// PASSFLAG
export function setPassFlag(value) {
    return cookie.set(PASSFLAG, value)
    return cookie.set(PASSFLAG, value, { expires: 7 })
}
export function getPassFlag() {
    return cookie.get(PASSFLAG)
}
export function removePassFlag() {
    return cookie.remove(PASSFLAG)
}

// USERINFO
export function setUserInfo(val) {
    return cookie.set(USERINFO, val)
}