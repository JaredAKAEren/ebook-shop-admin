import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '../views/login/index.vue'

import dashboardRoutes from './modules/dashboard'
import accountRoutes from './modules/accounts'

const routeModuleList: RouteRecordRaw[] = []
routeModuleList.push(dashboardRoutes, accountRoutes)

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/dashboard/console'
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    }
]

const baseRoutes = [...routes, ...routeModuleList]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: baseRoutes
})

router.beforeEach((to) => {
    if (to.meta.requireAuth) {
        if (!localStorage.getItem('token')) {
            return {
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            }
        }
    }
    // document.title = `ebook 图书 - ${to.meta.title}`
})

export { routeModuleList }
export default router
