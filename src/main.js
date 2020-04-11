import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL= process.env.VUE_APP_BASE_API

Vue.config.productionTip = false
console.log(process.env)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
