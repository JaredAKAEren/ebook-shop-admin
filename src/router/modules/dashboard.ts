import type { RouteRecordRaw } from 'vue-router'
import { DashboardRound } from '@vicons/material'

const routes: RouteRecordRaw = {
  path: '/dashboard',
  name: 'dashboard',
  redirect: '/dashboard/console',
  meta: {
    title: '首页统计',
    icon: DashboardRound,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'console',
      name: 'dashboard_console',
      meta: {
        title: '首页统计',
        requireAuth: true
      },
      component: () => import('@/views/dashboard/DashboardView.vue')
    }
  ]
}

export default routes
