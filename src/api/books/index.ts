import http from '../index'

export type bookParams = {
  current: number
  title?: string
  include?: string
  is_on?: number
  is_recommend?: number
}

export type bookData = {
  category_id: number
  title: string
  description: string
  price: number
  stock: number
  cover: string
  details: string
  pics?: string[]
}

export const getBooks = (params: bookParams) => {
  return http.get('/admin/goods', { params })
}

export const createBook = (data: bookData) => {
  return http.post('/admin/goods', data)
}
