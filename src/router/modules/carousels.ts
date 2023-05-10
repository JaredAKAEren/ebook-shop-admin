import { ViewCarouselRound } from '@vicons/material'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
    path: '/carousels',
    name: 'carousels',
    redirect: '/carousels/list',
    meta: {
        title: '轮播管理',
        icon: ViewCarouselRound,
        requireAuth: true
    },
    component: () => import('@/layout/index.vue'),
    children: [
        {
            path: 'list',
            name: 'carousel_list',
            meta: {
                title: '轮播管理',
                requireAuth: true
            },
            component: () => import('@/views/carousels/index.vue')
        }
    ]
}

export default routes
