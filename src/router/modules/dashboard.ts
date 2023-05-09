import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

const routes: RouteRecordRaw = {
    path: '/dashboard',
    name: 'dashboard',
    component: Layout,
    redirect: '/dashboard/console',
    meta: {
        title: 'Dashboard',
        requireAuth: true
    },
    children: [
        {
            path: 'console',
            name: 'dashboard_console',
            meta: {
                title: '主控台',
                requireAuth: true
            },
            component: Dashboard
        }
    ]
}

export default routes
