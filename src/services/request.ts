import axios from "axios";
import qs from "qs";

/****** 创建axios实例 ******/
const request = axios.create({
  baseURL: process.env.BASE_URL,  // api的base_url
  timeout: 5000  // 请求超时时间
});




export default request;
