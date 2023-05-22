import { CategoryRound } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/categories',
  name: 'categories',
  redirect: '/categories/list',
  meta: {
    title: '分类管理',
    icon: CategoryRound,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'list',
      name: 'category_list',
      meta: {
        title: '分类管理',
        requireAuth: true
      },
      component: () => import('@/views/categories/CategoriesView.vue')
    }
  ]
}

export default routes
