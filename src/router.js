import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
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
    meta: { requiresAuth: true }
  },
  {
    path: '/ticket/:id',
    name: 'DetailView',
    component: DetailView,
    meta: { requiresAuth: true }
  },
  {
    path: '/ticket/create',
    name: 'CreateView',
    component: CreateView,
    meta: { requiresAuth: true }
  },
  {
    path: '/ticket/update/:id',
    name: 'UpdateView',
    component: UpdateView,
    meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  console.log('router check: ' + store.state.loggedIn);
  if (to.matched.some(record => record.meta.requiresAuth) && !store.state.loggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath }});
  } else {
    next();
  }
});

export default router