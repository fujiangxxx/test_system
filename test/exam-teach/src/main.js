// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App';
import router from './router';
import 'bootstrap/dist/js/bootstrap.min';
import "@/assets/css/mui.css";
import "@/assets/js/rem.js";
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
Vue.use(ElementUI)

import store from "@/vuex/vuex.js";
import fun from './fun.js';
import urls from './urls.js';
Vue.prototype.$imgUrls=urls;
Vue.prototype.$comon= fun;
import "@/assets/iconfont/iconfont.css";
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
