import { createRouter, createWebHistory } from 'vue-router'
import DetailView from './main/pages/DetailView/DetailView'
import ListView from './main/pages/ListView/ListView'
import CreateView from './main/pages/CreateView/CreateView'
import UpdateView from './main/pages/UpdateView/UpdateView'

import LoginView from './main/pages/LoginView/LoginView'
import LogoutView from './main/pages/LogoutView/LogoutView'

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
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'LogoutView',
    component: LogoutView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
