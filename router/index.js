import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicio from '@/pages/Index.vue'
import PaginaBuscar from '@/pages/Buscar.vue'
import PaginaDetalleViaje from '@/pages/DetalleViaje.vue'
import PaginaSeleccionAsiento from '@/pages/SeleccionAsiento.vue'
import PaginaInformacionUsuario from '@/pages/InformacionUsuario.vue'
import PaginaResumen from '@/pages/Resumen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: PaginaInicio
  },
  {
    path: '/buscar',
    name: 'Buscar',
    component: PaginaBuscar
  },
  {
    path: '/detalle-viaje/:id',
    name: 'DetalleViaje',
    component: PaginaDetalleViaje
  },
  {
    path: '/seleccion-asiento/:id',
    name: 'SeleccionAsiento',
    component: PaginaSeleccionAsiento
  },
  {
    path: '/informacion-usuario',
    name: 'InformacionUsuario',
    component: PaginaInformacionUsuario
  },
  {
    path: '/resumen',
    name: 'Resumen',
    component: PaginaResumen
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router