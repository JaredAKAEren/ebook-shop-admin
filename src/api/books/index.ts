import http from '../index'

export type bookParams = {
  current: number
  title?: string
  include?: string
  is_on?: number
  is_recommend?: number
}

export const getBooks = (params: bookParams) => {
  return http.get('/admin/goods', { params })
}
