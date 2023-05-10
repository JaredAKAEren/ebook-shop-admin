import type { RouteRecordRaw } from 'vue-router'
import { HomeRound } from '@vicons/material'

import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

const routes: RouteRecordRaw = {
    path: '/dashboard',
    name: 'dashboard',
    redirect: '/dashboard/console',
    meta: {
        title: '首页统计',
        icon: HomeRound,
        requireAuth: true
    },
    component: Layout,
    children: [
        {
            path: 'console',
            name: 'dashboard_console',
            meta: {
                title: '首页统计',
                requireAuth: true
            },
            component: Dashboard
        }
    ]
}

export default routes
