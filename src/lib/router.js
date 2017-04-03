import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import { ViewLogin, ViewSubscribe, ViewDashboard } from '../components/views'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/dashboard',
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

router.beforeEach((destiny, origin, next) => {
  let userProfile = store.getters.userProfile
  let isGuest = (userProfile === 'guest')
  let userHasPermission = (destiny.meta.profiles.indexOf(userProfile) > -1)

  if (!userHasPermission) {        // Send back to Login if is a guest or to
    next(isGuest ? '/login' : '/') // Home if is an user.
    return
  }

  next()
})

export default router
