import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import qs from "qs"
import './assets/css/border.css'
import './assets/css/reset.css'
import VueAxios from "vue-axios"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router/router'

Vue.use(VueRouter)

Vue.use(ElementUI);
Vue.use(VueAxios,axios);
Vue.prototype.$qs = qs 
Vue.config.productionTip = false
 
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
