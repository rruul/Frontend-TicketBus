<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul class="navbar-menu">
        <li class="navbar-item"><a @click="Inicio">Inicio</a></li>
        <li class="navbar-item"><a @click="Beneficios">Beneficios</a></li>
        <li class="navbar-item"><a @click="Servicios">Servicios</a></li>
        <li class="navbar-item"><a @click="Nosotros">Nosotros</a></li>
        <v-btn rounded="xl" outlined class="navbar-item" @click="login">Iniciar sesion</v-btn>
        <v-btn rounded="xl" outlined class="navbar-item" @click="Register">Registrarse</v-btn>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    Inicio () {
      this.$router.push('/')
    },
    Beneficios () {
      this.$router.push('/beneficios')
    },
    Servicios () {
      this.$router.push('/servicios')
    },
    Nosotros () {
      this.$router.push('/nosotros')
    },
    login () {
      this.$router.push('/login')
    },
    Register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  justify-content: center; /* Centrar el contenedor de navegación horizontalmente */
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px; /* Ancho máximo opcional para la barra de navegación */
  padding: 0 2rem; /* Espacio opcional a los lados */
}

.navbar-logo a {
  text-decoration: none;
  font-size: 1.5rem;
  color: #333;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center; /* Centrar los elementos del menú */
  flex: 1; /* Hacer que el menú ocupe el espacio restante */
}

.navbar-item {
  margin-left: 2rem;
  margin-right: 2rem;
}

.navbar-item a {
  text-decoration: none;
  color: white;
  font-size: 2rem;
}

.navbar-item a:hover {
  color: #007BFF;
}

.v-btn {
  height: 48px!important;
  margin-left: 5rem!important;
  color: white;
}

</style>
