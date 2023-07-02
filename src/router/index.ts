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
  },
  {
    path: '/grupo-muscular-cadastrar',
    name: 'grupo-muscular-cadastrar-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/grupoMuscular/GrupoMuscularCadastrar.vue'),
    children: [
      {
        path: '/grupo-muscular-cadastrar',
        name: 'grupo-muscular-cadastrar-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/grupoMuscular/GrupoMuscularCadastrar.vue'),
      },
      {
        path: '/grupo-muscular-cadastrar',
        name: 'grupo-muscular-cadastrar-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/grupoMuscular/GrupoMuscularCadastrar.vue'),
      },
    ]
  },

  {
    path: '/exercicio',
    name: 'exercicio-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosView.vue')
  },
  {
    path: '/exercicio-cadastrar',
    name: 'exercicio-cadastrar-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosCadastrar.vue'),
    children: [
      {
        path: '/exercicio-cadastrar',
        name: 'exercicio-cadastrar-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosCadastrar.vue'),
      },
      {
        path: '/exercicio-cadastrar',
        name: 'exercicio-cadastrar-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosCadastrar.vue'),
      },
    ]
  },

  {
    path: '/exercicio',
    name: 'exercicio-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosView.vue')
  },
  {
    path: '/exercicio-cadastrar',
    name: 'exercicio-cadastrar-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosCadastrar.vue'),
    children: [
      {
        path: '/exercicio-cadastrar',
        name: 'exercicio-cadastrar-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosCadastrar.vue'),
      },
      {
        path: '/exercicio-cadastrar',
        name: 'exercicio-cadastrar-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/exercicios/ExerciciosCadastrar.vue'),
      },
    ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
