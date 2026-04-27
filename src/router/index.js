import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'
import LegalView from '../views/LegalView.vue'
import LicenseView from '../views/LicenseView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/documentation', name: 'docs', component: DocsView },
    { path: '/legal', name: 'legal', component: LegalView },
    { path: '/license', name: 'license', component: LicenseView }
  ],

  scrollBehavior() {
    return { top: 0 }
  }
})

export default router