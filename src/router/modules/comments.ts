import { CommentRound } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/comments',
  name: 'comments',
  redirect: '/comments/list',
  meta: {
    title: '评论管理',
    icon: CommentRound,
    requireAuth: true
  },
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: 'list',
      name: 'comment_list',
      meta: {
        title: '评论管理',
        requireAuth: true
      },
      component: () => import('@/views/comments/index.vue')
    }
  ]
}

export default routes
