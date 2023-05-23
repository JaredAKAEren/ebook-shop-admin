import http from '../index'

export type carouselData = {
  title: string
  img: string
  url: string
  status: number
}

export const getCarousels = (current: number) => {
  return http.get('/admin/slides', { params: { current } })
}

export const createCarousel = (data: carouselData) => {
  return http.post('/admin/slides', data)
}

export const updateCarouselStatus = (id: number) => {
  return http.patch(`/admin/slides/${id}/status`)
}

export const deleteCarousel = (id: number) => {
  return http.delete(`/admin/slides/${id}`)
}
