import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Bio from './components/Bio.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/bio',
      component: Bio
    },
    {
      path: '/contact',
      component: Contact
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
