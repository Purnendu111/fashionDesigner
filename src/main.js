import Vue from 'vue';
import App from './App.vue';
import router from './components/Router/Router';
import VueRouter from 'vue-router';
import VueSimpleAlert from 'vue-simple-alert';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './axios';
import '@/css/main.css';
import VideoBackground from 'vue-responsive-video-background-player';
Vue.component('video-background', VideoBackground);
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.use(require('vue-resource'));
Vue.use(Buefy);
Vue.use(BootstrapVue);
Vue.use(VueSimpleAlert);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
