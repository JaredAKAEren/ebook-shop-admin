import { AccountCircleFilled } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/accounts',
  name: 'accounts',
  redirect: '/accounts/list',
  meta: {
    title: '账户管理',
    icon: AccountCircleFilled,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'list',
      name: 'account_list',
      meta: {
        title: '账户管理',
        requireAuth: true
      },
      component: () => import('@/views/accounts/AccountsView.vue')
    }
  ]
}

export default routes
