import Vue from 'vue';
import App from './App';
import router from './router';
import "@/assets/css/mui.css";
import "@/assets/js/rem.js";
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// // require styles
// import 'swiper/dist/css/swiper.css'
//
// Vue.use(VueAwesomeSwiper)

//axios传输数据
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
import "@/assets/iconfont/iconfont.css";

import store from "@/vuex/vuex.js";
import fun from './fun.js';
import urls from './urls.js';
Vue.prototype.$imgUrls= urls;
Vue.prototype.$comon= fun;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
