import axios from "axios";
import qs from "qs";

console.log('test', process.env.REACT_API_DOMAIN);
/****** 创建axios实例 ******/
const request = axios.create({
  baseURL: process.env.REACT_API_DOMAIN,  // api的base_url
  timeout: 5000  // 请求超时时间
});

export default request;
