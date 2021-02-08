/**
 * axios 拦截器
 */
import axios from 'axios';
import {
  Message
} from 'element-ui';

const BASEURL = process.env.NODE_ENV === "produce" ? "" : "/devApi";
console.log(BASEURL)
  // 创建axios实例对象
const service = axios.create({
  baseURL: BASEURL,
  timeout: 15000
});

// 添加请求拦截器，请求接口前做一些数据处理
service.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // 根据业务需求添加一些参数 
  return config;
}, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器，对响应数据进行操作
service.interceptors.response.use(function(response) {
  // response 是响应回来的数据对象
  let data = response.data
  if (data.resCode !== 0) {
    // 当前接口错误
    Message.error(data.message)
    return Promise.reject(data);
  } else {
    // return response;
    return Promise.resolve(data);
  }
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default service
/**
 * 不可能存在两个default
 */


/**
 * process.env.NODE_ENV 获取当前模式
 * VUE_APP_TEST_DATA 自定义环境变量 VUE_APP_ 必须
 * .env.development 开发模式时加载
 * .env.production 生产模式时加载
 */
console.log(process.env.VUE_APP_TEST_DATA)
console.log(process.env.NODE_ENV)