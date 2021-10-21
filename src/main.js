import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from 'vue-cookies'



Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.use(VueCookies)

axios.defaults.baseURL = "http://localhost:8081/api";
axios.defaults.headers.post['Content-Type'] = 'application/json';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求时添加token
  let token = localStorage.getItem("token");
  config.headers = {'Authorization': token};
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

new Vue({
  router,
  store,
  render: h => h(App),
  ElementUI,
}).$mount('#app')
