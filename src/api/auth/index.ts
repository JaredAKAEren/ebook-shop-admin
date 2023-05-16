import http from '../index'

export interface LoginParams {
  email: string
  password: string
}

export function login(data: LoginParams) {
  return http.post('/auth/login', data)
}

export function getNowUserInfo() {
  return http.get('/admin/user')
}

export function logout() {
  return http.post('/auth/logout')
}
