import axios from "axios";
import qs from "qs";

// https://www.kancloud.cn/yunye/axios/234845
const request = axios.create({
  baseURL: '/api',
  timeout: 5000
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  console.log('test', process.env);
  console.log('test', config);
  console.log('test', request);
  config.headers['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJkYXRhIjoie1wiYWNjb3VudFwiOlwiaHVhbmdndWFubGlcIixcImNvbnRhY3ROdW1iZXJcIjpcIjE1ODIwMjk2NzE5XCIsXCJjcmVhdGVUaW1lXCI6MTQ4NzcyOTYwNzAwMCxcImVtcGxveWVlTm9cIjpcIlgyMTQxMlwiLFwiaXNEZWxldGVcIjowLFwibmFtZVwiOlwi5YiY5pi-5rSBXCIsXCJub1wiOlwiVVNFMDAwMDAxODA4NFwiLFwib3JnTm9cIjpcIk9SRzAwMDAwMDAwMTIyN1wiLFwic2V4XCI6MCxcInN0YXR1c1wiOjB9IiwiaWQiOiJVU0UwMDAwMDE4MDg0IiwiZXhwIjoxNTg0NTAwNDE2fQ.guWSBFoPiJNIaOiEI_jrkPR-tOZo2KBOyFg7yGDIB8E';
  return config;
}, function (error) {
  console.error(error);
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request;
