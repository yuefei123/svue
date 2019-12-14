import Vue from 'vue'
import App from './App.vue'

import './assets/js/rem.js'
import './assets/style/base.scss'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
