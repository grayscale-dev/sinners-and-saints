import { createRouter, createWebHistory } from 'vue-router'

import ApplicationPage from '../pages/ApplicationPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import HomePage from '../pages/HomePage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/our-story',
      name: 'our-story',
      component: AboutPage
    },
    {
      path: '/menu',
      name: 'menu',
      component: ServicesPage
    },
    {
      path: '/catering',
      name: 'catering',
      component: ContactPage
    },
    {
      path: '/application',
      name: 'application',
      component: ApplicationPage
    },
    {
      path: '/about',
      redirect: '/our-story'
    },
    {
      path: '/services',
      redirect: '/menu'
    },
    {
      path: '/contact',
      redirect: '/catering'
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
