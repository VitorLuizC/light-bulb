import './view.pug'
import Vue from 'vue'
import router from './lib/router.js'
import Main from './component/Main.vue'

new Vue({
  router,
  el: '#application',
  render: createElement => createElement(Main)
})
