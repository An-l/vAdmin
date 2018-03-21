import axios from 'axios'
import { Message } from 'element-ui'

let baseUrl = 'https://www.easy-mock.com/mock/5a604d79234d6b0587441afb/admin'

const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000 // 超时
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
    Promise.reject(err)
  }
)

// 响应拦截器
service.interceptors.response.use(
  res => {
    let data = res.data
    if (data.statusCode !== 200) {
      Message({
        message: data.statusMsg,
        type: 'error',
        duration: 5 * 1000
      })
    }
    return data
  },
  err => {
    console.log(err)
    Message({
      message: err.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(err)
  }
)

/**
 * 请求
 * @param {接口短地址} url
 * @param {请求方法} method
 * @param {数据} data
 */
const request = (url, method, data) => {
  let _method = method || 'get'
  let _data = data || {}
  let config = {
    url,
    method: _method
  }

  if (_method === 'get') {
    config.params = _data
  } else {
    config.data = _data
  }

  return service(config)
}

export default request
