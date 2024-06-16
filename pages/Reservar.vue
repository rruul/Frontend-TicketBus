<template>
  <div class="reservar">
    <div class="index-container">
      <div v-if="viaje">
        <h1>Reservar viaje</h1>
        <p v-if="viaje.Asientos">Asientos disponibles: {{ viaje.Asientos.Disponibles.length }}</p>
        <p v-if="viaje.Asientos">Asientos ocupados: {{ viaje.Asientos.Ocupados.length }}</p>
        <v-text-field label="Nombre" v-model="Nombre"></v-text-field>
        <v-text-field label="Apellido" v-model="Apellido"></v-text-field>
        <div>
        </div>
        <div v-if="viaje.Asientos" class="asientos-container">
          <button
            v-for="asiento in todosLosAsientos"
            :key="asiento.nombre"
            @click="seleccionarAsiento(asiento)"
            :class="[
              'asiento',
              asientoSeleccionado === asiento.nombre ? 'asiento-seleccionado' : '',
              asiento.ocupado ? 'asiento-ocupado' : ''
            ]"
            :disabled="asiento.ocupado"
          >
            {{ asiento.nombre }}
          </button>
        </div>
        <v-btn class="reservar-button" @click="reservarYGenerarBoleto">Reservar</v-btn>
      </div>
      <div v-else>
        <p>Cargando viaje...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservarView',
  auth: false,
  layout: 'DefaultLay',
  data () {
    return {
      viaje: null,
      asientos: [],
      asientoSeleccionado: null
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.fetchViaje(id)
    window.addEventListener('focus', this.handleWindowFocus)
  },
  beforeDestroy () {
    window.removeEventListener('focus', this.handleWindowFocus)
  },
  computed: {
    todosLosAsientos () {
      return this.asientos.sort(this.compararAsientos);
    }
  },
  methods: {
    handleWindowFocus () {
      if(window.location.href.includes('/https://book.stripe.com/test_bIY5oc67eaXK5bOfYZ')) {
        this.generarBoleto()
      }
    },
    fetchViaje (id) {
      const url = `/viajes/${id}`
      this.$axios.get(url)
        .then(response => {
          this.viaje = response.data
          this.structurarAsientos(this.viaje.Asientos)
        })
        .catch(error => {
          console.error(error)
        })
    },
    structurarAsientos(asientosData) {
      const asientosDisponibles = asientosData.Disponibles.map(nombre => ({
        nombre,
        ocupado: false
      }));
      const asientosOcupados = asientosData.Ocupados.map(nombre => ({
        nombre,
        ocupado: true
      }));
      this.asientos = [...asientosDisponibles, ...asientosOcupados];
    },
    seleccionarAsiento(asiento) {
      if (!asiento.ocupado) {
        this.asientoSeleccionado = asiento.nombre;
      }
    },
    async reservar() {
      if (this.asientoSeleccionado) {
        const id = this.viaje.id;
        const url = `/viajes/${id}/asiento`;
        try {
          const response = await this.$axios.patch(url, { asiento: this.asientoSeleccionado });
          console.log('Asiento reservado:', response.data);
          // Actualizar el estado local con el nuevo estado del viaje
          this.viaje = response.data.viaje;
          this.asientoSeleccionado = null; // Reiniciar selección de asiento
        } catch (error) {
          console.error('Error reservando asiento:', error);
        }
      } else {
        console.warn('Ningún asiento seleccionado');
      }
    },
    compararAsientos(a, b) {
      const numA = parseInt(a.nombre.match(/\d+/)[0], 10);
      const numB = parseInt(b.nombre.match(/\d+/)[0], 10);
      const letraA = a.nombre.match(/[a-zA-Z]+/)[0];
      const letraB = b.nombre.match(/[a-zA-Z]+/)[0];

      if (letraA === letraB) {
        return numA - numB;
      } else {
        return letraA.localeCompare(letraB);
      }
    },
    generarBoleto () {
      const url = '/boletos'
      const data = {
        origen: this.viaje.origen,
        destino: this.viaje.destino,
        fecha: this.viaje.fecha,
        horaSalida: this.viaje.horaSalida,
        horaLlegada: this.viaje.horaLlegada,
        costo: this.viaje.Costo,
        infoViajero: this.Nombre + ' ' + this.Apellido, 
        asiento: this.asientoSeleccionado
      }
      this.$axios.post(url, data)
        .then(response => {
          console.log('Boleto generado:', response.data)
          window.location.href = 'https://book.stripe.com/test_bIY5oc67eaXK5bOfYZ'
        })
        .catch(error => {
          console.error('Error generando boleto:', error)
        })
    },
    async reservarYGenerarBoleto () {
      await this.reservar();
      this.generarBoleto();
    }
  }
}
</script>

<style scoped>
.reservar {
  padding-top: 100px;
  color: black!important;
}
.asientos-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin: 20px 0;
}

.asiento {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
}

.asiento:hover {
  background-color: #e0e0e0;
}

.asiento-seleccionado {
  background-color: green;
  color: white;
}

.asiento-ocupado {
  background-color: red;
  color: white;
  cursor: not-allowed;
  pointer-events: none;
}

.reservar-button {
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reservar-button:hover {
  background-color: darkblue;
}

#app {
  text-align: center;
  height: 100vh;
}

.index-container {
  display: flex;
  justify-content: center;
  align-items: center;
   /* 60px es la altura de la barra de navegación */
   padding-top: 60px;
}
</style>
