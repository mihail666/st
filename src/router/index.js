import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'page1',
    component: () => import('../views/page1View.vue')
  },
  {
    path: '/page2',
    name: 'page2',
 
    component: () => import('../views/page2View.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
