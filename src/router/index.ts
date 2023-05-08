import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import AboutView from '../views/AboutView.vue'

import dashboardRoutes from './modules/dashboard'

const routeModuleList: RouteRecordRaw[] = []
routeModuleList.push(dashboardRoutes)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/console'
  },
  {
    path: '/login',
    name: 'login',
    component: AboutView
  }
]

const baseRoutes = [...routes, ...routeModuleList]
console.log(baseRoutes)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: baseRoutes
})

export default router
