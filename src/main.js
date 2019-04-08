import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './routes'
import { store } from './store/store'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(BootstrapVue)
const router = new VueRouter({routes});
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App)

}).$mount('#app')
