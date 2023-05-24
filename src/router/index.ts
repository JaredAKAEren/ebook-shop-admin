import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'

import dashboardRoutes from './modules/dashboard'
import accountRoutes from './modules/accounts'
import categoryRoutes from './modules/categories'
import bookRoutes from './modules/books'
import orderRoutes from './modules/orders'
import commentRoutes from './modules/comments'
import carouselRoutes from './modules/carousels'
import linkRoutes from './modules/links'

const routeModuleList: RouteRecordRaw[] = []
routeModuleList.push(
  dashboardRoutes,
  accountRoutes,
  categoryRoutes,
  bookRoutes,
  orderRoutes,
  commentRoutes,
  carouselRoutes,
  linkRoutes
)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard/console'
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
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
  } else if (to.name === 'login') {
    if (localStorage.getItem('token')) {
      return { path: '/dashboard/console' }
    }
  }
  document.title = `ebook - ${to.meta.title}`
})

export { routeModuleList }
export default router
