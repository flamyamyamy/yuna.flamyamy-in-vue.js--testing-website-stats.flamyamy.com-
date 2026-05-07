import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DocsView from '../views/DocsView.vue'
import LegalView from '../views/LegalView.vue'
import LicenseView from '../views/LicenseView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/documentation/:category?',
      name: 'docs',
      component: DocsView,
      props: true
    },
    {
      path: '/legal',
      name: 'legal',
      component: LegalView
    },
    {
      path: '/license',
      name: 'license',
      component: LicenseView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.afterEach((to) => {
  const titles = {
    home:      'Yuna — Discord Bot',
    docs:      'Documentation — Yuna',
    legal:     'Legal — Yuna',
    license:   'License — Yuna',
    'not-found': '404 — Yuna',
  }
  document.title = titles[to.name] || 'Yuna'
})

export default router
