import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
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

router.beforeEach((to, from, next) => {
  let { user, profile } = store.getters
  let permission = (to.meta.profiles.indexOf(profile) > -1)

  if (user !== undefined && !permission) {
    let isGuest = (profile === 'guest')
    next(isGuest ? '/login' : '/dashboard')
    return
  }

  next()
})

export default router
