import { InsertLinkRound } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/links',
  name: 'links',
  redirect: '/links/list',
  meta: {
    title: '链接管理',
    icon: InsertLinkRound,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'list',
      name: 'link_list',
      meta: {
        title: '链接管理',
        requireAuth: true
      },
      component: () => import('@/views/links/LinksView.vue')
    }
  ]
}

export default routes
