import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing_Page',
      component: () => import('../views/LandingPage.vue')
    }
  ],
})

export default router
