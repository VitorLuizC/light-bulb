import Vue from 'vue'
import Router from 'vue-router'
import { Login } from './view/index.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
