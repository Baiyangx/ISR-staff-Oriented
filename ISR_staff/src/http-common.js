import axios from "axios"

const config = {
    // baseURL: process.env.baseURL
    baseURL: 'http://localhost:8080/api',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};

const api = axios.create(config);

//post requst use application/json
api.defaults.headers.post['Content-Type'] = 'application/json';


api.post = function (url, params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: config.baseURL + url,
        data: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }).then(response => {
        if (!response || response.status !== 200) {
          Toast("response is lost")
          reject(response)
        } else {
          const { code, msg, data } = response.data
          if (code == 200){ 
            resolve(data)}
          else {
            Toast(msg)
            reject()
          }
        }
      })
    })
  }
  
  
  // http response interceptors
  api.interceptors.response.use(
    response => {
      //拦截响应，做统一处理
      if (response.status !== 200) {
        Toast("response is lost")
        return response
      }
      const { code, msg, data } = response.data
      if (code == 200) return Promise.resolve(data)
      else {
        Toast(msg)
        return 
      }
    },
    error => {
      return Promise.reject(error || "error in interface") // 返回接口返回的错误信息
    })
  
  
  
  export default api;
  