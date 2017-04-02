import Vue from 'vue'
import Router from 'vue-router'
import { ViewLogin, ViewSubscribe } from '../components/views/index.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: ViewLogin
    },
    {
      path: '/subscribe',
      component: ViewSubscribe
    }
  ]
})

// const isAuthenticated = false

// router.beforeEach((destiny, origin, next) => {
//   if (destiny.path === '/login' && isAuthenticated) {
//     next('/')
//   } else if (destiny.path !== '/login' && !isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
