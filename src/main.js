import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import comn from './comn'



Vue.use(comn)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
