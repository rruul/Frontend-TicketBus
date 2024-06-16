<template>
  <div class="buscar">
    <div class="index-container">
      <h1>Viajes</h1>
      <div class="Contenedor1">
        <v-row>
          <v-col>
            <h2>Selecciona un horario de ida</h2>
          </v-col>
          <v-col><h4>*Cambio de horarios sin previo aviso</h4></v-col>
        </v-row>
        <v-row>
        </v-row>
      </div>
      <div class="card-container">
        <div v-for="viaje in viajes" :key="viaje.id" class="card">
          <div class="card-content">
            <h2>{{ viaje.origen }} - {{ viaje.destino }}</h2>
            <p>Fecha: {{ viaje.fecha }}</p>
            <p>Duracion: {{ viaje.Duracion }} Horas</p>
            <p>{{ viaje.horaSalida }} - {{ viaje.horaLlegada }}</p>
            <p>Costo: ${{ viaje.Costo }}</p>
            <v-btn @click="reservar(viaje.id)">Reservar</v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViajesView',
  auth: false,
  layout: 'DefaultLay',
  data () {
    return {
      viajes: []
    }
  },
  mounted () {
    this.viajes = this.$route.params.viajes
  },
  methods: {
    reservar (id) {
      console.log('Reservar viaje', id)
      this.$router.push({ name: 'Reservar', params: { id } })
    }
  }
}
</script>

<style scoped>

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 200px;
  padding-left: 90px;
  background-color: rgba(255, 255, 255, 0.8); /* Color blanco con una transparencia del 80% */
  border-radius: 30px!important; /* Ajusta según tus preferencias */
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card {
  width: 100%;/* Ajusta este valor según tus necesidades */
  height: auto;
  margin-bottom: 20px;
}

.card-content {
  padding: 20px;
  color: black!important;
}
.buscar{
  padding-top: 100px;
}
</style>
