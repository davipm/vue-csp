import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue'
import Meta from 'vue-meta'

// base api request demo
//axios.defaults.baseURL = 'http://demoapi.heyholetsgo.com.br/wp-json';

// base api request localhost
axios.defaults.baseURL = 'http://wpstudy.local/wp-json';

Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
