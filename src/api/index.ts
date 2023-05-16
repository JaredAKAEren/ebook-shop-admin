import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
})

instance.interceptors.request.use(
  (config) => {
    const token: string = localStorage.getItem('token') || ''
    if (token !== '') {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    const { response } = err
    switch (response?.status) {
      case 401:
        window.$message.error('登录失败，请检查用户名和密码是否正确')
        break
      case 404:
        window.$message.error('资源不存在')
        break
      case 422:
        let message: string =
          response.data.errors[Object.keys(response.data.errors)[0]][0] || '出错了，请重试'
        window.$message.error(message)
        break
      default:
        break
    }
    return Promise.reject(err)
  }
)

export default instance
