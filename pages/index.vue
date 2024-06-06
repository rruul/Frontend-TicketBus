<template>
  <div>
    <input type="text" v-model="busqueda.origen" placeholder="Origen">
    <input type="text" v-model="busqueda.destino" placeholder="Destino">
    <input type="date" v-model="busqueda.fecha">
    <button @click="buscarViajes">Buscar Viajes</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      busqueda: {
        origen: '',
        destino: '',
        fecha: ''
      }
    }
  },
  methods: {
    buscarViajes () {
      const { origen, destino, fecha } = this.busqueda
      const url = `/buscar?origen=${encodeURIComponent(origen)}&destino=${encodeURIComponent(destino)}&fecha=${fecha}`
      this.$router.push(url)
    }
  }
}
</script>
