import Router from 'vue-router';
import home from './component/page-home.vue';

const router = new Router({
  routes: [
    {
      path: '/',
      component: home
    }
  ]
});

export default router;
