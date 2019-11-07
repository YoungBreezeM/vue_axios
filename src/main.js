import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import axios from './http'
import axios from 'axios'
import store from './store/store'
import VueAxios from 'vue-axios'
 Vue.use(VueAxios,axios);
// 将axios挂载到prototype上，在组件中可以直接使用this.axios访问
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
