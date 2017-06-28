import Vue from 'vue'
import Router from 'vue-router'
import store from './store'
import * as views from './views'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: views.Home
    }
  ]
})

export default router
