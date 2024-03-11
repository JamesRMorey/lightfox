import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
  ],
  scrollBehavior () {
      return { top: 0, left: 0 }
  }
})

export default router
