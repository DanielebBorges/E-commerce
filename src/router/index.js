import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetalhesView from '../views/DetalhesView.vue'
import EletronicosView from '../views/EletronicosView.vue'
import BelezaView from '../views/BelezaView.vue'
import AlimentosView from '../views/AlimentosView.vue'
import CasaView from '../views/CasaView.vue'
import FemininoView from '../views/FemininoView.vue'
import MasculinaView from '../views/MasculinaView.vue'
import AcessoriosView from '../views/AcessoriosView.vue'
import AutomativoView from '../views/AutomativoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/detalhes/:id',
      name: 'detalhes',
      component: DetalhesView,
    },
     {
      path: '/eletronicos',
      name: 'eletronicos',
      component: EletronicosView,
    },
     {
      path: '/beleza',
      name: 'beleza',
      component: BelezaView,
    },
    {
      path: '/alimentos',
      name: 'alimentos',
      component: AlimentosView,
    },
     {
      path: '/casa',
      name: 'casa',
      component: CasaView,
    },
     {
      path: '/feminino',
      name: 'feminino',
      component: FemininoView,
    },
    {
      path: '/masculino',
      name: 'masculino',
      component: MasculinaView,
    },
     {
      path: '/acessorios',
      name: 'acessorios',
      component: AcessoriosView,
    },
    {
      path: '/automativo',
      name: 'automativo',
      component: AutomativoView,
    },
    
  ],
})

export default router
