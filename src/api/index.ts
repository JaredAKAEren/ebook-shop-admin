import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api.shop.eduwork.cn/api',
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
        return Promise.reject(err)
    }
)

export default instance
