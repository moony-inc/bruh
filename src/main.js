import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import store from './store'
import './scss/main.scss'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app')
