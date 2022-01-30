import Vue from 'vue';
import VueRouter from 'vue-router';

import signIn from '../login/signIn.vue';
import signUp from '../login/signUp.vue';
import home from '../home/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/signIn',
    name: 'signIn',
    component: signIn,
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp,
  },
  {
    path: '/',
    name: 'home',
    component: home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
