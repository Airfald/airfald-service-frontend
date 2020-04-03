/*
 * @Author: ouhefu
 * @Date: 2020-03-16 18:33:15
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-02 18:57:58
 * @Description:
 */
import axios from "axios";
import { message } from "antd";
import Storage from 'utils/storage'

// https://www.kancloud.cn/yunye/axios/234845
const request = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
  transformResponse: [function (data: { message, data, code }): { message, data, code } {
    return data
  }]
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  let token = Storage.get('token');
  config.headers['Authorization'] = token;

  return config;
}, function (error) {
  console.error(error);
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response: { data: any }) {
  // console.log('统一处理 res ', response)
  let { data } = response
  data = JSON.parse(data);

  if (!data) {
    return false;
  }

  // token 验证失败 跳回登录页面
  if (data.code === 10010) {
    window.location.href = 'http://localhost:3001/login'
    return false
  }

  if (data.code !== 0) {
    message.error(data.message)
    return false
  }

  return data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request;
