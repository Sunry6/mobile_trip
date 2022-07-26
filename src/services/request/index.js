/**
 * 封装网络请求文件
 */
import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class SRYRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout,
    })
  }

  reuqest(config) {
    return new Promise((resolve, reject) => {
      // 调用axios的request
      this.instance
        .request(config)
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  get(config) {
    // 调用axios的get方法
    return this.reuqest({ ...config, methods: 'get' })
  }

  post(config) {
    // 调用axios的post方法
    return this.reuqest({ ...config, methods: 'post' })
  }
}

export default new SRYRequest(BASE_URL, TIMEOUT)
