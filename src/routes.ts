import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    name: 'not-found',
    path: '*',
    redirect: { name: 'home' }
  }, {
    name: 'home',
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */  './pages/home/index.vue'),
  }
];


export default new VueRouter({
  routes
});

