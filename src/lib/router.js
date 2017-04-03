import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import { ViewLogin, ViewSubscribe, ViewDashboard } from '../components/views'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      component: ViewDashboard,
      meta: {
        profiles: ['user']
      }
    },
    {
      path: '/login',
      component: ViewLogin,
      meta: {
        profiles: ['guest']
      }
    },
    {
      path: '/subscribe',
      component: ViewSubscribe,
      meta: {
        profiles: ['guest']
      }
    }
  ]
})

export default router
