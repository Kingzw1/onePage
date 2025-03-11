import axios from 'axios';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css'
const service = axios.create({
  baseURL: 'superapi.qirin.cn',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


// Add a request interceptor
service.interceptors.request.use(function (config) {
    nProgress.start()
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    nProgress.done()
    return Promise.reject(error);
  });

// Add a response interceptor
service.interceptors.response.use(function (response) {
    nProgress.done()
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    nProgress.done()
    return Promise.reject(error);
  });
  export default service