import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/grupoMuscular/GrupoMuscularView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashBoard/DashBoardHome.vue')
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: () => import(/* webpackChunkName: "dashboard" */ '../views/DashBoard/Calendario.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')

  },
  {
    path: '/cadastrar',
    name: 'cadastrar',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroView.vue')
  },
  {
    path: '/grupo-muscular',
    name: 'grupo-muscular-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/grupoMuscular/GrupoMuscularView.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
