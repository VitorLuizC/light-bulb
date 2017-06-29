import Vue from 'vue'
import App from './components/App'
import store from './store'
import router from './router'

new Vue({
  store,
  router,
  el: '#application',
  render: createElement => createElement(App)
})
