import http from '../index'

export type LoginParams = {
  email: string
  password: string
}

export function login(data: LoginParams) {
  return http.post('/auth/login', data)
}

export function getNowUserInfo() {
  return http.get('/admin/user')
}

export function postLogout() {
  return http.post('/auth/logout')
}

export const getOSSToken = () => {
  return http.get('/auth/oss/token')
}
