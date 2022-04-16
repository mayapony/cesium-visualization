import { createRouter, createWebHashHistory } from 'vue-router'
import Earth from '../components/Earth.vue'
import Home from '../pages/Home.vue'
const routes = [
  {
    path: '/',
    component: Home,
  },
  { path: '/earth', component: Earth },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
