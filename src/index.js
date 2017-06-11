import './index.pug'
import Vue from 'vue'
import Main from './components/Main.vue'
import store from './store'
import router from './lib/router.js'

new Vue({
  store,
  router,
  el: '#application',
  render: createElement => createElement(Main)
})
