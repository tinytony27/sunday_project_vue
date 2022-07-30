import { createRouter, createWebHistory } from 'vue-router'
import DetailView from './main/pages/DetailView/DetailView'
import ListView from './main/pages/ListView/ListView'
import CreateView from './main/pages/CreateView/CreateView'

const routes = [
  {
    path: '/list',
    name: 'ListView',
    component: ListView,
  },
  {
    path: '/ticket/:id',
    name: 'DetailView',
    component: DetailView,
  },
  {
    path: '/ticket/create',
    name: 'CreateView',
    component: CreateView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
