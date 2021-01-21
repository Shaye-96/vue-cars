/**
 * 过滤特殊字符串
 */
export function stripscript(s) {
    let pattern  =  new  RegExp("[`~!@#$%^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）& ;—|{}【】‘；：”“'。，、？]");    
    let rs  =  "";    
    for (let i = 0;  i  <  s.length;  i++) {
        rs  =  rs  +  s.substr(i,  1).replace(pattern,  '');        
    }    
    return  rs;    
}

/**
 * 校验用户名
 */
export function checkUsername(name) {  
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/; 
    return reg.test(name) ? false : true
}
/**
 * 校验密码
 */
export function checkPassword(password) {  
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return reg.test(password) ? false : true
}
/**
 * 校验验证码
 */
export function checkVcode(code) {  
    let reg = /^[a-z0-9]{6}$/;
    return reg.test(code) ? false : true
}