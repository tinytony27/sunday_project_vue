import { createRouter, createWebHistory } from 'vue-router'
import DetailView from './main/pages/DetailView/DetailView'
import ListView from './main/pages/ListView/ListView'
import CreateView from './main/pages/CreateView/CreateView'
import UpdateView from './main/pages/UpdateView/UpdateView'

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
  {
    path: '/ticket/update/:id',
    name: 'UpdateView',
    component: UpdateView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
