import http from '../index'

export interface AccPrarms {
  current: number
  name?: string
  email?: string
}

export interface AccountData {
  name: string
  email: string
  password: string
}

export function getAccounts(params: AccPrarms) {
  return http.get('/admin/users', { params })
}

export function createAccount(data: AccountData) {
  return http.post('/admin/users', data)
}

export function updateAccountStatus(id: number) {
  return http.patch(`/admin/users/${id}/lock`)
}
