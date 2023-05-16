import http from '../index'

export interface AccPrarms {
  current: number
  name?: string
  email?: string
}

export function getAccounts(params: AccPrarms) {
  return http.get('/admin/users', { params })
}
