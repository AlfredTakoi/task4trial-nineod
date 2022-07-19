import { createRouter, createWebHistory } from 'vue-router'
import PageOneView from '../views/PageOneView.vue'
import PageTwoView from '../views/PageTwoView.vue'
import PageThreeView from '../views/PageThreeView'


const routes = [
  {
    path: '/',
    name: 'page.one',
    component: PageOneView
  },
  {
    path: '/pagetwo',
    name: 'page.two',
    component: PageTwoView
  },
  {
    path: '/pagethree',
    name: 'page.three',
    component: PageThreeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
