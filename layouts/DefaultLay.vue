<template>
<v-app>
<div id="app">
<NavBar />
<v-main>
<v-container>
  <Nuxt />
</v-container>
</v-main>
</div>
</v-app>
</template>

<script>
import NavBar from '../components/navBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  background-image: url('@/assets/images/fondo1.png');
  background-size: cover; /* Ajusta el tamaño de la imagen */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat;
}

#app {
  text-align: center;
  height: 100vh;
}

main {
  padding-top: 60px; /* Para evitar que el contenido se superponga con la barra de navegación */
}
</style>
