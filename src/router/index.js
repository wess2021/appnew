import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Events from '../components/Events'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'events',
    component: Events
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router
