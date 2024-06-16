<template>
  <div>
    <div class="index-container">
      <v-card class="card" rounded light>
        <v-card-title>Busqueda de Boletos</v-card-title>
        <v-card-text>
          <v-text-field label="Origen" color="primary" v-model="origen" prepend-icon="mdi-map-marker"></v-text-field>
          <v-text-field label="Destino" v-model="destino" prepend-icon="mdi-map-marker"></v-text-field>
          <v-menu v-model="menu" :close-on-content-click="true" :nudge-right="40" transition="scale-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Fecha"
                append-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date"></v-date-picker>
          </v-menu>
        </v-card-text>
        <v-card-actions>
          <v-btn size="large" block @click="buscarViaje">Buscar</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  auth: false,
  layout: 'DefaultLay',
  data () {
    return {
      selectedOption: '',
      origen: '',
      destino: '',
      menu: false,
      date: new Date().toISOString().substr(0, 10)
    }
  },
  methods: {
    buscarViaje () {
      const origen = this.origen
      const destino = this.destino
      const Fecha = this.date
      const url = '/viajes/search'
      // Enviar solicitud POST con el origen
      this.$axios.post(url, { origen, destino, Fecha })
        .then(response => {
          console.log(response.data)
          const viajes = response.data
          this.$router.push({ name: 'Buscar', params: { viajes } })
          // Procesar la respuesta del servidor
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style scoped>
.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
  height: calc(100vh - 60px); /* 60px es la altura de la barra de navegación */
}

.card {
  width: 80%;
  background-color: rgba(255, 255, 255, 0.8); /* Color blanco con una transparencia del 80% */
  border-radius: 30px!important; /* Ajusta según tus preferencias */
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);/* Establece un máximo para evitar que el card sea demasiado ancho en pantallas grandes */
}

main {
  padding-top: 60px; /* Para evitar que el contenido se superponga con la barra de navegación */
}
</style>
