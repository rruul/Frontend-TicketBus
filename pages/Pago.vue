<!-- LatestBoleto.vue -->
<template>
  <div id="pago">
    <div class="latest-boleto">
      <div class="card" v-if="latestBoleto">
        <h2 class="card-title">{{ latestBoleto.origen }} - {{ latestBoleto.destino }}</h2>
        <p class="card-text">Fecha: {{ latestBoleto.fecha }}</p>
        <p class="card-text">Hora de salida: {{ latestBoleto.horaSalida }}</p>
        <p class="card-text">Hora de llegada: {{ latestBoleto.horaLlegada }}</p>
        <p class="card-text">Costo: ${{ latestBoleto.costo }}</p>
        <p class="card-text">Asiento: {{ latestBoleto.asiento }}</p>
        <p class="card-text">Información del viajero: {{ latestBoleto.infoViajero }}</p>
      </div>
      <p v-else>No se encontró el último boleto</p>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'DefaultLay',
  data () {
    return {
      latestBoleto: null
    }
  },
  mounted () {
    this.getLatestBoleto()
  },
  methods: {
    getLatestBoleto () {
      const url = '/boleto/latest'
      this.$axios.get(url)
        .then(response => {
          this.latestBoleto = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
#pago{
  padding-top: 100px;
}
.latest-boleto {
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
}
p, h2{
  color: black!important;
}
.card {
  padding: 20px;
  border-bottom: 1px solid #ddd;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.card-text {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
