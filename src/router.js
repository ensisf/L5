import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import { auth } from '@/auth.js'
import NProgress from 'nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/Users.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('@/views/User.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('@/views/Add.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tels',
      name: 'tels',
      component: () => import('@/views/Tels.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (!to.matched.some(record => record.meta.requiresAuth)) {
    next()
  }

  if (!auth()) {
    next({
      path: '/',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router
