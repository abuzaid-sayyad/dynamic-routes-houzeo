import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryDetail from '@/components/CategoryDetail.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:categorySlug/:subcategorySlug',
      name: 'CategoryDetail',
      component: CategoryDetail
    }
  ]
})

export default router