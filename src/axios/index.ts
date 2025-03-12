import axios from 'axios';
import qs from 'qs';
import { objToFormData } from "@/utils/index";
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
const PATH_URL = import.meta.env.VITE_BASE_API
const service = axios.create({
  baseURL: PATH_URL,
  timeout: 1000,
  // headers: {"Content-Type": "application/json",Authorization: "Bearer " + userStore.getToken || "",}
});

// 定义全局配置（示例）
const TRANSFORM_REQUEST_DATA = true; // 是否开启 FormData 转换
const SUCCESS_CODE = 200; // 定义成功状态码

// Add a request interceptor
service.interceptors.request.use(function (config) {
  nProgress.start()
  // Do something before request is sent
  if (
    config.method === "post" &&
    config.headers["Content-Type"] === "application/x-www-form-urlencoded"
  ) {
    config.data = qs.stringify(config.data);
  } else if (
    TRANSFORM_REQUEST_DATA &&
    config.method === "post" &&
    config.headers["Content-Type"] === "multipart/form-data"
  ) {
    config.data = objToFormData(config.data);
  }
  if (config.method === "get" && config.params) {
    let url = config.url as string;
    url += "?";
    const keys = Object.keys(config.params);
    for (const key of keys) {
      if (config.params[key] !== void 0 && config.params[key] !== null) {
        url += `${key}=${encodeURIComponent(config.params[key])}&`;
      }
    }
    url = url.substring(0, url.length - 1);
    config.params = {};
    config.url = url;
  }
  return config;
}, function (error) {
  // Do something with request error
  nProgress.done()
  return Promise.reject(error);
});

// Add a response interceptor
service.interceptors.response.use(function (response) {
  nProgress.done()
  if (response?.config?.responseType === "blob") {
    // 如果是文件流，直接过
    return response;
  } else if (response.status === SUCCESS_CODE) {

    return response.data
  } else {
    Promise.reject('失败')
  }
}, function (error) {
  nProgress.done()
  return Promise.reject(error);
});
export default service