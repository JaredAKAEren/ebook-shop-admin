import http from '../index'

export type AccountsPrarms = {
  current: number
  name?: string
  email?: string
}

export type AccountData = {
  name: string
  email: string
  password: string
}

export type UpdateAccountData = {
  name: string
  email: string
}

export function getAccounts(params: AccountsPrarms) {
  return http.get('/admin/users', { params })
}

export function createAccount(data: AccountData) {
  return http.post('/admin/users', data)
}

export function updateAccountStatus(id: number) {
  return http.patch(`/admin/users/${id}/lock`)
}

export function getAccountInfo(id: number) {
  return http.get(`/admin/users/${id}`)
}

export function updateAccountInfo(id: number, data: UpdateAccountData) {
  return http.put(`/admin/users/${id}`, data)
}
