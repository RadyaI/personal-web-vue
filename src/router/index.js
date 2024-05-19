import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import tes from '../views/tes.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tes',
    component: tes
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
