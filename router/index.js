import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViajesView from '../pages/Buscar.vue' // new view for displaying the viajes array
import ReservarView from '../pages/Reservar.vue' // new view for displaying the viajes array

Vue.use(VueRouter)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Buscar',
      name: 'viajes',
      component: ViajesView
    },
    {
        path: '/Reservar/:id',
        name: 'Reservar',
        component: ReservarView,
        props: true
    }
  ]

  const router = new VueRouter({
    mode: 'history',
    routes
  })
})

export default router