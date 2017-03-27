import Vue from 'vue'
import Router from 'vue-router'
import { ViewLogin } from '../view/index.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: ViewLogin
    }
  ]
})

const isAuthenticated = false

router.beforeEach((destiny, origin, next) => {
  if (destiny.path === '/login' && isAuthenticated) {
    next('/')
  } else if (destiny.path !== '/login' && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
