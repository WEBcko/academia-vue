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
    ]
  },
  { 
    path: '/edit-grupoMuscular/:editGrupoId',
    name: 'edit-grupoMuscular',
    component: () => import('../views/grupoMuscular/GrupoMuscularEditar.vue')
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
    path: '/treino',
    name: 'treino-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/treino/TreinoView.vue')
  },
  {
    path: '/treino-cadastrar',
    name: 'treino-cadastrar-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/treino/TreinoCadastrar.vue'),
    children: [
      {
        path: '/treino-cadastrar',
        name: 'treino-cadastrar-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/treino/TreinoCadastrar.vue'),
      },
      {
        path: '/treino-cadastrar',
        name: 'treino-cadastrar-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/treino/TreinoCadastrar.vue'),
      },
    ]
  },
  {
    path: '/usuario',
    name: 'usuario-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuario/ClienteListarView.vue')
  },
  {
    path: '/usuario-cadastrar',
    name: 'usuario-cadastrar-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuario/ClienteCadastrar.vue'),
    children: [
      {
        path: '/usuario-cadastrar',
        name: 'usuario-cadastrar-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/usuario/ClienteCadastrar.vue'),
      },
      {
        path: '/usuario-cadastrar',
        name: 'usuario-cadastrar-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/usuario/ClienteCadastrar.vue'),
      },
    ]
  },
  {
    path: '/treinoexercicio',
    name: 'treino-exercicio-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/treinoexercicio/TreinoExercicioView.vue')
  },
  {
    path: '/treinoexercicio-cadastrar',
    name: 'treino-exercicio-cadastrar-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/treinoexercicio/TreinoExercicioCadastrar.vue'),
    children: [
      {
        path: '/treinoexercicio-cadastrar',
        name: 'treino-exercicio-cadastrar-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/treinoexercicio/TreinoExercicioCadastrar.vue'),
      },
      {
        path: '/treinoexercicio-cadastrar',
        name: 'treino-exercicio-cadastrar-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/treinoexercicio/TreinoExercicioCadastrar.vue'),
      },
    ]
  },

  {
    path: '/teste',
    name: 'teste-vue',
    component: () => import(/* webpackChunkName: "about" */ '../views/usuario/teste.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
