import Vue from 'vue'
import Router from 'vue-router'
import { ViewLogin } from '../view/index.js'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: ViewLogin
    }
  ]
})
