import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueRouter)

import login from './components/Login.vue'
import register from './components/SignUp.vue'
import Dashboard from './components/Dashboard.vue'
// const Dashboard = { template: '<div>Dash</div>' }
// const login = { template: '<div>login</div>' }
// const register = { template: '<div>register</div>' }

const routes = [
  { path : '/' , component : Dashboard},
  { path: '/login', component: login },
  { path: '/register', component: register }
]
const router = new VueRouter({
  routes // short for `routes: routes`
})
let app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
