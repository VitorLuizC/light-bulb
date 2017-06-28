import './index.pug'
import Vue from 'vue'
import Main from './components/Main'
import store from './store'
import router from './router'

new Vue({
  store,
  router,
  el: '#application',
  render: createElement => createElement(Main)
})
