<script>
export default {
  data () {
    return {
      viajes: []
    }
  },
  async mounted () {
    // Realizar la búsqueda de viajes usando los parámetros de la URL
    const { origen, destino, fecha } = this.$route.query
    try {
      const response = await this.$axios.get(`/buscar-viajes?origen=${origen}&destino=${destino}&fecha=${fecha}`)
      this.viajes = response.data
    } catch (error) {
      console.error('Error al buscar viajes:', error)
    }
  },
  methods: {
    verAsientos (viajeId) {
      this.$router.push({ path: `/asientos/${viajeId}` })
    }
  }
}
</script>
