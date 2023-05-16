import { CreditCardRound } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/orders',
  name: 'orders',
  redirect: '/orders/list',
  meta: {
    title: '订单管理',
    icon: CreditCardRound,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'list',
      name: 'order_list',
      meta: {
        title: '订单管理',
        requireAuth: true
      },
      component: () => import('@/views/orders/index.vue')
    }
  ]
}

export default routes
