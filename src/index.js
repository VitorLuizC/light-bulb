import Vue from 'vue';
import Router from 'vue-router';
import router from './router.js';
import main from './component/main.vue';

Vue.use(Router);

export default new Vue({
  router,
  el: '#app',
  render(process) {
    process(main);
  }
});
