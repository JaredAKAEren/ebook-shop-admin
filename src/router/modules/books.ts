import { MenuBookRound } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/books',
  name: 'books',
  redirect: '/books/list',
  meta: {
    title: '图书管理',
    icon: MenuBookRound,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'list',
      name: 'book_list',
      meta: {
        title: '图书管理',
        requireAuth: true
      },
      component: () => import('@/views/books/index.vue')
    }
  ]
}

export default routes
